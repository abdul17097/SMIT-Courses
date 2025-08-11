import express from "express";
import { createProduct } from "../controllers/product.js";
import { authorize, verifyUser } from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/", verifyUser, authorize(["admin"]), createProduct);

export default routes;
