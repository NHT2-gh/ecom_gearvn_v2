import MainLayout from "@/layout/main/main";
import localFont from "next/font/local";
import { Metadata } from "next";
import { AppProviders } from "@/providers/app-providers";
import ToastProvider from "@/providers/toast-provider";
import { ThemeProvider } from "@/theme/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "GEARVN - Máy tính cao cấp, Laptop thiết bị chơi game hàng đầu Việt Nam - GEARVN.COM",
  icons: {
    icon: "https://theme.hstatic.net/200000722513/1001090675/14/favicon.png?v=9843",
    apple:
      "https://theme.hstatic.net/200000722513/1001090675/14/favicon.png?v=9843",
  },
  description:
    "GEARVN hệ thống bán lẻ cung cấp Hi-End PC, laptop, máy tính và thiết bị gaming gear chuyên nghiệp hàng đầu Việt Nam, hotline: 1900 5301",
};

const interLocal = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Inter-Bold.ttf",
      weight: "700",
    },
  ],
  style: "normal",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={interLocal.className}>
      <body className="relative h-fit overflow-y-scroll overflow-x-hidden w-full">
        <AppProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            enableSystem
          >
            <MainLayout>{children}</MainLayout>
            <ToastProvider />
          </ThemeProvider>
        </AppProviders>
      </body>
    </html>
  );
}
