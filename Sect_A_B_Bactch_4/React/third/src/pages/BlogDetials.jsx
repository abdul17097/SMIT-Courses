import React from "react";
import { useParams } from "react-router-dom";

const BlogDetials = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Blog Details</div>;
};

export default BlogDetials;
