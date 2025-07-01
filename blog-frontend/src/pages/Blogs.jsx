import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { FaBookmark, FaHeart, FaPen, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchPosts } from "@/redux/slices/postSlice";
import { useDispatch } from "react-redux";
import { fetchTags } from "@/redux/slices/tagSlice";
import { useNavigate, useLocation } from "react-router-dom";

export const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { posts, loading: postLoading } = useSelector((state) => state.posts);
  const {
    tags,
    loading: tagLoading,
    error: tagError,
  } = useSelector((state) => state.tags);
  console.log(posts);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    setSelectedCategory(slug || "All");
  }, [location.search]);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  useEffect(() => {
    dispatch(
      fetchPosts({
        search: searchTerm?.trim() || null,
        tag: selectedCategory !== "All" ? selectedCategory : null,
      })
    );
  }, [dispatch, selectedCategory, searchTerm]);

  const handleTagClick = (slug) => {
    console.log(slug);

    if (slug == "All") {
      navigate("/blogs");
    } else {
      navigate(`/blogs?slug=${slug}`);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <FaSearch className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search blog title..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={() => handleTagClick("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 capitalize ${
                selectedCategory === "All"
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
            >
              All
            </button>
            {tags?.map((tag) => (
              <button
                key={tag._id}
                onClick={() => handleTagClick(tag.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 capitalize ${
                  selectedCategory === tag
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length > 0 ? (
            posts.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blogs found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
