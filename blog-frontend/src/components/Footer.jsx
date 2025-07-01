import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white py-8  shadow-inner">
      <div className="max-w-screen-xl mx-auto px-4 text-center space-y-4">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
          BLOGIFY
        </h2>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link
            to="/about"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About Us
          </Link>
          <span>|</span>
          <Link
            to="/contact"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-yellow-400">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BLOGIFY. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
