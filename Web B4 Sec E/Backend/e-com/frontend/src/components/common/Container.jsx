import React from "react";

export const Container = ({ children, className = "", clean = false }) => {
  if (clean) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
