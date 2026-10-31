import express from "express";
import userRoutes from "./src/routes/user.js";
import { config } from "dotenv";
config();
import { mailOptions, transporter } from "./src/config/emailConfig.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    await transporter.sendMail(mailOptions);
    return res.json({
      message: "Email sent!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// /users/me
