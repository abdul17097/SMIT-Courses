import express from "express";
import { authMiddlware } from "../middleware/authMiddleware.js";
import { verfyRoleMiddleware } from "../middleware/verifyRoleMiddleware.js";
const router = express.Router();

router.get("/me", authMiddlware, (req, res) => {
  res.json({
    message: "Welcome",
  });
});

router.get(
  "/all",
  authMiddlware,
  verfyRoleMiddleware("admin", "seller"),
  (req, res) => {
    res.json({
      message: "verfiy role",
    });
  },
);

export default router;

/*
user module:
-> new user
-> delete user
-> all users
-> update user
-> single user



*/
