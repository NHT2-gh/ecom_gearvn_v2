"use client";

import React, { createContext, useContext, PropsWithChildren } from "react";

export interface SkeletonThemeConfig {
  /** Base color for skeleton */
  baseColor?: string;
  /** Highlight color for animation */
  highlightColor?: string;
  /** Default width */
  width?: string | number;
  /** Default height */
  height?: string | number;
  /** Default border radius */
  borderRadius?: string | number;
  /** Display inline by default */
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

const SkeletonThemeContext = createContext<SkeletonThemeConfig>({});

export function useSkeletonTheme(): SkeletonThemeConfig {
  return useContext(SkeletonThemeContext);
}

export interface SkeletonThemeProps extends PropsWithChildren {
  /** Theme configuration */
  config?: SkeletonThemeConfig;
}

/**
 * SkeletonTheme component to provide global skeleton styling
 * 
 * @example
 * ```tsx
 * <SkeletonTheme config={{ baseColor: "#202020", highlightColor: "#444" }}>
 *   <Skeleton count={3} />
 * </SkeletonTheme>
 * ```
 */
export function SkeletonTheme({ children, config = {} }: SkeletonThemeProps) {
  return (
    <SkeletonThemeContext.Provider value={config}>
      {children}
    </SkeletonThemeContext.Provider>
  );
}
