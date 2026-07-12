import { Router } from "express";
import productRoutes from "../routes/product.js";
import authRoutes from "../routes/auth.js";
import adminRoutes from "../routes/user.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/product", productRoutes);

export default router;
