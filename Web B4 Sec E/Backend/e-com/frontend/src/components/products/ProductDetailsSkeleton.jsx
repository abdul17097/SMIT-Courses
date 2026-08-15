import React from "react";
import Skeleton from "../common/Skeleton";
import Container from "../common/Container";

export const ProductDetailsSkeleton = () => {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery skeleton */}
        <Skeleton variant="rectangular" className="h-[450px] w-full rounded-3xl" />

        {/* Info skeleton */}
        <div className="space-y-6">
          <div className="flex gap-2">
            <Skeleton variant="text" className="h-6 w-24" />
            <Skeleton variant="text" className="h-6 w-20" />
          </div>
          <Skeleton variant="text" className="h-10 w-3/4" />
          <Skeleton variant="text" className="h-8 w-32" />
          <Skeleton variant="text" className="h-20 w-full" />
          <Skeleton variant="rectangular" className="h-12 w-48 rounded-2xl" />
          <div className="flex gap-4 pt-4">
            <Skeleton variant="rectangular" className="h-14 flex-1 rounded-2xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsSkeleton;
