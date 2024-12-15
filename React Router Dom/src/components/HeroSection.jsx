import React from "react";

export const HeroSection = ({ user }) => {
  return (
    <div>
      <h1>User ID:</h1>
      <span>{user?.id}</span>
    </div>
  );
};
