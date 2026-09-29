import { type VariantProps } from "class-variance-authority";
import { badgeVariants } from "./theme";

// ----------------------------------------------------------------------

export const BadgeVariants = ["combo", "mini", "flag", "bold"] as const;
export const BadgeColors = [
  "red",
  "green",
  "yellow",
  "sky",
  "orange",
  "fuchsia",
  "violet",
] as const;
export const BadgeSizes = ["sm", "md", "lg"] as const;

export type BadgeVariant = (typeof BadgeVariants)[number];
export type BadgeColor = (typeof BadgeColors)[number];
export type BadgeSize = (typeof BadgeSizes)[number];

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  color?: BadgeColor;
  icon?: React.ReactNode;
  onClose?: () => void;
}
