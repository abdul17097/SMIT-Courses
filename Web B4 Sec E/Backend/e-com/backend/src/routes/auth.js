import { Router } from "express";
import { login, signup, logout, forgetPassword, verifyResetCode, resetPassword, } from "../controllers/auth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forget-password", forgetPassword);
router.post("/verify-reset-code", verifyResetCode);
router.post("/reset-password", resetPassword);

export default router;
