import express from "express";
import { authMiddlware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/me", authMiddlware, (req, res) => {
  res.json({
    message: "Welcome",
  });
});

export default router;

/*
user module:
-> new user
-> delete user
-> all users
-> update user
-> single user



*/
