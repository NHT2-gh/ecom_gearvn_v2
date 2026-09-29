import React from "react";
import ButtonsToggleFilterItem from "../filter-items/filter-item-buttons-toggle";
import {
  BarsArrowDownIcon,
  FireIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

interface FilterButtonsProps {
  onChange: (value: string[]) => void;
}

export default function FilterButtons({ onChange }: FilterButtonsProps) {
  return (
    <ButtonsToggleFilterItem
      className="justify-end"
      config={{
        key: "quick-sort",
        options: [
          {
            label: (
              <span className="flex items-center gap-2 font-medium">
                <FireIcon className="w-4 h-4" />
                Deal Hot
              </span>
            ),
            value: "is-hot-deal",
          },
          {
            label: (
              <span className="flex items-center gap-2 font-medium">
                <StarIcon className="w-4 h-4" />
                Nổi bật
              </span>
            ),
            value: "is-highlight",
          },
          {
            label: (
              <span className="flex items-center gap-2 font-bold">
                <BarsArrowDownIcon className="w-4 h-4" />
                Xếp theo: Giá tăng
              </span>
            ),
            value: "sort-by-price-asc",
          },
        ],
      }}
      onChange={onChange}
    />
  );
}
