import jwt from "jsonwebtoken";
import { User } from "../modals/user.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization?.split(" ")[1];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    const isExisteUser = await User.findById(decoded.userId);
    if (!isExisteUser) {
      return res.status(401).json({ message: "User not found" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
