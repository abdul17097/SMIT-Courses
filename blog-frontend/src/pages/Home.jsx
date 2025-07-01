import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Features from "../components/Features";
import { HeroSection } from "../components/HeroSection";
import { FeaturedBlog } from "../components/FeaturedBlog";

export const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Blogs Section */}
      <FeaturedBlog />
      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};
