import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "../v2/ui/typography";

interface BlockInfoProps {
  title: string;
  content: string | string[];
  icon?: React.ReactNode;
  color?: "blue" | "green" | "red";
}

const colorMap = {
  blue: {
    title: "text-blue-900",
    content: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  green: {
    title: "text-green-900",
    content: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  red: {
    title: "text-red-900",
    content: "text-red-800",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

export default function BlockInfo({
  title,
  icon,
  content,
  color = "blue",
}: BlockInfoProps) {
  return (
    <div
      className={cn(
        "bg-blue-50 border border-blue-200 rounded-lg p-4",
        colorMap[color].bg,
        colorMap[color].border,
      )}
    >
      <div className="flex gap-3 !text-left">
        <div className="flex-shrink-0">
          {icon && (
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        <div>
          <h5
            className={cn(
              "font-medium text-blue-900 mb-1",
              colorMap[color].title,
            )}
          >
            {title}
          </h5>
          {typeof content === "string" ? (
            <Typography
              className={cn("text-blue-800", colorMap[color].content)}
            >
              {content}
            </Typography>
          ) : (
            <ul className="list-disc list-inside">
              {content.map((item, index) => (
                <li
                  key={index}
                  className={`[&:marker]: ${colorMap[color].content}`}
                >
                  <Typography
                    className={cn("text-blue-800", colorMap[color].content)}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
