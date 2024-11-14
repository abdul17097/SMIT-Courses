import express from "express";
import { addUserController } from "../controllers/userControler";
const router = express().Router();

router.post("/addUser", addUserController());

export default router;
