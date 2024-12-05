import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { verifyUser } from "../middleware/verifyUser.js";
const routes = express.Router();

routes.post("/addToCart", verifyUser, addToCart);

export default routes;
// localStorage.getItem("token")
// fetch("url", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "authorization": "Bearer  "
//     },
//     body: JSON.stringify({
//         productId: "123",
//         quantity: 2
//     }),
// })
