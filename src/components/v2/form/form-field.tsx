"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
// import { HelpCircle, AlertCircle } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/v2/ui/tooltip/tooltip";
import { Typography } from "../ui/typography";
import { Controller, useFormContext } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Select } from "../ui/select";
import { InputProps } from "../ui/input/input";
import { Input } from "../ui/input";
import { SelectProps } from "../ui/select/select";

type FieldType = "input" | "select";

export interface FormFieldProps {
  name: string;
  fieldType?: FieldType;
  options?: {
    label?: string;
    hint?: string;
    message?: {
      type: "success" | "error" | "info";
      text: string;
    };
    required?: boolean;
  };
  layout?: "vertical" | "horizontal";
  fieldConfig: InputProps | SelectProps;

  className?: string;
}

const fieldComponents: Record<FieldType, React.ComponentType<any>> = {
  input: Input,
  select: Select,
};

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      name,
      fieldType = "input",
      options = {
        required: false,
        message: {
          type: "info",
          text: "",
        },
      },
      layout = "vertical",
      fieldConfig,
      className,
    },
    ref,
  ) => {
    const messageColorMap = {
      success: "text-txt-status-green",
      error: "text-txt-status-red",
      info: "text-txt-secondary",
    };
    const FieldComponent = fieldComponents[fieldType];
    const { control } = useFormContext();
    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-1",
          { "flex-col": layout === "vertical" },
          { "flex-row items-start": layout === "horizontal" },
          className,
        )}
      >
        {/* Label Section */}
        {options?.label && (
          <label
            className={cn(
              "flex items-center",
              layout !== "vertical" && "min-w-fit pt-2.5",
            )}
          >
            <Typography
              className="text-txt-secondary font-semibold"
              level="body-13"
            >
              {options?.label}
            </Typography>
            {options?.required && (
              <span className="text-txt-status-red ml-1">*</span>
            )}
            {options?.hint && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-4 h-4 ml-1 cursor-help",
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    )}
                  >
                    <InformationCircleIcon className="w-4 h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  {options.hint}
                </TooltipContent>
              </Tooltip>
            )}
          </label>
        )}

        {/* Input Wrapper */}
        <div className={cn("flex-1", layout !== "vertical" ? "w-full" : "")}>
          {name ? (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <FieldComponent
                  handleOnChange={(value: string) => field.onChange(value)}
                  {...fieldConfig}
                  {...field}
                />
              )}
            />
          ) : (
            <FieldComponent placeholder="Không có name" {...fieldConfig} />
          )}

          {/* Message Text */}
          {options?.message && (
            <Typography
              level="body-12"
              className={cn("mt-1", messageColorMap[options.message.type])}
            >
              {options.message.text}
            </Typography>
          )}
        </div>
      </div>
    );
  },
);

FormField.displayName = "FormField";
