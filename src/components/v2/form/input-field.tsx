import React from "react";
import Input, { InputProps } from "../ui/input/input";
import { Controller, UseFormReturn } from "react-hook-form";

export interface InputFieldRenderer extends InputProps {
  form: UseFormReturn<any>;
}

export default function InputField({ form, ...props }: InputFieldRenderer) {
  return (
    <Controller
      name={props.name!}
      control={form.control}
      render={({ field: controllerField }) => (
        <Input
          {...props}
          id={props.name}
          {...controllerField}
          disabled={props.disabled}
        />
      )}
    />
  );
}
