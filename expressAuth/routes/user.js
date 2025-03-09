const express = require("express");
const { register, login, sendEmail } = require("../controllers/user.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/send-email", sendEmail);

module.exports = router;
