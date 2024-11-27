import express from "express";
import {
  addUserController,
  allUsers,
  deleteUser,
  login,
  updateUser,
} from "../controllers/userControler.js";
import { verifyUser } from "../middleware/verifyUser.js";
const router = express.Router();

router.get("/allUsers", verifyUser, allUsers);
router.post("/addUser", addUserController);
router.put("/user/:id", updateUser);
router.delete("/user/:userId", deleteUser);
router.post("/login", login);
export default router;
