"use client";
import React from "react";
import { useProductRecommendation } from "@/hooks/queries/use-products";
import GroupLayout from "@/components/v2/common/layout/group-layout";
import CarouselProducts from "../../../../home/sections/group-products/components/carousel-products";

interface ProductRecommendationProps {
  sku: string;
}

export default function ProductRecommendation({
  sku,
}: ProductRecommendationProps) {
  const { data, isLoading, error } = useProductRecommendation({ sku });

  if (error) {
    console.log(error);
    return <div className="col-span-2 p-3">Error loading recommendations</div>;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="[&_.group-title]:text-[1.125rem] [&_.group-title]:text-left">
      <GroupLayout groupTitle={"Sản phẩm tương tự"}>
        <CarouselProducts products={data || []} />
      </GroupLayout>
    </div>
  );
}
