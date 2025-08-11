import express from "express";
import { login, profile, registerUser } from "../controllers/user.js";
import { authorize, verifyUser } from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/", registerUser);
routes.post("/login", login);
routes.get("/profile", verifyUser, authorize(["customer", "admin"]), profile);

export default routes;
