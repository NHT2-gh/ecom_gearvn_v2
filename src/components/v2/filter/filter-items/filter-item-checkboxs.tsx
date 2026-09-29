"use client";
import React, { useEffect, useState } from "react";
import { FilterItemConfig } from "../type";
import styles from "../style/filter-style.module.css";
import { Checkbox } from "../../ui/input";
import { Typography } from "../../ui/typography";

interface CheckboxsProp {
  config: Extract<FilterItemConfig, { type: "checkbox" }>;
  onChange?: (value: string[]) => void;
  className?: string;
  value?: string[];
}

export default function CheckboxsFilterItem({
  config,
  onChange,
  className,
  value,
}: CheckboxsProp) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckedOption = (option: string | "all") => {
    let newSelection: string[];

    if (option === "all") {
      // Toggle all options
      if (selectedOptions.length === config.options.length) {
        newSelection = [];
      } else {
        newSelection = config.options.map((opt) => opt.value);
      }
    } else {
      // Toggle individual option
      newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    }

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
    <ul className={`${className}, space-y-2`}>
      <li>
        <Checkbox
          onChange={() => handleCheckedOption("all")}
          checked={selectedOptions.length === config.options.length}
        >
          <Typography level="body-14" className="text-txt-primary">
            Tất cả
          </Typography>
        </Checkbox>
      </li>
      {config.options.map((option) => (
        <li key={option.value}>
          <Checkbox
            onChange={() => handleCheckedOption(option.value)}
            checked={selectedOptions.includes(option.value)}
          >
            <Typography level="body-14" className="text-txt-primary">
              {option.label}
            </Typography>
          </Checkbox>
        </li>
      ))}
    </ul>
  );
}
