import { HomepageView } from "@/sections/v2/home";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export const metadata: Metadata = {
  title:
    "GEARVN - Máy tính cao cấp, Laptop thiết bị chơi game hàng đầu Việt Nam – GEARVN.COM",
  description:
    "GEARVN - nơi mua sắm laptop, PC, gaming gear hàng đầu Việt Nam.",
  icons: {
    icon: "https://theme.hstatic.net/200000722513/1001090675/14/favicon.png?v=10096",
    apple:
      "https://theme.hstatic.net/200000722513/1001090675/14/favicon.png?v=10096",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://gearvn.com/",
  },
  other: {
    "facebook-domain-verification": "endzhydcmwwl9ogjydfwt9e32kzcc2",
    "revisit-after": "1 day",
    HandheldFriendly: "true",
  },
};

export default function HomePage() {
  return <HomepageView />;
}
