import React, { useEffect, useState } from "react";
import { toast } from "react-toast";

const MyPost = () => {
  // Dummy data for posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/post/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { data } = await response.json();
        console.log(data);

        setPosts(data);
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, []);

  console.log(posts, "asdfasf");

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
        toast.success("Post deleted successfully");
      } else {
        toast.error("Failed to delete post");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error deleting post");
    }
  };

  const handleDetail = (id) => {
    // For now, just alert the post details
    const post = posts.find((p) => p.id === id);
    alert(
      `Title: ${post.title}\nContent: ${post.content}\nAuthor: ${post.author}`,
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500 mb-4">
              Author: {post.author.name}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDetail(post.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Detail
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
