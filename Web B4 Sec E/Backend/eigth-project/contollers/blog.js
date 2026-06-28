import { cloudinary } from "../config/cloudinary.js";
import { Blog } from "../modals/blog.js";
import { User } from "../modals/user.js";
import { createSlug } from "../utils/createSlug.js";

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

export const createBlog = async (req, res) => {
  try {
    const userId = req.user;
    const { title, content } = req.body;
    const coverImage = req.file;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
        success: false,
      });
    }

    let slug = createSlug(title);
    const findBlog = await Blog.findOne({ slug: slug });

    if (findBlog) {
      return res.status(409).json({
        message: "This Blog already exist!",
        success: false,
      });
    }

    const result = await uploadCloudinary(req.file.buffer);
    const newBlog = await Blog.create({
      title,
      slug,
      content,
      blogImage: result.secure_url,
      user: userId,
    });
    res.status(201).json({
      message: "Blog created successfully",
      success: true,
      blog: newBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const getBlogsByLoginUser = async (req, res) => {
  try {
    const userId = req.user;
    const findUser = await User.findById({ _id: userId });

    if (!findUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    const allBlog = await Blog.find({
      user: userId,
    });

    if (allBlog.length < 1) {
      return res.status(404).json({
        message: "you have'nt create any blog yet!",
        success: false,
      });
    }

    res.status(200).json({
      message: "All Blog",
      success: true,
      data: allBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.user;

    const findBlog = await Blog.findOne({
      user: userId,
      _id: blogId,
    });

    if (!findBlog) {
      return res.status(404).json({
        message: "Blog Not Found!",
        success: false,
      });
    }

    await Blog.deleteOne({
      user: userId,
      _id: blogId,
    });

    res.status(200).json({
      message: "Blog Deleted Successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const userId = req.user;
    const { blogId } = req.params;
    const { title, content, blogImage } = req.body;

    const findBlog = await Blog.find({ _id: blogId, user: userId });

    if (!findBlog) {
      return res.status(404).json({
        message: "Blog not Found!",
        success: false,
      });
    }
    let slug = createSlug(title) || findBlog.slug;

    const updatedBlog = await Blog.findOneAndUpdate(
      {
        _id: blogId,
      },
      {
        $set: {
          title: title || findBlog.title,
          slug,
          content: content || findBlog.content,
          blogImage: blogImage || findBlog.blogImage,
        },
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      message: "Blog Updated Successfully!",
      data: updatedBlog,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const getBlogDetails = async (req, res) => {
  try {
    const { blogId } = req.params;
    const findBlog = await Blog.findById(blogId);

    if (!findBlog) {
      return res.status(404).json({
        message: "Blog Not Found!",
        success: false,
      });
    }

    res.status(200).json({
      message: "Blog Detials",
      success: true,
      data: findBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    if (blogs.length < 1) {
      return res.status(404).json({
        message: "Blogs Not Found!",
        success: false,
      });
    }

    res.status(200).json({
      message: "All Blogs",
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
