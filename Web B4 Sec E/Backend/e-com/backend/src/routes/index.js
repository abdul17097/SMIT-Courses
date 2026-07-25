import { Router } from "express";
import productRoutes from "../routes/product.js";
import authRoutes from "../routes/auth.js";
import adminRoutes from "../routes/user.js";
import cartRoutes from "../routes/cart.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);

export default router;
