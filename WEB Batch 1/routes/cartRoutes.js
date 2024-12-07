import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import { addToCart, cartData } from "../controller/cartController.js";
const routes = express.Router();

routes.post("/addToCart", verifyUser, addToCart);
routes.get("/cart", verifyUser, cartData);

export default routes;
