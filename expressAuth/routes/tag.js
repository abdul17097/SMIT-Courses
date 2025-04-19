const express = require("express");
const { createTag } = require("../controllers/tag.js");
const { verifyUser } = require("../middleware/veryUser.js");
const router = express.Router();

router.post("/create", verifyUser, createTag);

module.exports = router;
