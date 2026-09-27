import express from "express";
import { connectiondb } from "./config/connectiondb.js";
import { config } from "dotenv";
import authRoutes from "./routes/auth.js";
const app = express();

config();
connectiondb();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
  });
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
