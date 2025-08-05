import express from "express";
import { createProduct } from "../controllers/product.js";

const routes = express.Router();

routes.get("/", createProduct);

export default routes;
