import { User } from "../modals/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
import { v4 as uuidv4 } from "uuid";
import sendEmail from "../utils/nodemailer.js";


const generateToken = (role, userId) => {
  return jwt.sign({ role, id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 3600000,
  });
};

export const signup = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      shopName,
      authProvider,
      googleId,
      avatar,
      role,
    } = req.body;

    if (!email) {
      return next(new AppError("Email is required", 400));
    }
    if (!username) {
      return next(new AppError("Username is required", 400));
    }

    const provider = authProvider || "LOCAL";
    if (!["LOCAL", "GOOGLE"].includes(provider)) {
      return next(
        new AppError(
          "Invalid authentication provider. Must be LOCAL or GOOGLE.",
          400,
        ),
      );
    }

    const userRole = role || "BUYER";
    if (!["SELLER", "BUYER", "ADMIN"].includes(userRole)) {
      return next(new AppError("Invalid user role", 400));
    }

    if (userRole === "SELLER" && !shopName) {
      return next(new AppError("Sellers must provide a shop name", 400));
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return next(new AppError("A user with this email already exists", 409));
    }

    let newUser;

    if (provider === "GOOGLE") {
      if (!googleId) {
        return next(
          new AppError("Google authentication requires a Google ID", 400),
        );
      }

      newUser = await User.create({
        username,
        email,
        authProvider: provider,
        googleId,
        avatar,
        role: userRole,
        shopName: userRole === "SELLER" ? shopName : undefined,
      });
    } else {
      if (!password) {
        return next(
          new AppError("Password is required for local registration", 400),
        );
      }
      if (password.length < 6) {
        return next(
          new AppError("Password must be at least 6 characters long", 400),
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        authProvider: provider,
        role: userRole,
        shopName: userRole === "SELLER" ? shopName : undefined,
      });
    }

    const token = generateToken(newUser.role, newUser._id);
    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        shopName: newUser.shopName,
        authProvider: newUser.authProvider,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password, authProvider, googleId, avatar } = req.body;

    if (!email) {
      return next(new AppError("Email is required", 400));
    }

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return next(new AppError("Invalid credentials", 401));
    }

    const provider = authProvider || "LOCAL";

    if (provider === "GOOGLE") {
      if (!googleId) {
        return next(
          new AppError("Google ID is required for Google login", 400),
        );
      }

      if (findUser.authProvider !== "GOOGLE") {
        findUser.authProvider = "GOOGLE";
        findUser.googleId = googleId;
        if (avatar) findUser.avatar = avatar;
        await findUser.save();
      }
    } else {
      if (findUser.authProvider !== "LOCAL") {
        return next(
          new AppError(
            "This email is registered using Google. Please log in with Google.",
            400,
          ),
        );
      }

      if (!password) {
        return next(new AppError("Password is required for local login", 400));
      }

      const isPasswordValid = await bcrypt.compare(password, findUser.password);
      if (!isPasswordValid) {
        return next(new AppError("Invalid credentials", 401));
      }
    }

    const token = generateToken(findUser.role, findUser._id);
    setAuthCookie(res, token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: findUser._id,
        username: findUser.username,
        email: findUser.email,
        role: findUser.role,
        shopName: findUser.shopName,
        authProvider: findUser.authProvider,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
};



export const forgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;


    if (!email) {
      return next(new AppError("Email is required", 400));
    }
    const findUser = await User.findOne({ email });


    if (!findUser) {
      return next(new AppError("User not found Please Signup", 404));
    }
    const resetCode = uuidv4().slice(0, 6);
    findUser.resetCode = resetCode;
    findUser.resetCodeExpires = Date.now() + 10 * 60 * 1000;
    await findUser.save();
    await sendEmail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `You requested to reset your password. Use this code: ${resetCode}`,
      html: `<p>You requested to reset your password. Use this code: <strong>${resetCode}</strong></p>`,
    });

    return res.status(200).json({
      success: true,
      message: "Reset code sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const verifyResetCode = async (req, res, next) => {
  try {
    const { email, resetCode } = req.body;

    if (!email || !resetCode) {
      return next(new AppError("Email and reset code are required", 400));
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return next(new AppError("User not found", 404));
    }
    if (findUser.resetCode !== resetCode) {
      return next(new AppError("Invalid reset code", 400));
    }
    if (findUser.resetCodeExpires < Date.now()) {
      return next(new AppError("Reset code has expired", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Reset code verified successfully",
    });
  } catch (error) {
    next(error);
  }
};


export const resetPassword = async (req, res, next) => {
  try {
    const { email, resetCode, password } = req.body;

    if (!email || !resetCode || !password) {
      return next(new AppError("Email, reset code and password are required", 400));
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return next(new AppError("User not found", 404));
    }
    if (findUser.resetCode !== resetCode) {
      return next(new AppError("Invalid reset code", 400));
    }
    if (findUser.resetCodeExpires < Date.now()) {
      return next(new AppError("Reset code has expired", 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    findUser.password = hashedPassword;
    findUser.resetCode = null;
    findUser.resetCodeExpires = null;
    await findUser.save();
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    next(error);
  }
};

