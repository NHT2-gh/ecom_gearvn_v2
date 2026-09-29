import React, { CSSProperties, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useSkeletonTheme } from "./skeleton-theme";

export interface SkeletonProps {
  /** Number of skeleton lines to render */
  count?: number;
  /** Custom wrapper component */
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  /** Render as circle (useful for avatars) */
  circle?: boolean;
  /** Custom className */
  className?: string;
  /** Container className */
  containerClassName?: string;
  /** Container test ID */
  containerTestId?: string;
  /** Custom inline styles */
  style?: CSSProperties;
  /** Base color for skeleton */
  baseColor?: string;
  /** Highlight color for animation */
  highlightColor?: string;
  /** Width of skeleton */
  width?: string | number;
  /** Height of skeleton */
  height?: string | number;
  /** Border radius */
  borderRadius?: string | number;
  /** Display inline */
  inline?: boolean;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation direction */
  direction?: "ltr" | "rtl";
  /** Enable/disable animation */
  enableAnimation?: boolean;
  /** Custom highlight background gradient */
  customHighlightBackground?: string;
}

export function Skeleton({
  count = 1,
  wrapper: Wrapper,
  circle = false,
  className,
  containerClassName,
  containerTestId,
  style,
  baseColor: baseColorProp,
  highlightColor: highlightColorProp,
  width: widthProp,
  height: heightProp,
  borderRadius: borderRadiusProp,
  inline = false,
  duration: durationProp,
  direction: directionProp,
  enableAnimation: enableAnimationProp,
  customHighlightBackground: customHighlightBackgroundProp,
}: SkeletonProps) {
  const theme = useSkeletonTheme();

  // Merge props with theme defaults
  const baseColor = baseColorProp ?? theme.baseColor ?? "#ebebeb";
  const highlightColor = highlightColorProp ?? theme.highlightColor ?? "#f5f5f5";
  const width = widthProp ?? theme.width ?? "100%";
  const height = heightProp ?? theme.height;
  const borderRadius =
    borderRadiusProp ?? theme.borderRadius ?? (circle ? "50%" : "0.25rem");
  const duration = durationProp ?? theme.duration ?? 1.5;
  const direction = directionProp ?? theme.direction ?? "ltr";
  const enableAnimation = enableAnimationProp ?? theme.enableAnimation ?? true;
  const customHighlightBackground =
    customHighlightBackgroundProp ?? theme.customHighlightBackground;

  const skeletonStyle: CSSProperties = {
    ...style,
    "--base-color": baseColor,
    "--highlight-color": highlightColor,
    "--animation-duration": `${duration}s`,
    "--animation-direction": direction === "rtl" ? "reverse" : "normal",
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
  } as CSSProperties;

  if (customHighlightBackground) {
    skeletonStyle.backgroundImage = customHighlightBackground;
  }

  const skeletonClassName = cn(
    "skeleton",
    {
      "skeleton-inline": inline,
      "skeleton-no-animation": !enableAnimation,
    },
    className
  );

  const elements = Array.from({ length: count }).map((_, index) => (
    <span key={index} className={skeletonClassName} style={skeletonStyle}>
      &zwnj;
    </span>
  ));

  const container = (
    <span
      className={cn("skeleton-container", containerClassName)}
      data-testid={containerTestId}
    >
      {elements}
    </span>
  );

  if (Wrapper) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <Wrapper key={index}>
            <span className={skeletonClassName} style={skeletonStyle}>
              &zwnj;
            </span>
          </Wrapper>
        ))}
      </>
    );
  }

  return container;
}
