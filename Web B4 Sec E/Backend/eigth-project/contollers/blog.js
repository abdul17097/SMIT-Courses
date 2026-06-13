import { Blog } from "../modals/blog.js";
import { User } from "../modals/user.js";

export const createBlog = async (req, res) => {
  try {
    const userId = req.user;
    const { title, content, blogImage } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
        success: false,
      });
    }

    let slug = title.toLowerCase().replace(/ /g, "-");
    const findBlog = await Blog.findOne({ slug: slug });

    if (findBlog) {
      return res.status(409).json({
        message: "This Blog already exist!",
        success: false,
      });
    }

    const newBlog = await Blog.create({
      title,
      slug,
      content,
      blogImage,
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
    es.status(500).json({ message: error.message, success: false });
  }
};
