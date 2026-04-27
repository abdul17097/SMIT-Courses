import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { connection } from "./config/dbconnection.js";
import { User } from "./models/userModel.js";

config();
const app = express();
app.use(express.json());
connection();
app.get("/", async (req, res) => {
  const users = await User.find();
  //   const users = await User.findOne({ _id: "69ee46ee0b3df7863784999a" });

  res.send(users);
});

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    res.send("User created successfully");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
