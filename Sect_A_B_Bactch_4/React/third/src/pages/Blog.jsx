import React, { useState } from "react";
import { blogs } from "../constants/blogs";
import BlogCard from "../components/BlogCard";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    page: 1,
    category: "",
  });

  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("category"));

  const handlePage = () => {
    setQuery({ ...query, page: query.page + 1 });
    // setSearchParams({page: 2, category})
    setSearchParams(query);
  };

  const handleCategory = (category) => {
    setQuery({ ...query, category: "sports" });
    setSearchParams(query);
  };

  return (
    <div>
      <h1>Blogs</h1>
      <button onClick={handlePage}>Update Page N0.</button>
      <button onClick={handleCategory}>New Category</button>
      <div className="">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
