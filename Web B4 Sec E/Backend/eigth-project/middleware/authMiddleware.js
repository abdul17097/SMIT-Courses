import jwt from "jsonwebtoken";
import { User } from "../modals/user.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const findUser = await User.findById(decoded.userId);

    if (!findUser) {
      return res.status(403).json({
        message: "Forbidden",
        success: false,
      });
    }
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "Enternal Server Error!",
      success: false,
    });
  }
};
