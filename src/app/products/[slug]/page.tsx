import React from "react";
import { Viewport } from "next";
import { getProductServerAction } from "@/lib/server-actions/product.action";
import { ProductPageView } from "@/sections/v2/product-detail";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: false,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { productDetail } = await getProductServerAction(slug);
  return {
    title: productDetail.name,
    alternates: {
      canonical: `https://gearvn.com/products/${slug}`,
    },
    icons: {
      icon: "https://theme.hstatic.net/200000722513/1001090675/14/favicon.png?v=10096",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    other: {
      "facebook-domain-verification": "endzhydcmwwl9ogjydfwt9e32kzcc2",
      "revisit-after": "1 day",
      HandheldFriendly: "true",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { productDetail, productGift, productDiscount, productRating } =
    await getProductServerAction(slug);

  return (
    <ProductPageView
      currentProduct={{
        detail: productDetail,
        gift: productGift,
        discount: productDiscount,
        rating: productRating,
      }}
    />
  );
}
