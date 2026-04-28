import express from "express";
import userRoutes from "./routes/user.js";
import { connection } from "./config/dbconnection.js";
import { config } from "dotenv";
const app = express();
config();
connection();
app.use(express.json());

// routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
