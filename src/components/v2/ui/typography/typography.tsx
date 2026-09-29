import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { forwardRefWithAs } from "@/utils/render";
import { tv, type VariantProps } from "tailwind-variants";

// ----------------------------------------------------------------------

const typographyVariants = tv({
  variants: {
    level: {
      "h1-36": "text-[2.25rem]/[122.222%] font-bold",
      "h2-32": "text-[2rem]/[125%] font-bold",
      "h3-28": "text-[1.75rem]/[128.571%] font-bold",
      "h4-24": "text-[1.5rem]/[116.667%] font-bold",
      "h5-20": "text-[1.25rem]/[130%] font-bold",
      "h6-18": "text-[1.125rem]/[122.222%] font-bold",
      "h7-16": "text-[1rem]/[137.5%] font-bold",
      "body-15": "text-[0.9375rem]/[133.333%]",
      "body-14": "text-[0.875rem]/[142.857%]",
      "body-13": "text-[0.8125rem]/[138.462%]",
      "body-12": "text-[0.75rem]/[133.333%]",
      "caption-11": "text-[0.6875rem]/[127.273%]",
      "caption-10": "text-[0.625rem]/[120%]",
      "caption-9": "text-[0.5625rem]/[122.222%]",
      "paragraph-16": "text-[1rem]/[160%]",
      "paragraph-14": "text-[0.875rem]/[160%]",
    },

    fontWeight: {
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
    },
  },

  defaultVariants: {
    level: "body-14",
    fontWeight: "normal",
  },
});

const defaultVariantMapping: Record<
  NonNullable<VariantProps<typeof typographyVariants>["level"]>,
  string
> = {
  "h1-36": "h1",
  "h2-32": "h2",
  "h3-28": "h3",
  "h4-24": "h4",
  "h5-20": "h5",
  "h6-18": "h6",
  "h7-16": "h6",
  "body-15": "p",
  "body-14": "p",
  "body-13": "p",
  "body-12": "p",
  "caption-11": "span",
  "caption-10": "span",
  "caption-9": "span",
  "paragraph-16": "p",
  "paragraph-14": "p",
};

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, "fontWeight">,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRefWithAs<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "b" | "em" | "div",
  TypographyProps
>((props, ref) => {
  const {
    level = "body-12",
    children,
    as,
    className,
    fontWeight,
    ...rest
  } = props;

  const Tag = as ?? defaultVariantMapping[level];

  return (
    <Tag
      ref={ref}
      {...rest}
      className={cn(typographyVariants({ level, fontWeight, className }))}
    >
      {children}
    </Tag>
  );
});
