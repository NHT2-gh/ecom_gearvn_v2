"use client";
import React from "react";
import { Typography } from "@/components/v2/ui/typography";

interface SearchPageViewProps {
  query: string;
}

export default function SearchPageView({ query }: SearchPageViewProps) {
  // const [appliedFilters, setAppliedFilters] = useState<
  //   Record<string, FilterValue> | undefined
  // >();

  // const {
  //   data,
  //   isError,
  //   isSuccess,
  //   fetchNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   isLoading,
  //   error,
  // } = useProductSearch({
  //   query,
  //   filters: appliedFilters,
  //   limit: 60,
  // });

  // const filterConfigs = useMemo(() => {
  //   return data?.pages[0].filterAttributes;
  // }, [data]);

  // const allProducts: ProductCardBase[] = useMemo(() => {
  //   // If we only have initial data and haven't fetched more pages yet
  //   if (!data?.pages || data.pages.length === 0) {
  //     return [];
  //   }
  //   return data.pages.flatMap((page) => page.data);
  // }, [data]);

  // const handleLoadMore = () => {
  //   if (!isFetching) {
  //     fetchNextPage();
  //   }
  // };

  // const handleFilterSubmit = (filters: Record<string, FilterValue>) => {
  //   setAppliedFilters(filters);
  // };

  return (
    <section className="container bg-white rounded-sm py-6">
      <header className="text-center space-y-6">
        <Typography level="h1-36" className="!text-[1.5rem]/[120%] font-bold">
          TÌM KIẾM
        </Typography>

        <Typography className="!text-[0.875rem]/[150%]">
          Tìm kiếm theo từ khóa <strong className="font-bold">{query}</strong>
        </Typography>
      </header>

      {/* <div className="mt-4">
        {isLoading ? (
          <SkeletonFilter />
        ) : (
          filterConfigs && (
            <Filter
              filterConfigs={filterConfigs}
              onFilterSubmit={handleFilterSubmit}
            />
          )
        )}

        <ProductList
          products={allProducts}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
        />
        {isSuccess && (
          <div className="flex justify-center p-4">
            <Button
              onClick={handleLoadMore}
              disabled={isFetchingNextPage}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isFetchingNextPage ? "Đang tải thêm..." : "Xem thêm sản phẩm"}
            </Button>
          </div>
        )}

        {isError && (
          <Typography level="body1" className="italic text-center">
            Lỗi khi tải sản phẩm
            {error.message}
          </Typography>
        )}
      </div> */}
    </section>
  );
}
