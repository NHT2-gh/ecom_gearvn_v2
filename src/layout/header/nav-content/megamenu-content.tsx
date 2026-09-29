import { NavItem } from "@/_mocks";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface MegaMenuContentProps {
  content: NavItem[] | null;
  className?: string;
}

export default function MegaMenuContent({
  content,
  className,
}: MegaMenuContentProps) {
  if (!content?.length) return null;

  return (
    <div className={cn("w-full h-full", className)}>
      <div className="w-full h-full max-h-[36.625rem] border-corner-style bg-primary p-8">
        <ul className="relative grid grid-cols-[repeat(auto-fill,minmax(181px,240px))] gap-y-4 h-full overflow-y-scroll scrollbar-hidden">
          {content.map((item) => {
            return (
              <li
                key={item.key}
                className="flex-1 text-accent-primary font-semibold"
              >
                <Link
                  href={item.link}
                  className="inline-block !text-[0.9375rem]/[146%] mb-2"
                >
                  {item.title}
                </Link>
                <ul className="space-y-2">
                  {item.items?.map((subItem) => {
                    return (
                      <li
                        key={subItem.key}
                        className="text-text-primary !text-[0.8125rem]/[146%] font-normal text-balance hover:text-accent-primary"
                      >
                        <Link href={subItem.link} className="inline-block">
                          {subItem.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
