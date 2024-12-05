import express from "express";
import {
  getAllProducts,
  newProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/new-product", newProduct);
router.get("/allProducts", getAllProducts);
router.put("/update-product/:id", updateProduct);

export default router;
