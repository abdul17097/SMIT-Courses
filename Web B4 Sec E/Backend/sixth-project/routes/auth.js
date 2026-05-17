import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { login, signup } from "../controllers/auth.js";

const routes = Router();

routes.post("/login", login);
routes.post("/signup", signup);

export default routes;
