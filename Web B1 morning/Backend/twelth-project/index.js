import express from "express";
import { connectDB } from "./config/db_connection.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import { config } from "dotenv";

config();

const app = express();
connectDB();
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("Server is running http://localhost:5000");
});
