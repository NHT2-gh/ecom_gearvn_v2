import * as React from "react";

import { buttonVariants } from "./theme";
import { type ButtonProps } from "./type";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading = false, color, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            color,
            className,
          }),
          isLoading && "opacity-50 cursor-not-allowed"
        )}
        ref={ref}
        tabIndex={-1}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
