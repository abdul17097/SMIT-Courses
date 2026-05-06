import mongoose from "mongoose";
import { Post } from "../modals/post.js";
import { cloudinary } from "../config/cloudinary.js";

const uploadCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    stream.end(buffer);
  });
};

export const createPost = async (req, res) => {
  try {
    const coverImage = req.file;

    const userId = req.userId;
    const { title, content, category } = req.body;
    const isExist = await Post.findOne({ title: title });
    if (isExist) {
      return res.status(409).json({
        message: "Post Exist Already!",
        success: false,
      });
    }

    const result = await uploadCloudinary(req.file.buffer);
    const categoryValues = Array.isArray(category)
      ? category
      : String(category)
          .split(",")
          .map((cat) => cat.trim())
          .filter(Boolean);

    const newPost = await Post.create({
      title,
      content,
      author: userId,
      coverImage: result.secure_url,
    });

    res.status(201).json({
      message: "Post Created Successfully!",
      success: true,
      data: newPost,
    });
  } catch (error) {
    console.error("createPost error:", error);

    res.status(500).json({
      message: error.message || "Unable to create post.",
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

// like post
export const likePost = async (req, res) => {
  try {
    const userId = req.userId;
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }

    if (post.likes.includes(userId)) {
      return res.status(400).json({
        message: "You have already liked this post",
        success: false,
      });
    }

    post.likes.push(userId);
    await post.save();

    res.status(200).json({
      message: "Post liked successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// comment post
export const commentPost = async (req, res) => {
  try {
    const userId = req.userId;
    const { postId } = req.params;
    const { content } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }

    const comment = await Comment.create({
      content,
      author: userId,
      post: postId,
    });

    res.status(201).json({
      message: "Comment added successfully",
      success: true,
      data: comment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const allPost = async (req, res) => {
//   try {
//     const userId = req.userId;

//     const posts = await Post.aggregate([
//       {
//         $match: {
//           author: new mongoose.Types.ObjectId(userId),
//         },
//       },
//       {
//         $lookup: {
//           from: "users",
//           localField: "author",
//           foreignField: "_id",
//           as: "authorDetails",
//         },
//       },
//       {
//         $unwind: "$authorDetails",
//       },
//       {
//         $project: {
//           title: 1,
//           content: 1,
//           category: 1,
//           coverImage: 1,
//           author: "$authorDetails.name",
//         },
//       },
//     ]);

//     res.status(200).json({
//       message: "All Posts",
//       data: posts,
//       success: true,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
