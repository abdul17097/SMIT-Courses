import express from "express";
import {
  getAllProducts,
  newProduct,
  updateProduct,
} from "../controllers/productController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/new-product", verifyUser, newProduct);
router.get("/allProducts", verifyUser, getAllProducts);
router.put("/update-product/:id", updateProduct);

export default router;
