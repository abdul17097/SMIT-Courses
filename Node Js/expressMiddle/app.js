import express from "express";
import productRoutes from "./routes/product.js";
const app = express();

app.use("/product/v1", productRoutes);

// const useLogin = false;
// app.use((req, res, next) => {
//   if (useLogin) {
//     next();
//   } else {
//     res.status(401).json({ success: false, message: "Unauthorized" });
//   }
// });

// app.post("/allProducts", (req, res) => {
//   const products = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 200 },
//     { id: 3, name: "Product 3", price: 300 },
//   ];
//   res.json({ success: true, products });
// });
app.get("/", (req, res) => {
  console.log("home route");
  res.json({
    success: true,
    message: "Welcome to the API!",
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
