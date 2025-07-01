// components/FeaturedBlog.jsx
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
// data/blogs.js
const blogData = [
  {
    id: 1,
    title: "How to Start a Blog",
    description:
      "Learn the steps to create your own blog from scratch and reach your audience.",
    image: "https://source.unsplash.com/600x400/?writing,workspace",
    tags: ["getting-started", "blogging", "tips"],
    likes: 21,
  },
  {
    id: 2,
    title: "Top 10 Blogging Tools",
    description:
      "Discover the best tools to help you write, publish, and grow your blog.",
    image: "https://source.unsplash.com/600x400/?technology,tools",
    tags: ["tools", "writing", "growth"],
    likes: 34,
  },
  {
    id: 3,
    title: "Blogging for Beginners",
    description:
      "A comprehensive guide for beginners on how to start your own successful blog.",
    image: "https://source.unsplash.com/600x400/?notebook,coffee",
    tags: ["beginner", "guide", "blogging"],
    likes: 45,
  },
];

export const FeaturedBlog = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        className="max-w-screen-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          duration: 0.8,
          stiffness: 80,
          damping: 15,
        }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Featured Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
                delay: index * 0.15,
              }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
