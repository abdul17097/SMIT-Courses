import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBookmark,
  FaHeart,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👉 Replace this with your actual auth logic
  const isLoggedIn = false; // false if not logged in

  const navItems = [
    { title: "Blogs", to: "/blogs" },
    { title: "Create Post", to: "/create-post" },
    { icon: <FaBookmark />, to: "/bookmarks" },
    { icon: <FaHeart />, to: "/favorites" },
  ];

  if (isLoggedIn) {
    navItems.push({ icon: <FaSignOutAlt />, to: "/logout" });
  } else {
    navItems.push(
      { icon: <FaSignInAlt />, to: "/login" },
      { icon: <MdOutlineDashboard className="text-xl" />, to: "/dashboard" }
    );
  }

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-yellow-400"
        >
          BLOGIFY
        </Link>

        {/* Search bar (desktop) */}
        <div className="hidden lg:flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg border border-gray-600">
          <input
            type="text"
            placeholder="Search blogs..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <FaSearch className="text-yellow-400" />
        </div>

        {/* Desktop nav items */}
        <div className="hidden lg:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 pb-4 lg:hidden bg-gray-800 space-y-2"
          >
            {/* Mobile Search */}
            <div className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-lg border border-gray-600">
              <input
                type="text"
                placeholder="Search blogs..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
              />
              <FaSearch className="text-yellow-400" />
            </div>

            {navItems.map((item, index) => (
              <Link
                title={item.title || ""}
                key={index}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
