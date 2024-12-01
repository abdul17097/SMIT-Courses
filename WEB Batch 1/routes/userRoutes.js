import express from "express";
import {
  addUser,
  getUser,
  getUsers,
  login,
} from "../controller/userController.js";
import { verifyAdmin, verifyUser } from "../middleware/verifyUser.js";
const userRoutes = express.Router();

userRoutes.post("/addUser", addUser);
userRoutes.get("/allUsers", verifyUser, getUsers);
userRoutes.get("/singleUser/:id", getUser);
userRoutes.post("/login", login);

export default userRoutes;
