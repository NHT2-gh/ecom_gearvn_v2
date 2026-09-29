"use client";
import React, { useState, useEffect } from "react";
import FilterItemRender from "./filter-item-render";
import { FilterItemConfig, FilterValue } from "@/components/v2/filter/type";
import { Input } from "../../ui/input";
import { Typography } from "../../ui/typography";

interface InputRangeFilterItemProps {
  config: FilterItemConfig;
  onChange?: (value: FilterValue) => void;
  className?: string;
  value?: FilterValue;
}

export default function InputRangeFilterItem({
  config,
  onChange,
  className,
  value,
}: InputRangeFilterItemProps) {
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");

  // Sync inputs with external value (only if it's a number array)
  useEffect(() => {
    if (value && Array.isArray(value)) {
      // Check if it's a number array (from custom input)
      const hasOnlyNumbers = value.every((v) => typeof v === "number");

      if (hasOnlyNumbers && value.length === 2) {
        const [min, max] = value as [number, number];
        setMinValue(min.toString());
        setMaxValue(max.toString());
      } else {
        // If it's string array (from quick select), clear inputs
        setMinValue("");
        setMaxValue("");
      }
    } else if (!value) {
      // Clear inputs if external value is null
      setMinValue("");
      setMaxValue("");
    }
  }, [value]);

  const handleMinChange = (value: string) => {
    const parsedMin = value ? parseInt(value) : 0;
    const parsedMax = maxValue ? parseInt(maxValue) : 0;

    setMinValue(value);
    // Only update if both values are non-zero
    if (parsedMin > 0 && parsedMax > 0) {
      onChange?.([parsedMin, parsedMax]);
    } else if (!value && !maxValue) {
      onChange?.(null);
    }
  };

  const handleMaxChange = (value: string) => {
    const parsedMin = minValue ? parseInt(minValue) : 0;
    const parsedMax = value ? parseInt(value) : 0;

    setMaxValue(value);
    // Only update if both values are non-zero
    if (parsedMin > 0 && parsedMax > 0) {
      console.log([parsedMin, parsedMax]);
      onChange?.([parsedMin, parsedMax]);
    } else if (!minValue && !value) {
      onChange?.(null);
    }
  };

  const handleSelectChange = (newValue: FilterValue) => {
    setMinValue("");
    setMaxValue("");

    if (newValue && Array.isArray(newValue)) {
      const hasOnlyString = newValue.filter((v) => typeof v === "string");
      if (hasOnlyString.length > 0) {
        onChange?.(hasOnlyString);
      }
    }
  };

  return (
    <div className="space-y-3">
      {config.options.length > 0 && (
        <FilterItemRender
          config={{
            type: "checkbox",
            options: "options" in config ? config.options : [],
            key: config.key,
          }}
          onChange={handleSelectChange}
          value={value as string[]}
          className={className}
        />
      )}
      <Typography level="body-14" fontWeight="medium">
        Hoặc nhập khoảng giá phù hợp:
      </Typography>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={minValue}
          handleOnChange={(value) => handleMinChange(value)}
          placeholder="Từ"
          className="h-[1.875rem] text-center"
        />
        <span className="text-sm font-normal">~</span>
        <Input
          type="number"
          value={maxValue}
          handleOnChange={(value) => handleMaxChange(value)}
          placeholder="Đến"
          className="h-[1.875rem] text-center"
        />
      </div>
    </div>
  );
}
