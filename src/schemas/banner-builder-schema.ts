import { z } from "zod";

// Image schema - matches ImageType
export const imageSchema = z.object({
  id: z.string().min(1, "Image ID is required"),
  alt: z.string().min(1, "Alt text is required"),
  src: z.string().url("Must be a valid URL"),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

// Banner image with link
export const bannerImageSchema = z.object({
  image: imageSchema,
  link: z.string(), // Can be empty string
});

// Grid layout schema - matches GridLayout
export const gridLayoutSchema = z.object({
  tailwindCSS: z.string().min(1, "Tailwind CSS classes are required"),
});

// Flex layout schema - matches FlexLayout
export const flexLayoutSchema = z.object({
  tailwindCSS: z.string().min(1, "Tailwind CSS classes are required"),
  direction: z.enum(["col", "row"]),
});

// Single layout schema - matches SingleLayout
export const singleLayoutSchema = z.object({
  tailwindCSS: z.string().min(1, "Tailwind CSS classes are required"),
});

// Config layout schema - matches ConfigLayout
export const configLayoutSchema = z.object({
  grid: gridLayoutSchema.optional(),
  flex: flexLayoutSchema.optional(),
  single: singleLayoutSchema.optional(),
});

// Banner item schema - matches BannerItem
export const bannerItemSchema = z.object({
  id: z.string().min(1, "Banner item ID is required"),
  type: z.enum(["carousel", "image"]),
  customStyle: z.record(z.string(), z.any()).optional(), // CSSProperties
  medias: z
    .array(bannerImageSchema)
    .min(1, "At least one banner image is required"),
});

// Main banner schema - matches Banner interface
export const bannerBuilderSchema = z
  .object({
    id: z.string().min(1, "Banner ID is required"),
    page: z.array(z.string()).min(1, "At least one page is required"),
    position: z.enum([
      "top",
      "middle",
      "bottom",
      "right-side",
      "left-side",
      "products-lib",
    ]),
    layout: z.enum(["grid", "flex", "single"]),
    displayMode: z.enum(["static", "dynamic"]),
    configLayout: configLayoutSchema.optional(),
    bannerItems: z
      .array(bannerItemSchema)
      .min(1, "At least one banner item is required"),
  })
  .refine(
    (data) => {
      // Validate that the selected layout has corresponding config
      if (data.layout === "grid" && !data.configLayout?.grid) {
        return false;
      }
      if (data.layout === "flex" && !data.configLayout?.flex) {
        return false;
      }
      if (data.layout === "single" && !data.configLayout?.single) {
        return false;
      }
      return true;
    },
    {
      message: "Config layout must match the selected layout type",
      path: ["configLayout"],
    }
  );

// Export types
export type BannerBuilderFormData = z.infer<typeof bannerBuilderSchema>;
export type BannerItemFormData = z.infer<typeof bannerItemSchema>;
export type BannerImageFormData = z.infer<typeof bannerImageSchema>;
export type GridLayoutFormData = z.infer<typeof gridLayoutSchema>;
export type FlexLayoutFormData = z.infer<typeof flexLayoutSchema>;
export type SingleLayoutFormData = z.infer<typeof singleLayoutSchema>;
