import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

export const Favorites = () => {
  // Example of blog data
  const allBlogs = [
    {
      id: 1,
      title: "How to Start a Blog",
      description:
        "Learn the steps to create your own blog from scratch and reach your audience.",
      image: "https://source.unsplash.com/600x400/?blog",
      isFavorite: true, // Marked as favorite
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
      isFavorite: true, // Marked as favorite
    },
  ];

  // State to handle loading state for bookmarking action
  const [loadingId, setLoadingId] = useState(null);
  const [favorites, setFavorites] = useState(allBlogs);

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

  // Filter blogs that are marked as favorites
  const favoriteBlogs = favorites.filter((blog) => blog.isFavorite);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Your Favorite Blogs
        </h1>
        {favoriteBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                loadingId={loadingId}
                onBookmarkClick={handleBookmarkClick}
                onFavoriteClick={handleFavoriteClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600">No favorite blogs yet!</p>
        )}
      </div>
    </div>
  );
};
