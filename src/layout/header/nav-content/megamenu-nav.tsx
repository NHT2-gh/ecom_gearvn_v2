"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavContent } from "@/_mocks";
import { getIcon } from "@/utils/icon-map";
import { ChevronRight } from "lucide-react";
import { Typography } from "@/components/v2/ui/typography";
interface MegaMenuNavProps {
  nav: Pick<NavContent, "key" | "icon" | "title" | "link">[];
  handleSelectItem: (key: string | null) => void;
  activeItem: string | null;
}

export default function MegaMenuNav({
  nav,
  handleSelectItem,
  activeItem,
}: MegaMenuNavProps) {
  const handleSelect = (key: string | null) => {
    handleSelectItem(key);
  };
  return (
    <nav
      className="w-full bg-primary !h-fit rounded-sm border border-line-primary border-corner-style !p-1"
      style={{
        ["--border-color" as string]: "var(--icon-quaternary)",
      }}
    >
      <ul>
        {nav.map((navLink) => {
          const IconComponent = getIcon(navLink.icon);
          return (
            <li
              className={cn("w-full h-[2.25rem] relative", {
                "megamenu-item": activeItem === navLink.key,
              })}
              key={navLink.key}
              onMouseEnter={() => handleSelect(navLink.key)}
              onClick={() => handleSelect(navLink.key)}
              aria-label={`Cate ${navLink.title}`}
            >
              <Link
                className="inline-flex group items-center gap-1 w-full h-full px-3"
                href={navLink.link || "#"}
                aria-current={activeItem === navLink.key ? "page" : undefined}
              >
                <IconComponent
                  width={20}
                  height={20}
                  className="shrink-0 text-icon-primary group-hover:text-icon-red-active"
                />

                <Typography
                  level="body-12"
                  fontWeight="semibold"
                  className="group-hover:text-txt-button-red"
                >
                  {navLink.title}
                </Typography>

                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 ml-auto group-hover:stroke-icon-red-active"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
