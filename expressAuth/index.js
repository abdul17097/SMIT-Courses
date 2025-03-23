const express = require("express");
const { verifyUser, verifyUserRole } = require("./middleware/veryUser");
const userRoutes = require("./routes/user.js");
const postRoutes = require("./routes/post.js");
const dotenv = require("dotenv");
const dbconnection = require("./config/connect.js");
const app = express();

// mongodb connection
// const dbConfig = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost:27017/ecommerce");
//     console.log(`Monogodb connection ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["user", "admin"], default: "user" },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
app.use(express.json());
dotenv.config();
dbconnection();

app.get("/", async (req, res) => {
  try {
    // const newUser = new User({
    //   name: "hello",
    //   email: "hello@gmail.com",
    //   password: "hashedPassword",
    //   role: "admin",
    // });
    // await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: "newUser" });
  } catch (error) {}
});

app.get("/add-to-cart", verifyUser, verifyUserRole, (req, res) => {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);
});

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(5000);
