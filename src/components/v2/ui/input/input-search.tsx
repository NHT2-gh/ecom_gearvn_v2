"use client";
import React, { useCallback, useMemo, useRef } from "react";

import { Search } from "lucide-react";

import { useRouter } from "next/navigation";
import { Typography } from "../typography";
import { APP_ROUTE } from "@/config/app_route";
import { SVGLoadingState } from "@/assets/svgs";
import { useProductSearch } from "@/hooks/queries/use-products";
import { TextInput } from "./text-input";
import { ProductCardSearch } from "@/components/card";

export default function InputSearch() {
  const [query, setQuery] = React.useState<string>("");
  const { data, isLoading } = useProductSearch({ query });
  const productsSearch = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flatten the infinite query pages data
  const products = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.data);
  }, [data]);

  const handleOnChange = useCallback((value: string) => {
    if (value) {
      setQuery(value);
      if (productsSearch.current) {
        productsSearch.current.style.display = "block";
      }
    }
    if (!value || value === "") {
      if (productsSearch.current) {
        productsSearch.current.style.display = "none";
      }
    }
  }, []);

  const handleOnSubmit = useCallback((value: string) => {
    if (productsSearch.current) {
      productsSearch.current.style.display = "none";
    }
    router.push(APP_ROUTE.search(value));
  }, []);

  return (
    <div className="grow relative">
      <TextInput
        name="search"
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        debounceTime={500}
        placeholder="Bạn cần tìm gì?"
        style={{
          flexGrow: 1,
        }}
        icon={{
          right: <Search className="text-text-primary" width={16} />,
        }}
        className="ring-stroke-primary"
      />

      {query !== "" && (
        <div
          ref={productsSearch}
          className="bg-white mt-4 px-4 text-black rounded-sm h-fit max-h-[500px] scrollbar-hidden overflow-y-scroll w-full absolute top-[calc(var(--header-height)-2.8rem)] left-0 right-0"
        >
          {products.length === 0 && !isLoading && (
            <Typography level="body-14" className="text-center py-4 italic">
              Không tìm thấy sản phẩm
            </Typography>
          )}

          {isLoading && (
            <div className="w-full h-full py-4 flex items-center justify-center gap-6">
              <Typography level="body-14" className="text-center italic">
                Đang tìm kiếm
              </Typography>
              <SVGLoadingState props={{ width: 24, height: 24 }} />
            </div>
          )}

          {products.map((product) => (
            <ProductCardSearch
              key={product.id}
              product={product}
              onClick={() => {
                if (productsSearch.current) {
                  productsSearch.current.style.display = "none";
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
