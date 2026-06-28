import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/dbConnection.js";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import userRoutes from "./routes/user.js";
import { cloudinaryConfig } from "./config/cloudinary.js";
import cors from "cors";

config();
connectDB();
cloudinaryConfig();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
  }),
);

// http://localhost:5000/api/signup
// http://localhost:5000/api/login
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
