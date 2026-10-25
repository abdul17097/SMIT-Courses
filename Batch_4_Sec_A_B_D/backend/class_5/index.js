import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "./db.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

import { config } from "dotenv";
import { verifyRole } from "./middlewares/verifyRole.js";

config();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome");
});

// register
app.post("/signup", async (req, res) => {
  const { username, email, newPassword } = req.body;

  if (!username || !email || !newPassword) {
    return res.json({
      message: "Please fill all fields",
    });
  }

  const hashPassword = await bcrypt.hash(newPassword, 10);

  res.json({
    message: "You have Registerd Successfully!",
    data: {
      email: email,
      password: hashPassword,
    },
  });
});

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      message: "Please fill all fields",
    });
  }

  const isExistUser = db.find((item) => item.email === email);

  if (!isExistUser) {
    return res.json({
      message: "Invalid Credientials",
    });
  }

  const comparePassword = await bcrypt.compare(password, isExistUser.password);
  if (!comparePassword) {
    return res.json({
      message: "Invalid Credientials",
    });
  }
  const token = jwt.sign(
    { email: isExistUser.email, role: isExistUser.role },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    },
  );

  res.json({
    message: "You have Login Successfully!",
    data: {
      ...isExistUser,
      token: token,
    },
  });
});

// myProfile

app.get("/me", authMiddleware, (req, res) => {
  res.json({
    message: "Your profile data is Avaliable",
  });
});

app.get("/users", authMiddleware, verifyRole("seller"), (req, res) => {
  res.json({
    message: "All Users",
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
