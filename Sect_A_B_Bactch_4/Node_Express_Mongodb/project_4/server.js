import express from "express";
import { db_connection } from "./config/db_connection.js";
import { config } from "dotenv";
import authRoute from "./routes/auth.js";
config();
const app = express();
app.use(express.json());
db_connection();

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.json({
    message: "Äpi Working!",
  });
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
