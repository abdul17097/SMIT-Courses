import { Router } from "express";
import { authMiddleware } from "../middlware/authMiddleware.js";
import { allPost, createPost, getSinglePost } from "../controllers/post.js";

const router = Router();

router.post("/create", authMiddleware, createPost);
router.get("/all", authMiddleware, allPost);
router.get("/:postId", getSinglePost);

export default router;
