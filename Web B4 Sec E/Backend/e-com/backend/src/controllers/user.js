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

    const deleteUSer = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          isActive: false,
        },
      },
    );
    return res.status(201).json({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      role: userRole,
      avatar,
      shopName,
      userId,
      isActive,
    } = req.body;
    const { role, id } = req.user;

    const targetUserId = role === "ADMIN" ? userId : id;

    if (!targetUserId) {
      return next(new AppError("Target User ID is required", 400));
    }

    const findUser = await User.findById(targetUserId);
    if (!findUser) {
      return next(new AppError("User Not Found", 404));
    }

    if (role !== "ADMIN" && targetUserId !== id) {
      return next(new AppError("Unauthorized action", 403));
    }

    findUser.username = username || findUser.username;
    findUser.email = email || findUser.email;
    findUser.avatar = avatar || findUser.avatar;

    if (role === "SELLER" || findUser.role === "SELLER") {
      findUser.shopName = shopName || findUser.shopName;
    }

    if (role === "ADMIN") {
      findUser.role = userRole || findUser.role;
      findUser.isActive = isActive || findUser.isActive;
      if (findUser.role === "SELLER") {
        findUser.shopName = shopName || findUser.shopName;
      }
    }

    if (password) {
      findUser.password = await hash(password, 10);
    }

    const updatedUser = await findUser.save();

    return res.status(200).json({
      message: "User Updated Successfully!",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { userStatus = "all" } = req.query;
    console.log(userStatus);

    let users;
    if (userStatus == "active") {
      users = await User.find({
        isActive: true,
      });
    }
    if (userStatus == "inactive") {
      users = await User.find({
        isActive: false,
      });
    }

    if (userStatus == "all") {
      users = await User.find();
    }

    res.status(200).json({
      message: "Users",
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
