import React, { useEffect, useState } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
};

const Posts = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button className="border" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1>All Post</h1>
    </div>
  );
};

export default Posts;
