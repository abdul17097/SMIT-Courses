import mongoose from "mongoose";
import { Post } from "../modals/post.js";

export const createPost = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, content, category } = req.body;
    const isExist = await Post.findOne({ title: title });
    if (isExist) {
      return res.status(409).json({
        message: "Post Exist Already!",
        success: false,
      });
    }

    const newPost = new Post({
      title,
      content,
      category,
      author: userId,
    });

    await newPost.save();

    res.status(201).json({
      message: "Post Created Successfully!",
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const isExistPost = await Post.findById(postId).populate(
      "author",
      "name email",
    );
    if (!isExistPost) {
      return res.status(404).json({
        message: "Post Not Exist",
        success: false,
      });
    }

    res.status(200).json({
      data: isExistPost,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const allPost = async (req, res) => {
  try {
    const userId = req.userId;

    const posts = await Post.find({
      author: new mongoose.Types.ObjectId(userId),
    }).populate("author");

    res.status(200).json({
      message: "All Posts",
      data: posts,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
