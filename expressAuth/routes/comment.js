const express = require("express");
const { verifyUser } = require("../middleware/veryUser.js");
const { createComment } = require("../controllers/comment.js");
const router = express.Router();

router.post("/create-comment/:postId", verifyUser, createComment);

module.exports = router;
