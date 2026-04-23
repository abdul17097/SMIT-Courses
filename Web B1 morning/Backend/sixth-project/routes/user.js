import { Router } from "express";
import { deleteUser, profile } from "../controllers/user.js";
import { allowRoles, auth } from "../middleware/authMiddleware.js";

const routes = Router();

routes.get("/profile", auth, profile);
routes.delete("/deleteUser", auth, allowRoles("admin"), deleteUser);

export default routes;
