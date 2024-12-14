import { User } from "../schema/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.json({
        success: false,
        message: "User already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({
      success: true,
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const userExist = await User.findOne({
      email: req.body.email,
    });

    if (!req.body.email) {
      return res.json({
        success: false,
        message: "Email is required",
      });
    }
    if (!req.body.password) {
      return res.json({
        success: false,
        message: "Password is required",
      });
    }
    if (!userExist) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, userExist.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Creadintial",
      });
    }
    const jwtToken = await jwt.sign(
      { userId: userExist._id },
      process.env.SECRET
    );

    return res.json({
      success: true,
      message: "Logged in successfully",
      data: { userExist, jwtToken },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
