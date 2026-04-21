import { Router } from "express";
import { login, signup, test } from "../controllers/auth.js";

const router = Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/login", login);

export default router;
