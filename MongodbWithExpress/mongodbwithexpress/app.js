import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./schemas/useSchema.js";
import userRoutes from "./routers/userRoute.js";
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
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use(express.json());
app.use("/", userRoutes);

app.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findOne({
      _id: id,
    });

    if (!findUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "user fetched successfully",
      data: findUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to get user",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
