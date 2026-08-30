import { user } from "../db/user.js";

export const verfyRoleMiddleware = (...roles) => {
  return (req, res, next) => {
    let isVerify = roles.includes(user.role);

    if (!isVerify) {
      return res.json({
        message: "Access Denied!",
      });
    }
    next();
  };
};
