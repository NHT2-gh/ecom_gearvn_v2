import React from "react";
import { cn } from "@/lib/utils";
import { BasicProduct } from "@/types/v2/product";
import { Card } from "@/components/v2/card";
import { Badge } from "@/components/v2/ui/bagde";
import { Checkbox } from "@/components/v2/ui/input";
import { ProductCardSkeletonGrid } from "../skeleton";

interface ProductListProps {
  products: BasicProduct[];
  isFetchingNextPage: boolean;
  isLoading: boolean;
  className?: string;
}

export default function ProductList({
  products,
  isFetchingNextPage,
  isLoading,
  className,
}: ProductListProps) {
  return (
    <div role="listitem" className="w-full">
      {products.length === 0 && !isLoading && !isFetchingNextPage && (
        <div className="w-full bg-[#fcf8e3] text-sm border border-[#faebcc] rounded-sm p-4">
          Chưa có sản phẩm nào trong danh mục này
        </div>
      )}
      <div
        className={cn(
          "w-full grid grid-cols-2 gap-x-2 md:grid-cols-[repeat(auto-fill,minmax(230px,270px))] lg:grid-cols-[repeat(auto-fill,219px)] justify-between gap-y-6",
          className,
        )}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            custom={{
              hearderTag: {
                tagType: "flashShipping",
              },
            }}
            actionButtons={{
              onAddToCart: () => {},
              onViewDetail: () => {},
            }}
            className="w-full"
          >
            <div className="flex items-center gap-2">
              {["Trả góp %", "Hàng về sớm"].map((tag, index) => (
                <Badge
                  key={index}
                  variant={"flag"}
                  size="lg"
                  color={index === 0 ? "fuchsia" : "violet"}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Checkbox
              className="order-4"
              label="So sánh sản phẩm"
              onChange={(e) => {
                console.log(
                  "selected product for comparison",
                  product.slug,
                  e.target.checked,
                );
              }}
            />
          </Card>
        ))}
      </div>

      {/* Show skeleton while loading more products */}
      {(isFetchingNextPage || isLoading) && <ProductCardSkeletonGrid />}
    </div>
  );
}
