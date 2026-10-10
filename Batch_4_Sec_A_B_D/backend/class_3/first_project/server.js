import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.send("lkasdf;lkjadsf");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
