"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  console.log(params);

  return <div>Product Detailt </div>;
};

export default page;
