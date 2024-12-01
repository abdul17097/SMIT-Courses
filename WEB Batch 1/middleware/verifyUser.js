import jwt from "jsonwebtoken";
import { User } from "../schema/userSchema.js";
export const verifyUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }
  const getToken = req.headers.authorization.split(" ")[1];
  const verifyUser = await jwt.verify(getToken, process.env.SECRET);
  req.userId = verifyUser.userId;
  next();

  try {
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const userExists = await User.findById({ _id: userId });
    if (!userExists) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    if (!userExists.isAdmin) {
      return res.json({
        success: false,
        message: "Unauthorized access",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
