"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { HomeIcon } from "@heroicons/react/24/outline";

interface BreadCrumbsItem {
  title?: string;
  href?: string;
}

interface BreadCrumbsProps {
  cateState?: "location" | "inline" | "slash";
  size?: "sm" | "md" | "lg";
  data: BreadCrumbsItem[];
}

const cateStateVariant: Record<
  "location" | "inline" | "slash",
  React.ReactNode
> = {
  location: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={7}
      viewBox="0 0 6 7"
      fill="none"
    >
      <path
        d="M5.94602 3.76705L0 6.79545V5.61364L4.56108 3.41619L4.52415 3.49006V3.3054L4.56108 3.37926L0 1.18182V0L5.94602 3.02841V3.76705Z"
        fill="var(--icon-tertiary)"
        style={{
          fillOpacity: 1,
        }}
      />
    </svg>
  ),
  inline: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={2}
      viewBox="0 0 7 2"
      fill="none"
    >
      <path
        d="M6.5 0V1.01562H0V0H6.5Z"
        fill="var(--icon-tertiary)"
        style={{
          fillOpacity: 1,
        }}
      />
    </svg>
  ),
  slash: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={5}
      height={12}
      viewBox="0 0 5 12"
      fill="none"
    >
      <path
        d="M4.04403 0L0.997159 11.3196H0L3.04688 0H4.04403Z"
        fill="var(--icon-tertiary)"
        style={{
          fillOpacity: 1,
        }}
      />
    </svg>
  ),
};

const sizeVariant: Record<"sm" | "md" | "lg", string> = {
  sm: "body-13",
  md: "body-14",
  lg: "body-15",
};

export default function BreadCrumbs({
  cateState = "slash",
  size = "md",
  data,
}: BreadCrumbsProps) {
  const breadcrumbsData = [{ title: "Trang chủ", href: "/" }, ...data];

  const renderLabel = (item: BreadCrumbsItem, index: number) => (
    <div
      className={cn(
        "flex items-center gap-1 w-fit border-b border-transparent transition-all duration-200",
        {
          "hover:border-txt-primary": item.href,
        },
      )}
    >
      {index === 0 ? (
        <HomeIcon
          width={16}
          height={16}
          strokeWidth={2}
          className={cn("inline transition-colors duration-200")}
        />
      ) : (
        <span className="px-1.5">{cateStateVariant[cateState]}</span>
      )}

      <Typography
        level={sizeVariant[size] as "body-13" | "body-14" | "body-15"}
        fontWeight="semibold"
        aria-current={index === breadcrumbsData.length - 1 ? "page" : undefined}
        className={cn(
          "inline text-ellipsis line-clamp-1 grow capitalize transition-colors duration-200",
          {
            "opacity-30": !item.href,
          },
        )}
      >
        {item.title}
      </Typography>
    </div>
  );

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1 my-5 overflow-hidden")}
    >
      <ol className="flex items-center gap-1">
        {breadcrumbsData.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className={cn(
              "flex items-center w-fit transition-all duration-200",
              {
                "cursor-pointer": item.href,
                "cursor-default": !item.href,
              },
            )}
          >
            {item.href ? (
              <Link
                href={item.href}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
              >
                {renderLabel(item, index)}
              </Link>
            ) : (
              renderLabel(item, index)
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
