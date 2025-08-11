import express from "express";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import { config } from "dotenv";
import { dbConnection } from "./config/connection.js";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware.js";
const app = express();

config();
dbConnection();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
