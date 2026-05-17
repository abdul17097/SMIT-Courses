import { Router } from "express";
import { allProduct } from "../controllers/product.js";

const routes = Router();

routes.get("/products", allProduct);

export default routes;
