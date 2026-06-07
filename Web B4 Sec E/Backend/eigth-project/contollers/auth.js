import { User } from "../modals/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(409).json({
        message: "User Already Exist",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      password: hashPassword,
      email: email,
    });

    res.status(201).json({
      message: "User Register Successfully!",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
    }

    const comparePassword = await bcrypt.compare(password, userExist.password);

    if (!comparePassword) {
      return res.status(401).json({
        message: "Invalid Crediential",
        success: false,
      });
    }

    const token = jwt.sign({ userId: userExist._id }, process.env.JWT_SECRET);

    res.status(200).json({
      message: "You have Login Successfully!",
      data: {
        ...userExist._doc,
        token: token,
      },
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const profile = async (req, res) => {
  const userId = req.user;

  try {
    const user = await User.findById(userId);
    res.status(200).json({
      message: "Profile",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};
