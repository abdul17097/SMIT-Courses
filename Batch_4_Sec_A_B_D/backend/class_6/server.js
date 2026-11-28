import "dotenv/config";
import express from "express";
import userRoutes from "./src/routes/user.js";
import authRoutes from "./src/routes/auth.js";
import { mailOptions, transporter } from "./src/config/emailConfig.js";
import { connectDb } from "./src/config/connectDb.js";
import multer from "multer";
import path from "path";
import { uploadProfileImg } from "./src/config/multer.js";
import { cloudinary, cloudinaryConfig } from "./src/config/cloudinary.js";
import { buffer } from "stream/consumers";
import { USER } from "./src/models/user.js";
import { Profile } from "./src/models/profile.js";
import { Blog } from "./src/models/blog.js";
connectDb();
const app = express();

cloudinaryConfig();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "medias");
  },
  filename: (req, file, cb) => {
    let uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

    cb(null, file.fieldname + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

// app.post("/uploadProfileImage", upload.single("proimg"), (req, res) => {
//   console.log(req.body);
//   console.log(req.file);

//   res.json({
//     data: { ...req.body, proimg: req.file },
//   });
// });

app.post("/new-user", async (req, res) => {
  try {
    const { fullname, email, password, bio, phone } = req.body;
    const newUser = await USER.insertOne({
      fullname,
      email,
      password,
    });

    if (!newUser._id) {
      return res.json({
        message: "User Not Created Please try agian!",
      });
    }

    await Profile.create({
      bio,
      phone,
      user: newUser._id,
    });

    res.json({
      message: "User Created Succesfully!",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.get("/me", async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      user: "6b0aa2640e63eafa20cac557",
    }).populate("user");

    res.json({
      data: userProfile,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// create blog
app.post("/create-blog", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newBlog = await Blog.insertOne({
      title,
      description,
      user: "6b0aa2640e63eafa20cac557",
    });

    res.json({
      message: "Created",
      data: newBlog,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// All Blog By User
app.get("/all-blog", async (req, res) => {
  try {
    const blogs = await Blog.find({
      user: "6b0aa2640e63eafa20cac557",
    }).populate("user");
    res.json({
      data: blogs,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

const uploadCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    stream.end(buffer);
  });
};
app.post(
  "/uploadProfileImage",
  uploadProfileImg.single("image"),

  async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadCloudinary(req.file.buffer);

    res.json({
      data: result,
    });
  },
);

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
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// /users/me

// let numbsers = [2,4,6,7];

// let nums_copy = [...numbsers]

// nums_copy.push(9)
