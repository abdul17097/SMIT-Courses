import { db } from "../db.js";

export const verifyRole = (...roles) => {
  return (req, res, next) => {
    try {
      const { email, role } = req.user;

      const isExistUser = db.find(
        (item) => item.email === email && item.role === role,
      );
      if (!isExistUser) {
        return res.json({
          message: "UnAuthorized",
        });
      }

      if (!roles.includes(role)) {
        return res.json({
          message: "UnAuthorized",
        });
      }

      next();
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
};
