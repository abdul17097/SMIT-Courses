import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    if (!username || !email || !password) {
      res.json({
        message: "Please fill all Fields",
      });
    }

    const findUser = await User.findOne({
      email: email,
    });

    if (findUser) {
      res.status(409).json({
        message: "User Already Exist",
      });
    }
    const hashPasword = await bcrypt.hashSync(password);
    const newUser = await User.insertOne({
      username,
      email,
      password: hashPasword,
    });

    res.json({
      message: "User Register Successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });

    const comparePassword = bcrypt.compare(password, findUser.password);

    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        userId: findUser._id,
        role: findUser.role,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      message: "User Login Successfully",
      data: findUser,
      token,
      success: true,
    });
  } catch (error) {
    throw new Error(error.message, 500);
  }
};

export const profile = async (req, res) => {
  try {
    const user = req.user;
    const findUser = await User.findOne({ _id: user.userId });

    if (!findUser) {
      return res.status(400).json({
        message: "User not Found",
        success: false,
      });
    }

    res.status(200).json({
      mesage: "User Details",
      data: findUser,
      succes: true,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
