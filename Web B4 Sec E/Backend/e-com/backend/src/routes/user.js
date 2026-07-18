import { Router } from "express";
import { authMiddleware, checkRole } from "../middlewares/authMiddleware.js";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = Router();

router.post("/create", authMiddleware, checkRole(["ADMIN"]), createUser);
router.delete(
  "/:userId",
  authMiddleware,
  checkRole(["ADMIN", "SELLER"]),
  deleteUser,
);
router.patch(
  "/",
  authMiddleware,
  checkRole(["ADMIN", "SELLER", "BUYER"]),
  updateUser,
);

router.get("/", authMiddleware, checkRole(["ADMIN"]), getUsers);

export default router;
