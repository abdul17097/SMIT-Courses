import { User } from "../modals/user.js";
import bcrypt from "bcryptjs";

export const allUser = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      res.status(404).json({
        message: "users not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "All Users",
      data: users,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const findUser = await User.findById(userId);

    if (!findUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    if (findUser.role == "admin") {
      return res.status(403).json({
        message: "You Can't delete this user",
        success: false,
      });
    }

    await User.deleteOne({
      _id: userId,
    });

    res.status(200).json({
      message: "User deleted Successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User Details",
      data: findUser,
      scuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email, password } = req.body;

    const findUser = await User.findById(userId);

    if (!findUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }
    let hashpassword;
    if (password) {
      hashpassword = await bcrypt.hash(password, 10);
    }

    findUser.username = username || findUser.username;
    findUser.email = email || findUser.email;
    findUser.password = hashpassword || findUser.password;

    findUser.save();

    res.status(201).json({
      message: "User updated Successfully",
      success: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
