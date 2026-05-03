import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("hello world!");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Welcome to Home!");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
