import jwt from "jsonwebtoken";
import { USER } from "../models/user.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const header = req.header("Authorization");
    if (!header.startsWith("Barear ")) {
      return res.json({
        message: "Access Denied!",
      });
    }
    const token = header.split(" ")[1];

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodeToken.email) {
      return res.json({
        message: "Access Denied!",
      });
    }

    const isExistUser = await USER.findOne({ email: decodeToken.email });
    if (!isExistUser) {
      return res.json({
        message: "Access Denied!",
      });
    }
    req.user = {
      id: isExistUser._id,
      email: isExistUser.email,
      role: isExistUser.role,
    };
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
