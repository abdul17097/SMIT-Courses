"use client";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Details</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
};

export default page;
