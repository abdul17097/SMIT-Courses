import express from "express";
import authRouter from "./routes/auth.js";

const app = express();

app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.json({
    message: "Welecome",
  });
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});
