import express from "express";
import { verifyUser } from "../middleware/verifyUser.js";
import { addToCart } from "../controller/cartController.js";
const routes = express.Router();

routes.post("/addToCart", verifyUser, addToCart);

export default routes;
