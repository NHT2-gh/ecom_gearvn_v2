import { cva } from "class-variance-authority";

// ----------------------------------------------------------------------

export const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium",
  {
    variants: {
      variant: {
        combo: "border !size-[unset]",
        mini: "rounded-full !gap-0 text-txt-white font-medium !p-0 !text-[0.5625rem]/[127.273%]",
        flag: "border-l !size-[unset]",
        bold: "!bg-primary !size-[unset] border-2 !border-stroke-primary font-bold",
      },
      size: {
        sm: "px-1 gap-1 py-0.5 size-4 text-[0.6875rem]/[127.273%] ",
        md: "px-1.5 gap-1 py-0.5 size-4 text-[0.75rem]/[133.333%] ",
        lg: "px-2 gap-1.5 py-1 size-5 text-[0.8125rem]/[138.462%] ",
      },
      color: {
        red: "text-txt-class-red",
        green: "text-txt-class-emerald",
        sky: "text-txt-class-sky",
        yellow: "text-txt-class-yellow",
        orange: "text-txt-class-orange",
        fuchsia: "text-txt-class-fuchsia",
        violet: "text-txt-class-violet",
      },
    },
    compoundVariants: [
      // COMBO - Red
      {
        variant: "combo",
        color: "red",
        className:
          "bg-subtle-red text-txt-class-red border-red-300 px-1 py-0.5",
      },
      // COMBO - Green
      {
        variant: "combo",
        color: "green",
        className:
          "bg-status-green-subtle text-txt-class-emerald border-emerald-300",
      },
      // COMBO - Sky
      {
        variant: "combo",
        color: "sky",
        className: "bg-subtle-sky text-txt-class-sky border-sky-300",
      },
      // COMBO - Yellow
      {
        variant: "combo",
        color: "yellow",
        className: "bg-subtle-yellow text-txt-class-yellow border-yellow-300",
      },
      // COMBO - Fuchsia
      {
        variant: "combo",
        color: "fuchsia",
        className:
          "bg-subtle-fuchsia text-txt-class-fuchsia border-fuchsia-300",
      },
      // COMBO - Violet
      {
        variant: "combo",
        color: "violet",
        className: "bg-subtle-violet text-txt-class-violet border-violet-300",
      },

      // COMBO - Orange
      {
        variant: "combo",
        color: "orange",
        className: "bg-subtle-orange text-txt-class-orange border-orange-300",
      },

      // mini - Red
      {
        variant: "mini",
        color: "red",
        className: "bg-bold-red",
      },

      // mini - Green
      {
        variant: "mini",
        color: "green",
        className: "bg-bold-emerald",
      },
      // mini - Sky
      {
        variant: "mini",
        color: "sky",
        className: "bg-bold-sky",
      },

      // mini - Orange
      {
        variant: "mini",
        color: "orange",
        className: "bg-bold-orange",
      },

      // mini - Yellow
      {
        variant: "mini",
        color: "yellow",
        className: "bg-bold-yellow",
      },
      // mini - Fuchsia
      {
        variant: "mini",
        color: "fuchsia",
        className: "bg-bold-fuchsia",
      },
      // mini - Violet
      {
        variant: "mini",
        color: "violet",
        className: "bg-bold-violet",
      },

      // FLAG - Red
      {
        variant: "flag",
        color: "red",
        className: "border-bold-red bg-badge-03-red text-txt-class-red",
      },
      // FLAG - Green
      {
        variant: "flag",
        color: "green",
        className:
          "border-bold-emerald bg-badge-03-green text-txt-class-emerald",
      },
      // FLAG - Yellow
      {
        variant: "flag",
        color: "yellow",
        className:
          "border-bold-yellow bg-badge-03-yellow text-txt-class-yellow",
      },
      // FLAG - Blue
      {
        variant: "flag",
        color: "sky",
        className: "border-bold-sky bg-badge-03-blue text-txt-class-sky",
      },

      // FLAG - Orange
      {
        variant: "flag",
        color: "orange",
        className:
          "border-bold-orange bg-badge-03-orange text-txt-class-orange",
      },

      // FLAG - Fuchsia
      {
        variant: "flag",
        color: "fuchsia",
        className:
          "border-bold-fuchsia bg-badge-03-pink text-txt-class-fuchsia",
      },
      // FLAG - Violet
      {
        variant: "flag",
        color: "violet",
        className:
          "border-bold-violet bg-badge-03-violet text-txt-class-violet",
      },
    ],
    defaultVariants: {
      variant: "combo",
      size: "md",
      color: "red",
    },
  }
);
