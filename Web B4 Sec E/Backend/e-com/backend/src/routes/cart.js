import { Router } from "express";
import {
  addToCart,
  clearCart,
  deleteCartItem,
  getCartProducts,
} from "../controllers/cart.js";
import { authMiddleware, checkRole } from "../middlewares/authMiddleware.js";

const routes = Router();

routes.post(
  "/addtocart",
  authMiddleware,
  checkRole(["BUYER", "SELLER"]),
  addToCart,
);
routes.get(
  "/",
  authMiddleware,
  checkRole(["BUYER", "SELLER"]),
  getCartProducts,
);
routes.delete("/", authMiddleware, checkRole(["BUYER", "SELLER"]), clearCart);
routes.delete(
  "/:productId",
  authMiddleware,
  checkRole(["BUYER", "SELLER"]),
  deleteCartItem,
);

export default routes;
