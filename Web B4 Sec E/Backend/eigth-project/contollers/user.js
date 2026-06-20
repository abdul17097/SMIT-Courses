import { User } from "../modals/user.js";

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
