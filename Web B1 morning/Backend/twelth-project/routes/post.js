import { Router } from "express";
import { authMiddleware } from "../middlware/authMiddleware.js";
import { allPost, createPost, getSinglePost } from "../controllers/post.js";
import uploadMulter from "../config/multer.js";

const router = Router();

router.post("/create", uploadMulter, authMiddleware, createPost);
router.get("/all", authMiddleware, allPost);
router.get("/:postId", getSinglePost);

export default router;
