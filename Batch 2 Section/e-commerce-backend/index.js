import express from "express";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import { config } from "dotenv";
import { dbConnection } from "./config/connection.js";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
import cors from "cors";
const app = express();

config();
dbConnection();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
