import express from "express";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import { config } from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import { cloudinary, cloudinaryConfig } from "./config/cloudinary.js";
import { uploadBlog } from "./config/multer.js";

config();
cloudinaryConfig();
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.USER_EMAIL,
  to: "muhammadnomank12@gmail.com",
  subject: "Test Subject",
  text: "Test Email",
};

app.get("/", (req, res) => {
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({
          message: error.message,
          success: false,
        });
      } else {
        return res.status(200).json({
          message: "Sent Email!",
          success: true,
        });
      }
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage,
});

app.post("/uploadFile", upload.single("coverImage"), (req, res) => {
  const file = req.file;
  const body = req.body;
  console.log(file, body);
});

app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

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

app.post("/uploadBlog", uploadBlog.single("blogImage"), async (req, res) => {
  const file = req.file;
  const body = req.body;
  if (!file) {
    return res.status(400).json({
      message: "No file uploaded",
      success: false,
    });
  }

  const result = await uploadCloudinary(file.buffer);
  res.status(200).json({
    message: "File uploaded successfully",
    success: true,
    data: result.secure_url,
  });
});

// http://localhost:500/api/v1/products

// app.get("/products", (req, res)=>{
//     res.json({
//         message: "all product"
//     })
// })

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
