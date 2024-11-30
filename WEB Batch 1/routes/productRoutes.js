import express from "express";
import {
  allProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/productController.js";
import { verifyUser } from "../middleware/verifyUser.js";
const routes = express.Router();

routes.post("/new-product", verifyUser, createProduct);
routes.get("/all-products", allProducts);
routes.put("/update-product/:productId", verifyUser, updateProduct);
routes.delete("/delete-product/:productId", verifyUser, deleteProduct);
export default routes;
