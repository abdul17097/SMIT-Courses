import { Router } from "express";
import { authMiddleware, checkRole } from "../middlewares/authMiddleware.js";
import { createUser, deleteUser } from "../controllers/user.js";

const router = Router();

router.post("/create", authMiddleware, checkRole(["ADMIN"]), createUser);
router.delete(
  "/:userId",
  authMiddleware,
  checkRole(["ADMIN", "SELLER"]),
  deleteUser,
);

export default router;
