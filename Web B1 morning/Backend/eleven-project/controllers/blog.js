import { Blog } from "../models/blog.js";

export const createBlog = async (req, res) => {
  const { userId } = req.params;
  try {
    const { title, content } = req.body;

    const existBlog = await Blog.findOne({ title });
    if (existBlog) {
      return res
        .status(400)
        .json({ message: "Blog with this title already exists!" });
    }

    const newBlog = new Blog({
      title,
      content,
      createdBy: userId,
    });

    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog created successfully!", blog: newBlog });
  } catch (error) {
    res.status(400).json({ message: error.message || "Error creating blog!" });
  }
};

export const getBlogsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const blogs = await Blog.find({ createdBy: userId });

    res
      .status(200)
      .json({ message: "Blogs fetched successfully!", blogs, success: true });
  } catch (error) {
    res.status(400).json({ message: error.message || "Error fetching blogs!" });
  }
};
