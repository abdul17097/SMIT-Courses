import express from "express";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import allRoutes from "./routes/index.js";
import { dbConnection } from "./config/dbConnection.js";
import { config } from "dotenv";
import cors from "cors";

config();
const app = express();

dbConnection();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", allRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
