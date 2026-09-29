"use client";
import { cn } from "@/lib/utils";
import React, { memo, forwardRef } from "react";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: React.ReactNode;
}

export const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
    { className, label, children, ...props },
    ref,
  ) {
    const content = label || children;

    return (
      <label
        className={cn(
          "group relative pl-6 w-fit cursor-pointer flex gap-2 items-center select-none",
          className,
        )}
      >
        <input
          type="checkbox"
          className="peer absolute w-0 h-0 opacity-0"
          ref={ref}
          {...props}
        />
        <span
          className={cn(
            "absolute left-0 top-0 w-4 h-4",
            "border-[1.25px] border-[var(--color-stroke-primary)]", // Added slight rounding if consistent, else sharp
            "transition-colors duration-200",
            "group-hover:border-[var(--color-stroke-tertiary)]",
            "peer-checked:bg-[var(--bg-red)] peer-checked:border-[var(--bg-red)]",
            // Tick mark using after pseudo-element
            "peer-checked:after:content-[''] peer-checked:after:absolute",
            "peer-checked:after:w-[4px] peer-checked:after:h-[8px]",
            "peer-checked:after:top-[2px] peer-checked:after:left-[4.5px]",
            "peer-checked:after:border-r-[1.5px] peer-checked:after:border-b-[1.5px]",
            "peer-checked:after:border-[var(--color-icon-white)]",
            "peer-checked:after:rotate-45 peer-checked:after:z-10",
          )}
        />
        {content}
      </label>
    );
  }),
);

Checkbox.displayName = "Checkbox";
