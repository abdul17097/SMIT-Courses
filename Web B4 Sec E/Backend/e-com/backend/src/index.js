import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import allRoutes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", allRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(errorMiddleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
