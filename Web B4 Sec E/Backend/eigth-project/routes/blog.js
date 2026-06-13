import { Router } from "express";
import {
  createBlog,
  getBlogsByLoginUser,
  deleteBlog,
} from "../contollers/blog.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/create", authMiddleware, createBlog);
router.get("/", authMiddleware, getBlogsByLoginUser);
router.delete("/:blogId", authMiddleware, deleteBlog);

export default router;
