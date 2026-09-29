import { type VariantProps } from "class-variance-authority";
import { type buttonVariants } from "./theme";

// ----------------------------------------------------------------------

export const ButtonColors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "info",
] as const;

export type ButtonColor = (typeof ButtonColors)[number];
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: ButtonColor;
  isLoading?: boolean;
}
