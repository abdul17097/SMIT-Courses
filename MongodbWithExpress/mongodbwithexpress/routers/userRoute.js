import express from "express";
import {
  addUserController,
  deleteUser,
  updateUser,
} from "../controllers/userControler.js";
const router = express.Router();

router.post("/addUser", addUserController);
router.put("/user/:id", updateUser);
router.delete("/user/:userId", deleteUser);
export default router;
