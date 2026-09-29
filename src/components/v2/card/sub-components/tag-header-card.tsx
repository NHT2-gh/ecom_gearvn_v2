import React from "react";

import Image from "next/image";
import { Typography } from "../../ui/typography";

export type TagType = "sole" | "bestSeller" | "flashShipping" | "none";

const tagMap: Record<
  TagType,
  { text: string; icon: string; bgGradient: string }
> = {
  sole: {
    text: "Độc quyền",
    icon: "tag-sole-icon",
    bgGradient: "T01",
  },
  bestSeller: {
    text: "Bán chạy",
    icon: "tag-best-seller-icon",
    bgGradient: "T02",
  },
  flashShipping: {
    text: "Giao nhanh 2h",
    icon: "tag-flash-shipping-icon",
    bgGradient: "T03",
  },
  none: {
    text: "",
    icon: "",
    bgGradient: "",
  },
};

export default function TagHeaderCard({ type }: { type: TagType }) {
  const { text, icon, bgGradient } = tagMap[type];

  return (
    <div
      className="flex gap-1 items-center justify-center w-full h-[2rem] min-h-[2rem]"
      style={{
        backgroundImage: "var(--" + bgGradient + ")",
      }}
    >
      {type !== "none" && (
        <>
          <Image
            aria-label="icon"
            src={`/svgs/${icon}.svg`}
            alt={text}
            width={16}
            height={16}
          />
          <Typography
            level="body-12"
            fontWeight="semibold"
            className="text-txt-white inline-flex"
          >
            {text}
          </Typography>
        </>
      )}
    </div>
  );
}
