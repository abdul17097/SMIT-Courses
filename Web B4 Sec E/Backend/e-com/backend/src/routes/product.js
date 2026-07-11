import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.js";
import { authMiddleware, checkRole } from "../middlewares/authMiddleware.js";

const router = Router();

// for seller only
router.post("/create", authMiddleware, checkRole(["SELLER"]), createProduct);
router.get(
  "/get",
  authMiddleware,
  checkRole(["SELLER", "BUYER", "ADMIN"]),
  getAllProducts,
);
router.put(
  "/:productId",
  authMiddleware,
  checkRole(["SELLER", "ADMIN"]),
  updateProduct,
);

// for admin only

// for buyer only
export default router;
