import express from "express";
import cookieParser from "cookie-parser";
import { test } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import rateLimit from "express-rate-limit";
import { config } from "dotenv";

config();

const app = express();

const limiter = rateLimit({
  max: 5,
  windowMs: 10 * 60 * 1000,
  message: "Too many attempt",
});

app.use(express.json());
app.use(cookieParser());
// app.use("/test", limiter);

app.use("/test", (req, res) => {
  const secret_key = process.env.JWT_SECRET_KEY;
  res.json({
    data: secret_key,
    success: true,
  });
});

// app.get("/test", (req, res) => {
//   res
//     .cookie("test", "hello world", {
//       maxAge: 5 * 60 * 1000,
//       httpOnly: true,
//       secure: true,
//       sameSite: "strict",
//     })
//     .json({
//       message: "welcome",
//       success: true,
//     });
// });

app.post("/getCookies", (req, res) => {
  const cookieData = req.cookies;
  res.json({ test: cookieData });
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
// app.use("/product", productRoutes);

app.listen(7000, () => {
  console.log("http://localhost:7000");
});
