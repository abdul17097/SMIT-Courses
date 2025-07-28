import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./config/connection.js";
import { User } from "./model/user.js";

const app = express();

config();
dbConnection();
app.use(express.json());

app.get("/", async (req, res) => {
  const allUser = await User.find();
  res.json({
    data: allUser,
    message: "All User",
  });
});

app.get("/newUser", async (req, res) => {
  const newUser = await User.insertOne({
    email: "test124@gmail.com",
    password: "test123",
    username: "Test",
  });

  if (newUser) {
    return res.json({
      data: newUser,
      message: "User Register Successfully",
    });
  }
  res.json({
    message: "User Register Failed",
  });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
