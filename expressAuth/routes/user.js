const express = require("express");
const {
  register,
  login,
  sendEmail,
  allUser,
  deleteUser,
  updateUSer,
  filterUsers,
} = require("../controllers/user.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/send-email", sendEmail);
router.get("/all-user", allUser);
router.delete("/delete-user/:id", deleteUser);
router.put("/update/:userId", updateUSer);
router.get("/filter-user", filterUsers);

module.exports = router;
