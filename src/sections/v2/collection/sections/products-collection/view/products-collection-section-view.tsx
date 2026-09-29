"use client";
import React, { useEffect, useState } from "react";
import { BasicProduct } from "@/types/v2/product";
import { BuyingTrend, Filter, ProductList } from "../components";
import { CollectionInfoResponse } from "@/types/response";
import { useProductsCollection } from "@/hooks/queries/use-products";
import { useProductFilter } from "@/hooks/use-product-filter";
import { FilterItemConfig, FilterValue } from "@/components/v2/filter/type";
import FilterValuesRender from "@/components/v2/filter/filter-values-render";
import { Button } from "@/components/v2/ui/button";
import {
  ArrowTrendingUpIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@/components/v2/ui/typography";
import { ButtonsToggleFilter } from "@/components/v2/filter/filter-items";
import { type } from "os";
import useWindowSize from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";

interface CollectionsViewProps {
  collectionInfo: CollectionInfoResponse;
  initialProducts: BasicProduct[];
  filterConfigs: FilterItemConfig[];
  promotionId?: string;
}

export default function ProductsCollectionView({
  collectionInfo,
  initialProducts,
  filterConfigs,
  promotionId,
}: CollectionsViewProps) {
  const {
    filterValues: filters,
    updateFilter,
    removeFilter,
    clearFilters,
  } = useProductFilter({
    filterConfigs,
  });

  const {
    data,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useProductsCollection({
    slug: collectionInfo.collection.handle,
    limit: 12,
    initialData: initialProducts,
    filters,
    promotionId,
  });

  const windowSize = useWindowSize();

  // Flatten all pages into a single array of products
  const allProducts: BasicProduct[] = React.useMemo(() => {
    // If we only have initial data and haven't fetched more pages yet
    if (!data?.pages || data.pages.length === 0) {
      return initialProducts;
    }
    return data.pages.flatMap((page) => page);
  }, [data, initialProducts]);

  const handleLoadMore = () => {
    if (!isFetching) {
      fetchNextPage();
    }
  };

  const [isOpenFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
  }, [isError, error]);

  return (
    <section className="container w-full flex gap-4 px-3 md:!px-5 xl:!px-0 lg:gap-8 xl:!max-w-[85rem]">
      {(windowSize.width >= 1135 || isOpenFilter) &&
        filterConfigs &&
        filterConfigs.length > 0 && (
          <>
            {windowSize.width < 1135 && (
              <div
                className="fixed inset-0 z-[1001] bg-overlay backdrop-blur-[0.0625rem] w-[100vw] h-[100vh]"
                onClick={() => setOpenFilter(false)}
              />
            )}

            <section
              className={cn(
                {
                  relative: windowSize.width >= 1135,
                },
                {
                  "fixed z-[1002] top-0 right-0 max-h-[100vh]":
                    windowSize.width < 1135,
                },
              )}
            >
              <Filter
                filterConfigs={filterConfigs}
                filterValues={filters}
                handleFilterChange={updateFilter}
                handleClearAllFilters={clearFilters}
              />
            </section>
          </>
        )}

      <section className="w-full space-y-5 !xl:max-w-[85rem]">
        <div className="w-full md:flex md:items-center md:gap-10">
          <Button
            variant={"outline"}
            color={"secondary"}
            size={"xl"}
            className="border-1 h-[3.125rem] flex lg:hidden"
            onClick={() => setOpenFilter(!isOpenFilter)}
          >
            <Bars3BottomLeftIcon className="size-6 " />

            <Typography
              level="h4-24"
              fontWeight="semibold"
              className="text-[1.25rem] hidden md:block"
            >
              Bộ lọc tìm kiếm
            </Typography>
          </Button>

          <BuyingTrend />
        </div>
        {Object.keys(filters).length > 0 && (
          <FilterValuesRender
            filterConfigs={filterConfigs}
            filterValues={filters}
            onDeleteItem={removeFilter}
          />
        )}
        <ProductList
          products={allProducts}
          isFetchingNextPage={isFetching}
          isLoading={isLoading}
        />

        <div className="flex justify-center p-4">
          <Button
            color="secondary"
            onClick={handleLoadMore}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Đang tải thêm..." : "Xem thêm 12 sản phẩm"}
          </Button>
        </div>
      </section>
    </section>
  );
}
