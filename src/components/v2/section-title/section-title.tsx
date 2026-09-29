import React from "react";
import { Typography } from "../ui/typography";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <span
      aria-label="Title Section"
      className="bg-[#FB2C361A] inline-block w-fit py-3 px-5 border-l-4 border-stroke-red"
    >
      <Typography
        level="h5-20"
        fontWeight="semibold"
        className="inline text-[1.125rem]/[122.222%]"
      >
        {title}
      </Typography>
    </span>
  );
}
