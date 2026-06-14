import { Router } from "express";
import {
  createBlog,
  getBlogsByLoginUser,
  deleteBlog,
  updateBlog,
  getBlogDetails,
  getBlogs,
} from "../contollers/blog.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/create", authMiddleware, createBlog);
router.get("/", authMiddleware, getBlogsByLoginUser);
router.delete("/:blogId", authMiddleware, deleteBlog);
router.put("/:blogId", authMiddleware, updateBlog);
router.get("/all", getBlogs);
router.get("/:blogId", getBlogDetails);

export default router;
