import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/dbConnection.js";
import authRoutes from "./routes/auth.js";

config();
connectDB();
const app = express();
app.use(express.json());

// http://localhost:5000/api/signup
// http://localhost:5000/api/login
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
