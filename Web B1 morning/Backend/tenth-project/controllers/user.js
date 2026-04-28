import { User } from "../models/userModel.js";

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const existUser = await User.findOne({ _id: userId });
    if (!existUser) {
      return res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
    }

    res.status(200).json({
      data: existUser,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(409).json({
        message: "User already exist",
        success: false,
      });
    }
    const newUSer = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      data: newUSer,
      message: "User Created Successfully",
      success: true,
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
    const { name, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { name, email, password },
      {
        new: true,
      },
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "user not found!",
        success: false,
      });
    }
    res.status(201).json({
      message: "User Updated Successfully",
      data: updatedUser,
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
    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    if (!deletedUser) {
      return res.status(404).json({
        message: "User Not Found!",
        success: false,
      });
    }

    res.status(200).json({
      message: "user deleted Successfully",
      data: deletedUser,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
