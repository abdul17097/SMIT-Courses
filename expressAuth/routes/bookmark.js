const express = require("express");
const { toggleBookMark } = require("../controllers/bookmark.js");
const { verifyUser } = require("../middleware/veryUser.js");

const router = express.Router();

router.post("/toggle-bookmark/:postId", verifyUser, toggleBookMark);

module.exports = router;
