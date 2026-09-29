import { cn } from "@/lib/utils";
import { ProductCardSkeleton } from "@/components/card/product-card-skeleton";

/**
 * Grid of product card skeletons
 */

interface ProductCardSkeletonGridProps {
  count?: number;
  className?: string;
}
export default function ProductCardSkeletonGrid({
  count = 10,
  className,
}: ProductCardSkeletonGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-2",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
