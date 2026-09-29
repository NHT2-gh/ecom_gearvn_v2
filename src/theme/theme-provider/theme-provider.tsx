'use client';;
import {
  type ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from 'next-themes';

import type { JSX } from "react";

// ----------------------------------------------------------------------

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): JSX.Element {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
