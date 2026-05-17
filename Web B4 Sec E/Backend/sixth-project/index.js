import express from "express";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());

app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

// http://localhost:500/api/v1/products

// app.get("/products", (req, res)=>{
//     res.json({
//         message: "all product"
//     })
// })

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
