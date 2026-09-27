import { User } from "../modals/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const findUser = async (email) => {
  return await User.findOne({ email: email });
};

const tokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY);
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (findUser(email)) {
      return res.status(409).json({
        message: "User Already Registered",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await User.insertOne({
      email: email,
      password: hashpassword,
      username: username,
    });

    res.status(201).json({
      message: "You have Registered Successfully!",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = findUser(email);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
        success: false,
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({
        message: "Invalid Credientials",
        success: false,
      });
    }

    const token = tokenGenerator({ _id: user._id, email: user.email });

    res.status(200).json({
      message: "User Login Successfully!",
      success: true,
      data: { ...user, token },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
