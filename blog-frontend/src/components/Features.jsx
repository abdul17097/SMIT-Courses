import React from "react";
import { FaBookmark, FaHeart, FaPen } from "react-icons/fa";

const features = [
  {
    icon: <FaBookmark />,
    title: "Save Your Favorite Blogs",
    description: "Easily bookmark and save your favorite articles for later.",
  },
  {
    icon: <FaHeart />,
    title: "Engage with Your Community",
    description:
      "Share your thoughts, comments, and connect with fellow bloggers.",
  },
  {
    icon: <FaPen />,
    title: "Start Writing Today",
    description:
      "Write, publish, and share your stories easily with our intuitive editor.",
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-yellow-400">
          Why Choose BLOGIFY?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 p-5 rounded-lg shadow-md hover:shadow-yellow-400/30 transition-shadow duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl text-yellow-400 mb-3 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
