import { Router } from "express";
import {
  allUsers,
  deleteUser,
  updateUser,
  userprofile,
} from "../controllers/user.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { verifyRole } from "../middlewares/verifyUser.js";

const routes = Router();

routes.get("/me", userprofile);
routes.get("/all", authMiddleware, verifyRole("admin"), allUsers);
routes.delete("/:userId", deleteUser);
routes.patch("/:userId", updateUser);

export default routes;
