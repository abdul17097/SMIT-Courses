import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return next(
        new AppError(
          "Access denied. No authentication token provided. Please log in.",
          401,
        ),
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export const checkRole = (roles) => {
  try {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError("Access denied. Insufficient permissions.", 403),
        );
      }
      next();
    };
  } catch (error) {
    next(error);
  }
};
