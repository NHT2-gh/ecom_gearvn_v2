"use client";
import { cn, debounce } from "@/lib/utils";
import React, { memo, useMemo, useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { InputProps } from "./input";

export interface NumberInputProps extends InputProps {
  controlValue?: boolean;
}

export const NumberInput = memo(function NumberInput({
  handleOnChange,
  handleOnSubmit,
  debounceTime = 0,
  controlValue = false,
  min = 0,
  max = 1000,
  defaultValue,
  ...props
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState<string>(
    controlValue ? min.toString() : defaultValue?.toString() || ""
  );
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSendRequest = useMemo(() => {
    return debounce((value: string) => handleOnChange?.(value), debounceTime);
  }, [handleOnChange, debounceTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Only allow digits
    value = value.replace(/[^\d]/g, "");
    value = value.trim()
      ? Math.max(Number(min), Math.min(Number(max), parseInt(value))) >
        Number(min)
        ? value
        : min.toString()
      : value;

    setInputValue(value);

    if (debounceTime > 0) {
      debouncedSendRequest(value);
    } else {
      handleOnChange?.(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnSubmit?.(inputValue);
    }
  };

  const handleIncrement = () => {
    const num = parseInt(inputValue) || 0;
    const newValue = Math.min(Number(max), num + 1).toString();
    setInputValue(newValue);
    handleOnChange?.(newValue);
  };

  const handleDecrement = () => {
    const num = parseInt(inputValue) || 0;
    const newValue = Math.max(Number(min), num - 1).toString();
    setInputValue(newValue);
    handleOnChange?.(newValue);
  };

  const baseClassName = cn(
    "border border-secondary bg-primary self-stretch h-[2.375rem] text-txt-primary text-[0.9375rem]/[133.333%] transition-colors duration-200 [caret-color:var(--color-icon-red-active)]",
    {
      "border-stroke-tertiary": isFocused && !controlValue,
      "border-stroke-primary": !isFocused && !controlValue,
      "focus:outline-none": true,
      "p-2.5 border w-full h-10": !controlValue,
      "p-0 border-t-0 border-b-0 text-center w-[3.75rem]": controlValue,
    }
  );

  return (
    <div
      className={cn("relative w-full flex items-center", {
        "border border-stroke-primary w-fit": controlValue,
        "border-stroke-tertiary": isFocused,
      })}
    >
      {controlValue && (
        <button
          type="button"
          onClick={handleDecrement}
          className="p-2 transition-colors hover:bg-secondary group disabled:hover:bg-transparent"
          aria-label="Decrease value"
          disabled={Number(inputValue) <= Number(min)}
        >
          <Minus
            className="stroke-icon-primary group-disabled:stroke-icon-quaternary"
            strokeWidth={2}
            size={22}
          />
        </button>
      )}

      <input
        ref={inputRef}
        {...props}
        type="text"
        inputMode="numeric"
        className={cn(baseClassName, props.className)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        min={min}
        max={max}
      />

      {controlValue && (
        <button
          type="button"
          onClick={handleIncrement}
          className="p-2 transition-colors hover:bg-secondary group disabled:hover:bg-transparent"
          aria-label="Increase value"
          disabled={Number(inputValue) >= Number(max)}
        >
          <Plus
            className="stroke-icon-primary group-disabled:stroke-icon-quaternary"
            strokeWidth={2}
            size={22}
          />
        </button>
      )}
    </div>
  );
});

NumberInput.displayName = "NumberInput";
