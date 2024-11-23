import { User } from "../schema/userSchema.js";

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
    const newUser = await User.create({
      name,
      email,
      password,
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
