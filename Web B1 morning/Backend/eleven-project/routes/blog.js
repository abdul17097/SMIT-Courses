import { Router } from "express";
import { createBlog, getBlogsByUser } from "../controllers/blog.js";

const router = Router();

router.post("/blogs/:userId", createBlog);
router.get("/blogs/:userId", getBlogsByUser);

export default router;
