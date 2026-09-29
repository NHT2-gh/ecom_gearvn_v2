"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/format";

import { Button } from "@/components/v2/ui/button";
import type { BuildPCCategory } from "@/types/build-pc";
import { Typography } from "@/components/v2/ui/typography";
import { usePCBuilderComponent } from "@/hooks/use-pc-builder";
import { Badge } from "@/components/v2/ui/bagde";

interface BuildItemProps {
  category: BuildPCCategory;
  label: string;
  required?: boolean;
  onSelect: () => void;
}

export default function BuildItem({
  category,
  label,
  required,
  onSelect,
}: BuildItemProps) {
  const selectedComponent = usePCBuilderComponent(category);

  return (
    <div
      role="listitem"
      className="bg-[rgb(242,244,247)] px-2 py-4 rounded-sm flex items-center justify-between"
    >
      <div className="flex items-center gap-4 flex-1">
        {selectedComponent ? (
          <>
            <Image
              className="aspect-square size-[3.5rem] object-contain bg-white rounded"
              width={56}
              height={56}
              src={selectedComponent.image || "/placeholder.png"}
              alt={selectedComponent.name}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  {label}
                </span>
                {required && <span className="text-xs text-red-500">*</span>}
              </div>
              <p className="text-base font-semibold text-gray-900">
                {selectedComponent.name}
              </p>

              <Typography
                color="secondary"
                aria-description="Original price"
                className={cn("line-through leading-[123%] opacity-0 ", {
                  "opacity-100": selectedComponent.price.discount,
                })}
              >
                {formatPrice(selectedComponent.price.original)}
              </Typography>

              <Typography
                color="primary"
                aria-description="Discount price"
                className="font-semibold text-base/[112.5%] !inline"
              >
                {formatPrice(
                  selectedComponent.price.discount
                    ? selectedComponent.price.discount
                    : selectedComponent.price.original,
                )}

                {selectedComponent.price.discount &&
                  Math.max(
                    Math.round(
                      ((selectedComponent.price.original -
                        selectedComponent.price.discount) /
                        selectedComponent.price.original) *
                        100,
                    ),
                    0,
                  ) > 0 && (
                    <Badge
                      aria-description="Discount percentage"
                      className="text-[0.8125rem]/[123%] font-normal w-fit ml-2"
                    >
                      {"-"}
                      {Math.max(
                        Math.round(
                          ((selectedComponent.price.original -
                            selectedComponent.price.discount) /
                            selectedComponent.price.original) *
                            100,
                        ),
                        0,
                      )}
                      %
                    </Badge>
                  )}
              </Typography>
            </div>
          </>
        ) : (
          <>
            <div className="aspect-square size-[3.5rem] bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-2xl">?</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">{label}</span>
                {required && <span className="text-xs text-red-500">*</span>}
              </div>
              <p className="text-sm text-gray-500">Chưa chọn linh kiện</p>
            </div>
          </>
        )}
      </div>

      <Button
        color="primary"
        className="h-[2rem] min-w-[5.5rem]"
        onClick={onSelect}
      >
        {selectedComponent ? "Thay đổi" : "Chọn"}
      </Button>
    </div>
  );
}
