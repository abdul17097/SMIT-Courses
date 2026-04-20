import express from "express";
import { middleware } from "./middlewares/auth.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors("http://localhost:5173"));
app.use(morgan("dev"));
app.use(express.json());

app.get("/profile", middleware, (req, res) => {
  res.json({ message: "test 123!" });
});

app.delete("/products/:id", middleware, (req, res) => {
  res.send("Product Deleted Successfully");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
