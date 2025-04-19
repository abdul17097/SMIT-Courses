const express = require("express");
const { newPost, getPost } = require("../controllers/post");
const { verifyUser } = require("../middleware/veryUser.js");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const router = express.Router();

const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, path.join(__dirname, "uploads"));
  //   },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    // cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/new-post", verifyUser, upload.single("file"), newPost);
router.get("/get-post", verifyUser, getPost);

module.exports = router;
