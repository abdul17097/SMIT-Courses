import express from "express";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welecome",
  });
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});
