import React from "react";

export const HeroSection = () => {
  return (
    //create hero section with background image and text use tailwind css for styling and add gradient background
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-center p-8">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="text-lg mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
