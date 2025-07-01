import React from "react";
import { FaBookmark, FaSpinner, FaHeart, FaRegHeart } from "react-icons/fa"; // Importing the icons
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const BlogCard = ({ blog, onBookmarkClick, onFavoriteClick }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/blog-details/${blog.slug}`}
            className="text-blue-500 hover:text-blue-400 font-semibold"
          >
            Read More
          </Link>
          <div className="flex items-center gap-4">
            {/* Favorite Button */}
            <button
              onClick={() => onFavoriteClick(blog._id)}
              className="text-red-500 hover:text-red-400"
            >
              {blog.isFavorite ? (
                <FaHeart className="text-xl" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
            </button>
            {isAuthenticated && (
              <button
                onClick={() => navigate("/edit-post")}
                className="text-red-500 hover:text-red-400 hover:cursor-pointer"
              >
                <CiEdit />
              </button>
            )}

            {/* Bookmark Button */}
            <button
              onClick={() => onBookmarkClick(blog._id)}
              className="text-blue-500 hover:text-blue-400"
              // Disable button while loading
            >
              {blog.isBookMark ? (
                <FaBookmark className="text-xl" />
              ) : (
                <CiBookmark className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
