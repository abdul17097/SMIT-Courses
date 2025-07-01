import axiosInstance from "@/axios/axiosInstance";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const PostDetails = () => {
  const [postData, setPostData] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/post/get-single-post-by-slug/${params.slug}`
        );
        setPostData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch post:", error.message);
      }
    };
    fetchPostDetails();
  }, [params.slug]);
  console.log(params);
  console.log(postData);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg shadow-md bg-white">
      <img
        src={postData && postData[0].image}
        className="w-full md:w-1/2 h-64 object-cover rounded"
      />
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">
          {postData && postData[0].title}
        </h1>
        <p className="text-gray-700 mb-4">
          {postData && postData[0].description}
        </p>
        <div className="flex flex-wrap gap-2">
          {postData &&
            postData[0].tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
        </div>
        <div className="">
          <h2 className="">User</h2>
          <span className="">{postData && postData[0].user.userName}</span>
        </div>
      </div>
    </div>
  );
};
