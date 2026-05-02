import express from "express";

const app = express();

app.get("/home", (req, res) => {
  res.send("home api");
});

app.get("/products", (req, res) => {
  res.send(
    JSON.stringify([
      {
        id: 1,
        name: "Laptop",
        price: 800,
        inStock: true,
      },
      {
        id: 2,
        name: "Phone",
        price: 500,
        inStock: false,
      },
      {
        id: 3,
        name: "Headphones",
        price: 100,
        inStock: true,
      },
    ]),
  );
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
