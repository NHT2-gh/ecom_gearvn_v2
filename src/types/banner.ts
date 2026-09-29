import { CSSProperties } from "react";

export type ImageType = {
  id: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
};
export type BannerType = "carousel" | "image" | "text" | "group-image";
export type BannerPosition =
  | "top"
  | "middle"
  | "bottom"
  | "right-side"
  | "left-side"
  | "products-lib";
export type BannerDisplayMode = "static" | "dynamic";

export type BannerItem = {
  id: string;
  type: BannerType;
  customStyle?: CSSProperties;
  contentText?: string;
  medias?: {
    image: ImageType;
    link: string;
  }[];
};

export interface GridLayout {
  tailwindCSS: string; // Combined classes with breakpoint prefixes (e.g., "grid gap-4 lg:grid-cols-3 xl:gap-6")
}

export interface FlexLayout {
  tailwindCSS: string; // Combined classes with breakpoint prefixes (e.g., "flex flex-col lg:flex-row gap-4")
  direction: "row" | "column";
}

export interface SingleLayout {
  tailwindCSS: string; // Combined classes with breakpoint prefixes (e.g., "w-full h-[47px]")
}

export type Layout = GridLayout | FlexLayout | SingleLayout;

export interface ConfigLayout {
  grid?: GridLayout;
  flex?: FlexLayout;
  single?: SingleLayout;
}

export type BannerLayout = keyof ConfigLayout;

export interface Banner {
  id: string;
  page: string[];
  position: BannerPosition;
  layout: BannerLayout;
  displayMode: BannerDisplayMode;
  configLayout?: ConfigLayout;
  bannerItems: BannerItem[];
}
