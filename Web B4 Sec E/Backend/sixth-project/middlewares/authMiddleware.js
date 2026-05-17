import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "UnAuthorized",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req = {
    //     params,
    //     json,
    //     send,
    //     query,
    //     user: decoded
    // }

    req.user = decoded;

    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
