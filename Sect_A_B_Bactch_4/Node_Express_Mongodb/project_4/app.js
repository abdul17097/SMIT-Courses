import express from "express";
import { db_connection } from "./config/db_connection.js";
import { Student } from "./models/student.js";
import { config } from "dotenv";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { resolve } from "dns";

config();
const cloudinaryConfig = () => {
  cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME,
  });
};
cloudinaryConfig();
const storage = multer.memoryStorage();
const uploadMulter = multer({ storage }).single("profile");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     const uniqesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.filename + "-" + uniqesuffix + path.extname(file.originalname),
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
// });

const app = express();
app.use(express.json());
db_connection();

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

app.get("/", async (req, res) => {
  // const students = await Student.find({ age: { $nin: [20, 30, 24] } });
  // const students = await Student.find().limit(3).skip(6);
  // const students = await Student.find().sort({ age: -1 });
  // const students = await Student.find({
  //   $and: [{ age: { $eq: 20 } }, { marks: { $gte: 91 } }],
  // });
  // const students = await Student.find({
  //   $or: [{ age: { $eq: 20 } }, { marks: { $gt: 91 } }],
  // });
  // const students = await Student.find({
  //   age: { $not: { $eq: 20 } },
  // });
  const students = await Student.find({
    $nor: [{ age: { $eq: 20 } }, { marks: { $gt: 91 } }],
  });
  const numOfstudents = await Student.find();

  res.json({
    message: "Student register successfully",
    students: [...students, { totalStudent: numOfstudents.length }],
  });
});

// 3/15 =

// app.post("/upload",upload.single("profile"), (req, res) => {
//   console.log(req.body);
// });
app.post("/upload", uploadMulter, async (req, res) => {
  const result = await uploadCloudinary(req.file.buffer);
  res.json({
    data: result,
  });
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
