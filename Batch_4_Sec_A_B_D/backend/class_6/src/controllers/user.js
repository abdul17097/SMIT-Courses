import { USER } from "../models/user.js";

export const userprofile = (req, res) => {
  res.json({
    message: "Your profile data is Avaliable",
  });
};

export const allUsers = async (req, res) => {
  try {
    const users = await USER.find();
    res.status(200).json({
      message: "All User",
      data: users,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await USER.findByIdAndDelete({ _id: userId });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await USER.findByIdAndUpdate(
      { _id: userId },
      {
        fullname: "Testxyz",
      },
      {
        new: true,
      },
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User Deleted Successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
