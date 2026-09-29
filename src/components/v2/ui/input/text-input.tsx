"use client";
import { cn, debounce } from "@/lib/utils";
import React, { memo, useMemo, useState, useRef } from "react";
import { XCircle } from "lucide-react";
import { Typography } from "../typography";
import { InputProps } from "./input";

export interface TextInputProps extends InputProps {
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

export const TextInput = memo(function TextInput({
  handleOnChange,
  handleOnSubmit,
  debounceTime = 0,
  className,
  value: initialValue,
  icon,
  ...props
}: TextInputProps) {
  const [inputValue, setInputValue] = useState<string>(
    initialValue?.toString() || "",
  );
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSendRequest = useMemo(() => {
    return debounce((value: string) => handleOnChange?.(value), debounceTime);
  }, [handleOnChange, debounceTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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

  const handleClear = () => {
    setInputValue("");
    handleOnChange?.("");
    inputRef.current?.focus();
  };

  const baseClassName = cn(
    "max-w-full w-full h-full p-2.5 text-txt-primary text-[0.9375rem]/[1.25rem] [caret-color:var(--color-icon-red-active)] focus:outline-none",
  );

  return (
    <div
      className={cn(
        "relative w-full h-fit flex items-center border border-stroke-secondary bg-primary self-stretch text-txt-primary focus-visible:border-2 focus-visible:border-primary transition-colors duration-200",
        className,
        {
          "cursor-not-allowed opacity-50": props.disabled,
        },
        { "border-stroke-tertiary": isFocused },
        { "pl-2.5": icon?.left },
        { "pr-2.5": icon?.right },
      )}
    >
      {icon?.left}
      <input
        ref={inputRef}
        {...props}
        type="text"
        className={baseClassName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
      />

      {props.maxLength && (
        <Typography
          level="body-14"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-txt-secondary text-xs"
        >
          {inputValue.length}/{props.maxLength}
        </Typography>
      )}
      {inputValue && isFocused && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-primary hover:text-txt-tertiary transition-colors"
          aria-label="Clear input"
        >
          <XCircle
            size={18}
            className="fill-icon-tertiary stroke-transparent [&>path]:stroke-white"
          />
        </button>
      )}
      {icon?.right}
    </div>
  );
});

TextInput.displayName = "TextInput";
