import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

const arrayOfLogs = [];

// const logMiddleware = (req, res, next) => {
//   const userData = req.body;
//   arrayOfLogs.push({
//     userEmail: req.body.email,
//     date_time: new Date(),
//   });
//   console.log(arrayOfLogs);
//   next();
// };

// router.post("/login", logMiddleware, login);
router.post("/login", login);

export default router;

/*
Auth Modules
-> login
-> signup
-> logout
-> forget password
-> reset password
-> verify code
*/
