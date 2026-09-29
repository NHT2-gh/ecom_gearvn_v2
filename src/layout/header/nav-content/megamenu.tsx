"use client";
import React, { useEffect } from "react";
import { _megaMenu, NavItem } from "@/_mocks/";
import { cn } from "@/lib/utils";
import { MegaMenuContent, MegaMenuNav } from ".";

interface NavContentProps {
  className?: string;
  classNameContent?: string;
}

export default function MegaMenus({
  className,
  classNameContent,
}: NavContentProps) {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );
  const [activeContent, setActiveContent] = React.useState<NavItem[] | null>(
    null
  );
  useEffect(() => {
    setActiveContent(
      _megaMenu.find((item) => item.key === activeCategory)?.items || null
    );
  }, [activeCategory]);

  return (
    <div
      id="mega-menu"
      className={cn(
        "mega-menu-container h-fit px-0 grid grid-cols-[var(--width-nav)_1fr] gap-2 rounded-sm",
        className
      )}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <MegaMenuNav
        nav={_megaMenu}
        handleSelectItem={(item: string | null) => {
          setActiveCategory(item);
        }}
        activeItem={activeCategory}
      />
      <MegaMenuContent
        content={activeContent || []}
        className={classNameContent}
      />
    </div>
  );
}
