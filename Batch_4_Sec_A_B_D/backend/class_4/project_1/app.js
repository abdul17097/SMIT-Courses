import express from "express";
import bcrypt from "bcryptjs";
import { db } from "./db.js";

const app = express();

app.use(express.json());
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "Please fill all fields",
      });
    }

    const findUser = db.find((user) => user.email === email);

    if (!findUser) {
      return res.json({
        message: "Invalid Credientials",
      });
    }

    const isVerifyPassword = await bcrypt.compare(password, findUser.password);
    if (!isVerifyPassword) {
      return res.json({
        message: "Invalid Credientials",
      });
    }

    res.json({
      message: "Mubarik hu",
    });

    // const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(4000);
