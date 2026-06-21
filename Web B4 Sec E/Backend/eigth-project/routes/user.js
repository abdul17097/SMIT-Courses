import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import {
  allUser,
  deleteUser,
  getUser,
  updateUser,
} from "../contollers/user.js";
const router = Router();

router.get("/all", authMiddleware, roleMiddleware("admin"), allUser);
router.delete("/:userId", authMiddleware, roleMiddleware("admin"), deleteUser);
router.get("/:userId", authMiddleware, roleMiddleware("admin"), getUser);
router.put("/:userId", authMiddleware, roleMiddleware("admin"), updateUser);

export default router;
