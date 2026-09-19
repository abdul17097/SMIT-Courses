import { User } from "../models/user.js";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      return res.status(409).json({
        message: "User Already Register!",
        success: false,
      });
    }

    const hashPassword = await hash(password, 10);

    const newUser = await User.insertOne({
      username,
      email,
      password: hashPassword,
    });

    res.status(200).json({
      message: "Success",
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

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
    }
    const token = jwt.sign({ _id: findUser.email }, process.env.JWT_SECRET);

    res.status(201).json({
      message: "User Login Successfully!",
      success: true,
      data: { ...findUser, token },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// User.deleteOne({})
// User.findAndUpdate({_id: "345345"}, {
// $set:{
// username: "test123",
// }
// })
