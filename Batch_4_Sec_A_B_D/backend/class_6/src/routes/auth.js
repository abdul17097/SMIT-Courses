import { Router } from "express";
import { login, signup } from "../controllers/auth.js";

const routes = Router();

routes.post("/signup", signup);
routes.post("/login", login);

export default routes;
