import React, { useEffect, useState } from "react";
import { fetchPost } from "../services/post";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("Test");
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchPost();
  }, [count]);

  return (
    <div>
      <h1 className="border">{count}</h1>
      <p className="border">Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setName("Test 123")}>Change Name</button>
    </div>
  );
};

export default Post;
