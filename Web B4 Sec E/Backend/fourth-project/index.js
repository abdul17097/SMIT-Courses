import express from "express";
import { products } from "./constants/product.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home!");
});

// get products
app.get("/products", (req, res) => {
  const query = req.query;
  console.log(query);

  res.json({ products });
});

// create product
app.post("/products", (req, res) => {
  res.status(201).json({
    data: req.body,
    success: true,
  });
});

// update product
app.put("/products/:id", (req, res) => {
  const params = req.params;
  res.json({
    data: params,
    success: true,
  });
});

// delete product
app.delete("/products/:id", (req, res) => {
  const params = req.params;
  res.json({
    data: params,
    success: true,
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
