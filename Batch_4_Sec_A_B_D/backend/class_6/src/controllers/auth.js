import { USER } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const isExistUser = await USER.findOne({ email: email });
    if (isExistUser) {
      return res.status(409).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await USER.insertOne({
      fullname,
      email,
      password: hashpassword,
    });

    res.status(201).json({
      message: "User Signup Successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExistUser = await USER.findOne({ email: email });
    if (!isExistUser) {
      return res.status(404).json({
        message: "User Not Found",
        success: false,
      });
    }

    const comparepassword = await bcrypt.compare(
      password,
      isExistUser.password,
    );

    if (!comparepassword) {
      return res.status(401).json({
        message: "Invalid credientials",
        success: false,
      });
    }

    const token = jwt.sign(
      { id: isExistUser._id, email: isExistUser.email, role: isExistUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.status(201).json({
      message: "User Signup Successfully",
      success: true,
      data: {
        isExistUser,
        token: token,
      },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
