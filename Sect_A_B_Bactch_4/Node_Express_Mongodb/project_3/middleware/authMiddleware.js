import jwt from "jsonwebtoken";
import { user } from "../db/user.js";

export const authMiddlware = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.json({
        message: "You don't have permission",
      });
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY);

    if (user._id !== payload.id && user.email !== payload.email) {
      return res.status(401).json({
        message: "Access Denied!",
        success: false,
      });
    }

    req.user = payload;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
