const express = require("express");
const { verifyUser, verifyUserRole } = require("./middleware/veryUser");
const userRoutes = require("./routes/user.js");
const postRoutes = require("./routes/post.js");
const tagRoutes = require("./routes/tag.js");
const bookmarkRoutes = require("./routes/bookmark.js");
const likeRoutes = require("./routes/like.js");
const commentRoutes = require("./routes/comment.js");
const dbconnection = require("./config/connect.js");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const app = express();
require("dotenv").config();
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });
app.use(
  cors({
    origin: "",
  })
);
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
dbconnection();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//     // cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), async (req, res) => {
//   // const result = await cloudinary.uploader.upload(req.file.path, {
//   //   folder: "expressAuth",
//   // });

//   res.json({
//     data: "result.secure_url",
//   });
// });

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
app.use("/tag", tagRoutes);
app.use("/bookmark", bookmarkRoutes);
app.use("/like", likeRoutes);
app.use("/comment", commentRoutes);

app.listen(5000);
