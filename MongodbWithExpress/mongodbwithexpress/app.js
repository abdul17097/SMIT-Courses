import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./useSchema.js";
const app = express();
dotenv.config();
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.NODE_MONGO_URL);
    console.log(`Monogodb connection ${conn.connection.host}`);
  } catch (error) {
    throw error;
  }
};

dbConnect();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
const logMiddleware = (req, res, next) => {
  console.log(req.method, req.url, new Date().toISOString());
  next();
};

app.use(logMiddleware);
app.get("/:id", function (req, res) {
  console.log(req.query, req.params, req.body);

  // res.send("Hello World!");
  throw new Error("somthing went wrong!");
  res.status(200).json({ message: "Hello World!" });
});

app.post("/adduser", async (req, res, next) => {
  try {
    const userId = req.params;
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const { name, email, password } = req.body;

    res.json(user);
  } catch (error) {
    next(error); // Pass errors to the error handler
  }
});
app.use((err, req, res, next) => {
  res.json({
    status: 500,
    message: err.message,
  });
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
