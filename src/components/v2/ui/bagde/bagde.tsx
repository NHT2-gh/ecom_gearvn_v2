"use client";
import * as React from "react";
import { badgeVariants } from "./theme";
import { type BadgeProps } from "./type";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// ----------------------------------------------------------------------

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant, size, color, icon, children, onClose, ...props },
    ref
  ) => {
    const [hidden, setHidden] = React.useState(false);

    return (
      <span
        className={cn(
          badgeVariants({
            variant,
            size,
            color,
            className: `${hidden ? "hidden" : ""} ${className}`,
          })
        )}
        ref={ref}
        {...props}
      >
        {variant === "mini" && icon ? icon : children}
        {onClose && (variant === "combo" || variant === "flag") && (
          <button onClick={() => setHidden(true)}>
            <X size={12} />
          </button>
        )}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export default Badge;
