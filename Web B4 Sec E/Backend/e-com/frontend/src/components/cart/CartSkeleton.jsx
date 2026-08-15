import React from "react";
import Skeleton from "../common/Skeleton";
import Container from "../common/Container";

export const CartSkeleton = () => {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          <Skeleton variant="rectangular" className="h-32 w-full rounded-3xl" />
          <Skeleton variant="rectangular" className="h-32 w-full rounded-3xl" />
          <Skeleton variant="rectangular" className="h-32 w-full rounded-3xl" />
        </div>

        {/* Summary Skeleton */}
        <div className="lg:col-span-1">
          <Skeleton variant="rectangular" className="h-80 w-full rounded-3xl" />
        </div>
      </div>
    </Container>
  );
};

export default CartSkeleton;
