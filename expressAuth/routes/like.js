const express = require("express");
const { verifyUser } = require("../middleware/veryUser.js");
const { toggleLike } = require("../controllers/like.js");

const router = express.Router();

router.post("/toggle-like/:postId", verifyUser, toggleLike);

module.exports = router;
