import { hash } from "bcryptjs";
import { User } from "../modals/user.js";
import { AppError } from "../utils/appError.js";

export const createUser = async (req, res, next) => {
  try {
    const { username, email, password, shopName, role } = req.body;
    if (!email) {
      return next(new AppError("Email is required", 400));
    }
    if (!username) {
      return next(new AppError("Username is required", 400));
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return next(new AppError("A user with this email already exists", 409));
    }

    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      role: role,
      password: hashPassword,
      shopName: role === "BUYER" ? "" : shopName,
    });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,

        shopName: newUser.shopName,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { role, id } = req.user;

    const findUser = await User.findById(userId);
    if (!findUser) {
      return next(new AppError("User Not Found", 404));
    }

    const deleteUSer = await User.deleteOne(userId);
    return res.status(201).json({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
