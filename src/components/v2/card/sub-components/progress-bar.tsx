import React from "react";
import { SVGMiniFire } from "@/assets/svgs/v2";
import { Typography } from "../../ui/typography";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  mode: "light" | "dark";
  progress: number;
  total: number;
}

export default function ProgressBar({
  mode = "light",
  progress,
  total,
}: ProgressBarProps) {
  const remainingQuantity = Math.max(total - progress, 0);
  return (
    <div className="w-full order-4 flex items-center">
      <span
        className={cn(
          "size-[1.875rem] shrink-0 border border-stroke-red bg-red-subtle4 inline-flex justify-center items-center",
          {
            "bg-red-800 border-red-500": mode === "dark",
          },
        )}
      >
        <SVGMiniFire fill="white" mode={mode} />
      </span>
      <div
        style={{
          ["--progress-width" as string]: `${
            (remainingQuantity / total) * 100
          }%`,
        }}
        className={cn(
          "w-full relative h-[1.125rem] flex items-center justify-center grow bg-white/10 shadow-progress-bar-bg before:absolute before:inset-0 before:bg-[#FF00004D] before:shadow-progress-bar-fill before:w-[var(--progress-width)]",
          {
            "shadow-progress-bar-bg-dark before:bg-[#FF00004D]":
              mode === "dark",
          },
        )}
      >
        <Typography
          level="caption-10"
          fontWeight="medium"
          className={cn("text-txt-primary z-10", {
            "text-white": mode === "dark",
          })}
        >
          Còn {total - progress}/{total}
        </Typography>
      </div>
    </div>
  );
}
