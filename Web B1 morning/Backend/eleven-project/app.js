import { config } from "dotenv";
import express from "express";
import connectDB from "./config/dbConnection.js";
import { User } from "./models/user.js";
import blogRoutes from "./routes/blog.js";

config(); // should be called early

const app = express();
app.use(express.json());
app.use("/api", blogRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const { limit, skip } = req.query;
  try {
    // const users = await User.find().limit(Number(limit)).skip(Number(skip));
    // const users = await User.countDocuments({ age: { $eq: 18 } });
    const users = await User.find().sort({ age: 1 });

    res
      .status(200)
      .json({ message: "Users fetched successfully", users, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // Create User Route
// app.post("/api/users", async (req, res) => {
//   try {
//     const { name, email, password, age } = req.body;

//     if (!name || !email || !password || !age) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const findUser = await User.findOne({ email });
//     if (findUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = await User.create({
//       name,
//       email,
//       password,
//       age,
//     });

//     res.status(201).json({
//       message: "User created successfully",
//       user,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get Users
// app.get("/api/users", async (req, res) => {
//   try {
//     // const users = await User.find({ age: { $gt: 18 } });
//     // const users = await User.find({ age: { $lt: 18 } });
//     // const users = await User.find({ age: { $gte: 18 } });
//     // const users = await User.find({ age: { $lte: 18 } });
//     // const users = await User.find({ age: { $eq: 20 } });
//     // const users = await User.find({ age: { $in: [20, 16, 10] } });
//     // const users = await User.find({ age: { $nin: [20, 16, 10] } });
//     // const users = await User.find({
//     //   $and: [{ age: { $eq: 18 } }, { name: "hello1" }],
//     // });
//     const users = await User.find({
//       $nor: [{ age: { $eq: 18 } }, { name: "hello10" }],
//     });

//     res.status(200).json({
//       message: "Users fetched successfully",
//       users,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: error.message });
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
