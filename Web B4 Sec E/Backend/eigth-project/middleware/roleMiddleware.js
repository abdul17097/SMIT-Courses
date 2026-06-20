import { User } from "../modals/user.js";

export const roleMiddleware = (role) => {
  return async (req, res, next) => {
    try {
      const userId = req.user;
      const findUser = await User.findById(userId);
      if (!findUser) {
        return res.status(404).json({ message: "UnAuthorized" });
      }

      if (findUser.role !== role) {
        return res.status(404).json({ message: "UnAuthorized" });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message, success: false });
    }
  };
};
