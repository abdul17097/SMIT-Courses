import express from "express";
import { newProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/newProduct", newProduct);

export default router;
