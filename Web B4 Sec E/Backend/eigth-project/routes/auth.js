import { Router } from "express";
import { login, profile, signup } from "../contollers/auth.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, profile);

export default router;
