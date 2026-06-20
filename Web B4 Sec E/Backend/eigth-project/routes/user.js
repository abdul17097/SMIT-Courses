import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { allUser } from "../contollers/user.js";
const router = Router();

router.get("/all", authMiddleware, roleMiddleware("admin"), allUser);

export default router;
