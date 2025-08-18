import express from "express";
import { addToCart } from "../controllers/cart.js";
import { authorize, verifyUser } from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/", verifyUser, authorize(["customer"]), addToCart);

export default routes;
