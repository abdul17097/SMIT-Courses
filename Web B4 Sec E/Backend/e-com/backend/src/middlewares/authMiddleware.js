import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req?.cookies?.token;
    if (!token) {
      throw new Error("No token provided");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Add token verification logic here
    next();
  } catch (error) {
    throw new Error(error.message);
  }
};
