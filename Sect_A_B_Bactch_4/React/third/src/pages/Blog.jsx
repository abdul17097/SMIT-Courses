import React from "react";
import { blogs } from "../constants/blogs";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div>
      <h1>Blogs</h1>

      <div className="">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
