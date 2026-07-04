import { Router } from "express";
import { createProduct } from "../controllers/product.js";

const router = Router();

router.post("/create", createProduct);

export default router;
