import React from "react";

const Hero = ({ search }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold">Welcome to the {search} Section</h1>
    </div>
  );
};

export default Hero;
