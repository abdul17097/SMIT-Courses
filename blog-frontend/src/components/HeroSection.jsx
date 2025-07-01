import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPenFancy } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Icon and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-6"
      >
        <FaPenFancy className="text-4xl text-yellow-400" />
        <span className="text-lg font-medium text-yellow-300 tracking-wider">
          Express Yourself Through Words
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
      >
        Welcome to <span className="text-yellow-400">Blogify</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-gray-200 max-w-xl mb-10"
      >
        Your go-to platform for discovering, writing, and sharing stories that
        inspire and connect.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/signup"
          className="bg-yellow-500 cursor-pointer text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
};
