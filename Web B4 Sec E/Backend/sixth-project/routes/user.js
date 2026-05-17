import { Router } from "express";
import { allUsers } from "../controllers/user.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const routes = Router();

routes.get("/users", authMiddleware, allUsers);

export default routes;
