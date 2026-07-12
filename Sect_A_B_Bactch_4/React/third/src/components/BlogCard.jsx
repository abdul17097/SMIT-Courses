import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handlgeBlogDetail = (id) => {
    navigate(`/blogDetails/${id}`);
  };
  return (
    <div
      onClick={() => handlgeBlogDetail(blog.id)}
      className="bg-white rounded-xl cursor-pointer shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {blog.category}
          </span>

          <span className="text-gray-500 text-sm">{blog.readTime} read</span>
        </div>

        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>

        <p className="text-gray-600 mb-4">{blog.summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog &&
            blog.tags &&
            blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700"
              >
                #{tag}
              </span>
            ))}
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>By {blog.author}</span>
          <span>{blog.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
