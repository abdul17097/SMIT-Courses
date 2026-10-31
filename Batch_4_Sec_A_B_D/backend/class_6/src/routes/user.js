import { Router } from "express";
import { userprofile } from "../controllers/user.js";

const routes = Router();

routes.get("/me", userprofile);

export default routes;
