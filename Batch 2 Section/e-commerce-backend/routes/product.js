import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  productDetails,
} from "../controllers/product.js";
import { authorize, verifyUser } from "../middleware/authMiddleware.js";
import multer from "multer";

const routes = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

routes.post(
  "/",
  verifyUser,
  authorize(["admin"]),
  upload.single("file"),
  createProduct
);

routes.get(
  "/details/:id",
  verifyUser,
  authorize(["admin", "customer"]),
  productDetails
);
routes.delete("/:id", verifyUser, authorize(["admin"]), deleteProduct);
routes.get("/", verifyUser, authorize(["admin", "customer"]), getProducts);

// GET /api/products?search=iphone → search by keyword

// GET /api/products?category=Shoes → filter by category

// GET /api/products?minPrice=50&maxPrice=500 → filter by price range

// GET /api/products?sortBy=price&sortOrder=asc → sort by price ascending

// GET /api/products?page=2&limit=5 → pagination

export default routes;
