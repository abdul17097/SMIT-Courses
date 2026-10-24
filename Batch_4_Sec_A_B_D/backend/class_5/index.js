import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "./db.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

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
  const SECRET_KEY = "klal;sdkfoiad798asdfjq4rj9as8ufoiasjdf;asdjf89u34ioh;adj";
  const token = jwt.sign({ email: isExistUser.email }, SECRET_KEY, {
    expiresIn: "1d",
  });

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
    message: "You profile data",
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
