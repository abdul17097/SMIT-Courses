import React from "react";

export const Skeleton = ({
  variant = "rectangular",
  className = "",
  count = 1,
}) => {
  const baseClasses = "animate-pulse bg-slate-200";

  const variantClasses = {
    text: "h-4 w-full rounded-md",
    circular: "rounded-full shrink-0",
    rectangular: "rounded-xl",
    card: "h-64 w-full rounded-2xl",
  };

  const renderSkeleton = (key) => (
    <div
      key={key}
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.rectangular} ${className}`}
    />
  );

  if (count > 1) {
    return (
      <div className="space-y-3 w-full">
        {Array.from({ length: count }).map((_, index) => renderSkeleton(index))}
      </div>
    );
  }

  return renderSkeleton(0);
};

export default Skeleton;
