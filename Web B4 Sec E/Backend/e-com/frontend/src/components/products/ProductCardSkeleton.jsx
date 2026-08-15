import React from "react";
import Skeleton from "../common/Skeleton";

export const ProductCardSkeleton = ({ count = 1 }) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="rounded-3xl bg-white p-4 shadow-sm border border-slate-100 space-y-4"
        >
          {/* Image skeleton */}
          <Skeleton variant="rectangular" className="h-48 w-full rounded-2xl" />
          {/* Category & Badge */}
          <div className="flex justify-between items-center">
            <Skeleton variant="text" className="h-4 w-20" />
            <Skeleton variant="text" className="h-4 w-12" />
          </div>
          {/* Title */}
          <Skeleton variant="text" className="h-5 w-3/4" />
          {/* Price & CTA */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton variant="text" className="h-6 w-24" />
            <Skeleton variant="rectangular" className="h-9 w-24 rounded-xl" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardSkeleton;
