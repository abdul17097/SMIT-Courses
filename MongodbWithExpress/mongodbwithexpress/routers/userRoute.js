import express from "express";
import { addUserController, updateUser } from "../controllers/userControler.js";
const router = express.Router();

router.post("/addUser", addUserController);
router.put("/user/:id", updateUser);

export default router;
