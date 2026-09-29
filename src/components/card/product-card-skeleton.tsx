import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../v2/skeleton";

interface ProductCardSkeletonProps {
  className?: string;
  opts?: {
    showSpecs?: boolean;
    showRating?: boolean;
  };
}

/**
 * Skeleton loading state for ProductCard component
 * Matches the structure and dimensions of the actual ProductCard
 */
export function ProductCardSkeleton({
  className,
  opts = { showRating: true, showSpecs: true },
}: ProductCardSkeletonProps) {
  return (
    <article
      className={cn(
        "w-[14.375rem] flex flex-col h-full rounded-sm relative overflow-hidden bg-white shadow-collection-product-card",
        className,
      )}
    >
      {/* Image skeleton */}
      <div className="w-full h-auto aspect-square relative flex items-center justify-center p-2">
        <Skeleton width="10.375rem" height="10.375rem" className="rounded-sm" />
      </div>

      {/* Content skeleton */}
      <div className="p-4 grow flex flex-col gap-1">
        {/* Product name - 2 lines */}
        <Skeleton count={2} height="1rem" className="mb-1" />

        {/* specs specs */}
        {opts?.showSpecs && (
          <div className="bg-input-bg-active px-2 py-1 rounded-sm w-full h-fit my-3">
            <div className="flex flex-wrap gap-3">
              <Skeleton width="4rem" height="0.875rem" />
              <Skeleton width="3.5rem" height="0.875rem" />
              <Skeleton width="4.5rem" height="0.875rem" />
            </div>
          </div>
        )}

        {/* Original price (line-through) */}
        <Skeleton width="5rem" height="0.875rem" className="mb-1" />

        {/* Discount price and badge */}
        <div className="flex items-center gap-2 mb-1">
          <Skeleton width="6rem" height="1.125rem" />
          <Skeleton width="2.5rem" height="1.5rem" borderRadius="0.25rem" />
        </div>

        {/* Rating */}
        {opts?.showRating && (
          <div className="flex items-center gap-2">
            <Skeleton width="5rem" height="1rem" />
            <Skeleton width="3rem" height="0.875rem" />
          </div>
        )}
      </div>
    </article>
  );
}
