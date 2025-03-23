const express = require("express");
const { newPost, getPost } = require("../controllers/post");
const { verifyUser } = require("../middleware/veryUser.js");

const router = express.Router();

router.post("/new-post", verifyUser, newPost);
router.get("/get-post", verifyUser, getPost);

module.exports = router;
