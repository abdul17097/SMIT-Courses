import { Router } from "express";
import { login, signup, logout } from "../controllers/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
