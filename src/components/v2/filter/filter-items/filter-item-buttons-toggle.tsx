"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FilterItemConfig } from "@/components/v2/filter/type";
import { Button } from "../../ui/button";
import { Typography } from "../../ui/typography";

// Multi-Select Filter Item Component
interface ButtonsToggleProp {
  config: Omit<Extract<FilterItemConfig, { type: "button-toggle" }>, "type">;
  onChange?: (value: string[]) => void;
  className?: string;
  value?: string[];
  isMultiSelect?: boolean;
}

export default function ButtonsToggleFilterItem({
  config,
  onChange,
  value,
  className,
  isMultiSelect = true,
}: ButtonsToggleProp) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionToggle = (option: string) => {
    const newSelection = isMultiSelect
      ? selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option]
      : [option];

    setSelectedOptions(newSelection);
    onChange?.(newSelection);
  };

  useEffect(() => {
    if (value) {
      setSelectedOptions(value);
    } else {
      setSelectedOptions([]);
    }
  }, [value]);

  return (
    <div className={cn("flex flex-wrap gap-2 h-fit max-h-full", className)}>
      {config.options.map((option) => (
        <Button
          variant={"outline"}
          color="secondary"
          key={option.value}
          onClick={() => handleOptionToggle(option.value)}
          disabled={option.disable}
          className={cn(
            "transition-all duration-200 border-stroke-primary border-1 focus:bg-transparent",
            { "border-stroke-red": selectedOptions.includes(option.value) },
          )}
        >
          <Typography
            level="body-14"
            className={cn("inline-flex items-center gap-2", {
              "text-txt-button-red": selectedOptions.includes(option.value),
            })}
          >
            {option.label}
          </Typography>
          {option.count !== undefined && (
            <span className="text-xs opacity-70">({option.count})</span>
          )}
        </Button>
      ))}
    </div>
  );
}
