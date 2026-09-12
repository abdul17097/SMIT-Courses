import express from "express";
import { db_connection } from "./config/db_connection.js";
import { config } from "dotenv";
config();
const app = express();
db_connection();

app.get("/", (req, res) => {
  res.json({
    message: "Äpi Working!",
  });
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
