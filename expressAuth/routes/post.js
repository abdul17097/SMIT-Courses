const express = require("express");
const {
  newPost,
  getPost,
  allPostForGuest,
  allPostForRegisterUser,
  getPostBySlug,
  getSinglePost,
  deletePost,
  updatePost,
} = require("../controllers/post");
const { verifyUser } = require("../middleware/veryUser.js");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "dusob1oit",
//   api_key: "117563274639469",
//   api_secret: "RfiQvZ283gFvZcYidJzVonsqEE8",
// });
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
router.put(
  "/update-post/:postId",
  verifyUser,
  upload.single("file"),
  updatePost
);
router.get("/get-post", verifyUser, getPost);
router.get("/get-post-for-guest", allPostForGuest);
router.get("/get-post-for-register-user", verifyUser, allPostForRegisterUser);
router.get("/get-post-by-slug/:slug", verifyUser, getPostBySlug);
router.get("/get-single-post-by-slug/:slug", getSinglePost);
router.delete("/delete-post/:postId", verifyUser, deletePost);

module.exports = router;
