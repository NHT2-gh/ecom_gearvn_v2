"use client";
import { cn, debounce } from "@/lib/utils";
import React, { memo, useMemo, useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputProps } from "./input";

export const PasswordInput = memo(function PasswordInput({
  value: initialValue,
  handleOnChange,
  handleOnSubmit,
  debounceTime,
  className,
  ...props
}: InputProps) {
  const [inputValue, setInputValue] = useState<string>(
    initialValue?.toString() || ""
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSendRequest = useMemo(() => {
    return debounce(
      (value: string) => handleOnChange?.(value),
      debounceTime ?? 0
    );
  }, [handleOnChange, debounceTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (debounceTime && debounceTime > 0) {
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const baseClassName = cn(
    "w-full h-full text-txt-primary text-[0.9375rem]/[1.25rem] [caret-color:var(--color-icon-red-active)] focus:outline-none"
  );

  return (
    <div
      className={cn(
        "relative w-full ring-1 ring-stroke-secondary p-2.5 bg-primary self-stretch text-txt-primary focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200",
        className,
        {
          "cursor-not-allowed opacity-50": props.disabled,
        },
        { "ring-stroke-tertiary": isFocused }
      )}
    >
      <input
        ref={inputRef}
        {...props}
        type={showPassword ? "text" : "password"}
        className={baseClassName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-secondary hover:text-txt-primary transition-colors"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
