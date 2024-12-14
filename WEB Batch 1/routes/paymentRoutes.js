import express from "express";
import { payment } from "../controller/paymentController.js";
const routes = express.Router();

routes.post("/checkout", payment);

export default routes;
