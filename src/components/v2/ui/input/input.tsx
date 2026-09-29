"use client";
import React, { memo } from "react";
import { TextInput, TextInputProps } from "./text-input";
import { PasswordInput } from "./password-input";
import { NumberInput, NumberInputProps } from "./number-input";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "form"
> {
  handleOnChange?: (value: string) => void;
  handleOnSubmit?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  debounceTime?: number;
}

export default memo(function Input({
  type = "text",
  ...props
}: TextInputProps | NumberInputProps) {
  switch (type) {
    case "text":
      return <TextInput {...props} />;
    case "password":
      return <PasswordInput {...props} />;
    case "number":
      return <NumberInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
});

// Export individual components for direct use
export { TextInput } from "./text-input";
export { PasswordInput } from "./password-input";
export { NumberInput } from "./number-input";
