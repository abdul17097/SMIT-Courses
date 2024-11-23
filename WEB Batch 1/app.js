import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
configDotenv();
const app = express();
app.use(express.json());
const port = 3000;
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};
connection();

app.use("/user", userRoutes);
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
