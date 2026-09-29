import { cva } from "class-variance-authority";

// ----------------------------------------------------------------------

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap cursor-pointer ring-offset-background transition-all duration-100 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30",
  {
    variants: {
      variant: {
        solid: " hover:opacity-70",
        surface: "border hover:opacity-70",
        outline: "border border-2 bg-primary",
        ghost: "bg-transparent border-none ",
        plain: "!h-fit !p-0 underline-offset-4 hover:underline focus:underline",
      },
      size: {
        sm: "h-[1.5rem] px-1.5 py-1 text-xs/[133.333%]",
        md: "h-[2.25rem] p-2 text-sm/[142.857%] -tracking-[0.28px]",
        lg: "h-[2.625rem] py-2.5 px-3 text-base/[137.5%]",
        xl: "h-[3rem] py-3 px-4 text-[1.125rem]/[122.222%]",
      },
      color: {
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        info: "",
      },
    },
    compoundVariants: [
      // SOLID - Primary
      {
        variant: "solid",
        color: "primary",
        className: "bg-red text-txt-white focus:bg-red-darker",
      },
      // SOLID - Secondary
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary text-txt-primary focus:bg-tertiary",
      },
      // SOLID - Success
      {
        variant: "solid",
        color: "success",
        className: "bg-status-green text-white focus:bg-green-700",
      },
      // SOLID - Warning
      {
        variant: "solid",
        color: "warning",
        className: "bg-status-yellow text-white focus:bg-yellow-600",
      },
      // SOLID - Info
      {
        variant: "solid",
        color: "info",
        className: "bg-status-blue text-white focus:bg-blue-700",
      },

      // SURFACE - Primary
      {
        variant: "surface",
        color: "primary",
        className:
          "bg-red-subtle5 text-txt-button-red border-red-200 focus:bg-red-subtle4 focus:border-red-300",
      },
      // SURFACE - Secondary
      {
        variant: "surface",
        color: "secondary",
        className:
          "bg-gray-50 text-gray-600 border-gray-200 focus:bg-gray-100 focus:border-gray-300",
      },
      // SURFACE - Success
      {
        variant: "surface",
        color: "success",
        className:
          "bg-status-green-subtle text-txt-status-green border-green-200 focus:bg-green-100",
      },
      // SURFACE - Warning
      {
        variant: "surface",
        color: "warning",
        className:
          "bg-status-yellow-subtle text-txt-status-yellow border-yellow-200 focus:bg-yellow-100 focus:border-yellow-200",
      },
      // SURFACE - Info
      {
        variant: "surface",
        color: "info",
        className:
          "bg-status-blue-subtle text-txt-status-blue border-blue-200 focus:bg-blue-100 focus:border-blue-200",
      },

      // OUTLINE - Primary
      {
        variant: "outline",
        color: "primary",
        className:
          "text-txt-button-red border-stroke-red hover:bg-status-red-subtle focus:bg-red-darker focus:border-red-darker focus:text-txt-white",
      },
      // OUTLINE - Secondary
      {
        variant: "outline",
        color: "secondary",
        className:
          "text-txt-primary border-stroke-primary hover:bg-secondary focus:bg-tertiary",
      },
      // OUTLINE - Success
      {
        variant: "outline",
        color: "success",
        className:
          "text-txt-status-green border-stroke-green hover:bg-status-green-subtle focus:border-green-700 focus:bg-green-700 focus:text-txt-white",
      },
      // OUTLINE - Warning
      {
        variant: "outline",
        color: "warning",
        className:
          "text-txt-status-yellow border-stroke-yellow hover:bg-status-yellow-subtle focus:bg-yellow-600 focus:text-txt-white",
      },
      // OUTLINE - Info
      {
        variant: "outline",
        color: "info",
        className:
          "text-txt-status-blue border-stroke-blue hover:bg-status-blue-subtle focus:bg-status-blue focus:text-txt-white",
      },

      // GHOST - Primary
      {
        variant: "ghost",
        color: "primary",
        className:
          "text-txt-button-red hover:bg-status-red-subtle focus:bg-red-subtle4",
      },
      // GHOST - Secondary
      {
        variant: "ghost",
        color: "secondary",
        className: "text-txt-primary hover:bg-secondary focus:bg-tertiary",
      },
      // GHOST - Success
      {
        variant: "ghost",
        color: "success",
        className:
          "text-txt-status-green hover:bg-status-green-subtle focus:bg-green-100",
      },
      // GHOST - Warning
      {
        variant: "ghost",
        color: "warning",
        className:
          "text-txt-status-yellow hover:bg-status-yellow-subtle focus:bg-yellow-100",
      },
      // GHOST - Info
      {
        variant: "ghost",
        color: "info",
        className:
          "text-txt-button-link hover:bg-status-blue-subtle focus:bg-blue-100",
      },

      // PLAIN - Primary
      {
        variant: "plain",
        color: "primary",
        className: "text-txt-button-red",
      },
      // PLAIN - Secondary
      {
        variant: "plain",
        color: "secondary",
        className: "text-txt-primary",
      },
      // PLAIN - Success
      {
        variant: "plain",
        color: "success",
        className: "text-txt-status-green",
      },
      // PLAIN - Warning
      {
        variant: "plain",
        color: "warning",
        className: "text-txt-status-yellow",
      },
      // PLAIN - Info
      {
        variant: "plain",
        color: "info",
        className: "text-txt-button-link",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "primary",
    },
  },
);
