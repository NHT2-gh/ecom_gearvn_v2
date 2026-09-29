import { Typography } from "@/components/v2/ui/typography";
import React from "react";
import styles from "@/styles/product-detail.module.css";
import Description from "../sections/product-desc/components/description";
interface ProductDescriptionProps {
  content: string; // html
}

export default function ProductDescription({
  content,
}: ProductDescriptionProps) {
  return (
    <div
      id="customers-rating"
      aria-label="Mô tả sản phẩm"
      className="space-y-4 rounded-sm bg-white w-full px-6 py-4"
    >
      <Typography level="h2-32" className="!text-2xl !font-semibold">
        Mô tả sản phẩm
      </Typography>
      {content !== "" ? (
        <Description description={content} />
      ) : (
        <Typography level="h2-32" color="secondary">
          Chưa cập nhật mô tả cho sản phẩm này
        </Typography>
      )}
    </div>
  );
}
