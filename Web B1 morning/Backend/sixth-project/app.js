import express from "express";
import { test } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
// app.use("/product", productRoutes);

app.listen(7000, () => {
  console.log("http://localhost:7000");
});
