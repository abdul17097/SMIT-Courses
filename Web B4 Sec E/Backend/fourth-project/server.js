import express from "express";
import { userData } from "./constants/user.js";

const app = express();

// builtin middleware
app.use(express.json());

// custom middleware | application middleware
// app.use((req, res, next) => {
//   console.log("hello world!");
//   next();
// });

const decodetoken = {
  id: 123,
};

// authMiddleware
const authMiddleware = (req, res, next) => {
  const user = userData;
  if (user.id !== decodetoken.id) {
    return res.status(404).json({
      message: "User Not Found!",
    });
  }
  next();
};

app.post("/create-post", authMiddleware, (req, res) => {
  res.status(201).json({
    message: "Post Created Successfullly!",
    success: true,
  });
});

app.get("/", (req, res, next) => {
  throw new Error("Something went wrong!");
  // res.send("Welcome to Home!");
  next();
});

// Error handling Middleware
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    success: false,
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
