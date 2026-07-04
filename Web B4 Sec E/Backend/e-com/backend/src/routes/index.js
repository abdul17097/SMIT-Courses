import { Router } from "express";
import productRoutes from "../routes/product.js";
import authRoutes from "../routes/auth.js";

const router = Router();

router.use("/auth", auth);
router.use("/product", productRoutes);

export default router;
