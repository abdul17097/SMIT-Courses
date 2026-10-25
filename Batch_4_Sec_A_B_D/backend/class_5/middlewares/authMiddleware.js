import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const authMiddleware = (req, res, next) => {
  try {
    const header = req.header("Authorization");
    if (!header.startsWith("Barear ")) {
      return res.json({
        message: "Access Denied!",
      });
    }

    const token = header.split(" ")[1];

    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodeToken.email) {
      return res.json({
        message: "Access Denied!",
      });
    }

    const isExistUser = db.find((item) => item.email === decodeToken.email);

    if (!isExistUser) {
      return res.json({
        message: "Access Denied!",
      });
    }

    req.user = { email: decodeToken.email, role: decodeToken.role };

    next();
  } catch (error) {
    res.json({
      message:
        "your seeion is Expired, Now You need to Login Again" || error.message,
    });
  }
};
