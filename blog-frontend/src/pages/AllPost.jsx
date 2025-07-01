import axiosInstance from "@/axios/axiosInstance";
import BlogCard from "@/components/BlogCard";
import { fetchPosts } from "@/redux/slices/postSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AllPost = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState();
  const onBookmarkClick = async (id) => {
    const response = await axiosInstance.post(
      `/bookmark/toggle-bookmark/${id}`
    );
    if (response.data.success) {
      toast.success(response.data.message);
      setUpdate(!update);
    } else {
      toast.success(response.data.message);
    }
    console.log(response);
  };
  useEffect(() => {
    const allPost = async () => {
      const response = await axiosInstance.get(
        "/post/get-post-for-register-user"
      );
      setPosts(response.data.data);
    };

    allPost();
  }, [dispatch, update]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.length > 0 ? (
        posts.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            onBookmarkClick={onBookmarkClick}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No blogs found.
        </p>
      )}
    </div>
  );
};
