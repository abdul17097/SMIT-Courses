import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  productDetails,
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
router.delete(
  "/:productId",
  authMiddleware,
  checkRole(["SELLER", "ADMIN"]),
  deleteProduct,
);
router.get("/:productId", productDetails);

// for admin only

// for buyer only
export default router;
