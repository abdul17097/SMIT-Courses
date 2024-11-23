import express from "express";
import { addUser, getUser, getUsers } from "../controller/userController.js";
const userRoutes = express.Router();

userRoutes.post("/addUser", addUser);
userRoutes.get("/allUsers", getUsers);
userRoutes.get("/singleUser/:id", getUser);

export default userRoutes;
