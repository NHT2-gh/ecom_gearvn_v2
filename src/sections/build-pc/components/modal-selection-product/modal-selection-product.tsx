"use client";
import React, { useMemo, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { Button } from "@/components/v2/ui/button";

import { Input } from "@/components/v2/ui/input";
import type { BuildPCCategory } from "@/types/build-pc";
import { Typography } from "@/components/v2/ui/typography";
import useProductsBuildPC from "@/hooks/queries/use-buildpc";
import { useComponentSelection } from "@/hooks/use-pc-builder";
import { getCategoryLabel } from "@/config/pc-builder-categories";
import { FilterItemConfig, FilterValue } from "@/components/v2/filter/type";

interface ModalSelectionProductProps {
  category: BuildPCCategory;
  onClose: () => void;
}

export default function ModalSelectionProduct({
  category,
  onClose,
}: ModalSelectionProductProps) {
  const { selectComponent, currentComponent } = useComponentSelection(category);
  const title = getCategoryLabel(category);

  const [filters, setFilters] = useState<FilterItemConfig[]>([]);
  const [appliedFilters, setAppliedFilters] =
    useState<Record<string, FilterValue>>();

  const {
    data,
    fetchNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useProductsBuildPC(category, appliedFilters);

  const allProducts = useMemo(() => {
    if (!data?.pages) return [];

    setFilters(data.pages.flatMap((page) => page.filters));

    return data.pages.flatMap((page) => page.products || []);
  }, [data?.pages]);

  const handleFilterSubmit = (filters: Record<string, FilterValue>) => {
    setAppliedFilters(filters);
  };

  const handleLoadMore = () => {
    if (!data?.pages) return;
    fetchNextPage();
  };

  return (
    <div aria-modal="true" className="overlay">
      <div className="container absolute top-[15vh] overflow-hidden p-0 bg-primary rounded-sm flex flex-col max-h-[70vh]">
        <header className="flex justify-between items-center px-4 py-6 bg-[rgb(242,244,247)]">
          <Typography level="h4-24">{title}</Typography>
          <button onClick={onClose}>
            <X />
          </button>
        </header>
        <div className="mt-4">
          <div className="flex gap-3 px-3 items-center h-[35px] w-[60%] border border-stroke rounded-lg mx-auto">
            <SearchIcon />
            <Input
              handleOnChange={() => {}}
              handleOnSubmit={() => {}}
              placeholder="Bạn cần tìm sản phẩm gì ?"
            />
          </div>
          {/* <Filter
            filterConfigs={filters}
            onFilterSubmit={(filters) => {
              handleFilterSubmit(filters);
            }}
          /> */}
        </div>

        {hasNextPage && (
          <div className="flex justify-center p-2">
            <Button
              variant="outline"
              onClick={handleLoadMore}
              disabled={isFetchingNextPage || !data?.pages}
              className="border-accent-primary text-accent-primary w-[20rem] text-base hover:bg-neutral-200"
            >
              Hiển thị thêm sản phẩm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
