import { Blog } from "../modals/blog.js";
import slugify from "slugify";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const findBlog = await Blog.findOne({
      title: title,
    });

    if (findBlog) {
      return res.status(409).json({
        message: "Blog title already Exist",
        success: false,
      });
    }

    const newBlog = await Blog.insertOne({
      title: title,
      slug: slugify(title),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
export const allPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
export const singlePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
export const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
