import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";
import axiosInstance from "@/axios/axiosInstance";

export const BookMarks = () => {
  // Example of bookmark data
  const bookmarkedBlogs = [
    {
      id: 1,
      title: "How to Start a Blog",
      description:
        "Learn the steps to create your own blog from scratch and reach your audience.",
      image: "https://source.unsplash.com/600x400/?blog",
      isFavorite: false, // Initial favorite state
    },
    {
      id: 2,
      title: "Top 10 Blogging Tools",
      description:
        "Discover the best tools to help you write, publish, and grow your blog.",
      image: "https://source.unsplash.com/600x400/?tools",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Blogging for Beginners",
      description:
        "A comprehensive guide for beginners on how to start your own successful blog.",
      image: "https://source.unsplash.com/600x400/?beginner",
      isFavorite: false,
    },
  ];

  // State to handle loading state for bookmarking action
  const [loadingId, setLoadingId] = useState(null);
  const [favorites, setFavorites] = useState(bookmarkedBlogs);

  // Function to handle bookmarking action
  const handleBookmarkClick = (id) => {
    setLoadingId(id);

    setTimeout(() => {
      setLoadingId(null);
      console.log(`Bookmark toggled for blog id: ${id}`);
    }, 1500); // Simulating 1.5 second delay for loading state
  };

  // Function to toggle favorite state
  const handleFavoriteClick = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((blog) =>
        blog.id === id ? { ...blog, isFavorite: !blog.isFavorite } : blog
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Your Bookmarks
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmarkedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              loadingId={loadingId}
              onBookmarkClick={handleBookmarkClick}
              onFavoriteClick={handleFavoriteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
