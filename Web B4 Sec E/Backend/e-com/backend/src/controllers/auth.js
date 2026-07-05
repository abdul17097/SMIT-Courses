import { User } from "../modals/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, email, password, authProvider } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      throw new Error("Invalid credentials");
    }

    if (authProvider === "GOOGLE" && findUser.authProvider !== "GOOGLE") {
      findUser.authProvider = "GOOGLE";
      findUser.googleId = req.body.googleId;
      findUser.avatar = req.body.avatar;
      await findUser.save();
    }

    if (authProvider === "LOCAL" && findUser.authProvider !== "LOCAL") {
      throw new Error(
        "Invalid credentials or Please login with your Google account",
      );
    }

    if (authProvider === "GOOGLE" && findUser.authProvider === "GOOGLE") {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          // sameSite: "strict",
          maxAge: 3600000, // 1 hour
        })
        .status(200)
        .json({
          message: "Login successful",
          user: {
            _id: findUser._id,
            username: findUser.username,
            email: findUser.email,
            role: findUser.role,
            shopName: findUser.shopName,
          },
        });
    }

    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        // sameSite: "strict",
        maxAge: 3600000, // 1 hour
      })
      .status(200)
      .json({
        message: "Login successful",
        user: {
          _id: findUser._id,
          username: findUser.username,
          email: findUser.email,
          role: findUser.role,
          shopName: findUser.shopName,
        },
      });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const signup = async (req, res) => {
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

  const findUser = await User.findOne({ email });

  if (findUser) {
    throw new Error("User already exists");
  }

  if (authProvider === "GOOGLE") {
    const newUser = await User.create({
      username,
      email,
      authProvider,
      googleId,
      avatar,
      role,
      shopName: role === "SELLER" ? shopName : undefined,
    });
    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
    role,
    shopName: role === "SELLER" ? shopName : undefined,
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      maxAge: 3600000, // 1 hour
    })
    .status(201)
    .json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        shopName: newUser.shopName,
      },
    });

  try {
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    throw new Error(error.message);
  }
};
