import React from "react";

export const Spinner = ({ size = "md", color = "primary", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-3",
  };

  const colorClasses = {
    primary: "border-indigo-600 border-t-transparent",
    white: "border-white border-t-transparent",
    slate: "border-slate-600 border-t-transparent",
  };

  return (
    <div
      className={`inline-block rounded-full animate-spin ${sizeClasses[size] || sizeClasses.md} ${
        colorClasses[color] || colorClasses.primary
      } ${className}`}
      role="status"
      aria-label="loading"
    />
  );
};

export default Spinner;
