import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./schemas/useSchema.js";
import userRoutes from "./routers/userRoute.js";
import productRoutes from "./routers/productRoute.js";
import cartRoutes from "./routers/cartRoutes.js";
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
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use(express.json());
app.use("/", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:8000`);
});
