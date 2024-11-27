import { User } from "../schemas/useSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const addUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    const isExistEmail = await User.findOne({
      email,
    });
    if (isExistEmail) {
      return res.json({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.json({
      success: true,
      message: "User added successfully",
      // user: newUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const exitUser = await User.findById({ _id: id });
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    if (!exitUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    await User.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: hashPassword,
        },
      }
    );
    const updateUser = await User.findById({ _id: id });

    return res.json({
      success: true,
      message: "User Updated successfully",
      user: updateUser,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to update user",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const existUser = await User.findById({ _id: id });

    if (!existUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    await User.deleteOne({ _id: id });

    return res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET);
    console.log(token);

    return res.json({
      success: true,
      message: "Login successful",
      data: { user, token },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to login",
      error: error.message,
    });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
};
