import { Router } from "express";
import {
  allUsers,
  deleteUser,
  updateUser,
  userprofile,
} from "../controllers/user.js";

const routes = Router();

routes.get("/me", userprofile);
routes.get("/all", allUsers);
routes.delete("/:userId", deleteUser);
routes.patch("/:userId", updateUser);

export default routes;
