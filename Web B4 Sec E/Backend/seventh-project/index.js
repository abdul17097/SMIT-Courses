import express from "express";
import { config } from "dotenv";
import dbConnection from "./config/dbConnection.js";
import bcrypt from "bcryptjs";
import { User } from "./modals/user.js";

config();
dbConnection();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return res.status(409).json({
        message: "user already register",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });
    res.status(201).json({
      success: true,
      message: "User Signup Successfully!",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
