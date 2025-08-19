import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cart.js";
import { authorize, verifyUser } from "../middleware/authMiddleware.js";

const routes = express.Router();

// add to cart
routes.post("/", verifyUser, authorize(["customer"]), addToCart);

// get cart items
routes.get("/", verifyUser, authorize(["customer"]), getCart);

// remove cart item
routes.delete(
  "/:productId",
  verifyUser,
  authorize(["customer"]),
  removeFromCart
);

export default routes;
