import React from "react";
import { Blog, blogs } from "../../constants/blogs";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <p>Welcome to our blogs!</p>

      <div className="">
        {blogs.map((blog: Blog) => (
          <Link
            href={`/blogDetails/${blog.id}`}
            key={blog.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              {blog.title}
            </h2>

            <p className="mb-4 leading-7 text-gray-600">{blog.excerpt}</p>

            <div className="space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
              <p>
                <span className="font-medium text-gray-700">Author:</span>{" "}
                {blog.author.name}
              </p>

              <p>
                <span className="font-medium text-gray-700">Published on:</span>{" "}
                {blog.publishedAt}
              </p>

              <p>
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {blog.category}
              </p>

              <p>
                <span className="font-medium text-gray-700">Read Time:</span>{" "}
                {blog.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
