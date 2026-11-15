import { USER } from "../models/user.js";

export const verifyRole = (...roles) => {
  return async (req, res, next) => {
    console.log(req.user);

    try {
      const { email, role, id } = req.user;

      const isExistUser = await USER.findOne({
        email: email,
        _id: id,
      });
      console.log(isExistUser);

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
