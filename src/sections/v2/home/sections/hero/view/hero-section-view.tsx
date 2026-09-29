import React from "react";
import { BannerSlot } from "@/components/banner";
import { MegaMenus } from "@/layout/header/nav-content";
import { cn } from "@/lib/utils";

export default function HeroSectionView() {
  return (
    <section
      className={cn(
        "w-full pt-0 relative space-y-2 after:blur-3xl after:backdrop-blur-3xl after:inset-0 after:absolute  after:rounded-bl-full after:rounded-br-full after:z-[-1] after:content-[''] after:h-[30%] after:bg-red-gradient-effect",
      )}
    >
      <div className="uppercase text-center text-4xl md:text-[3.75rem]/[4.5rem] font-bold tracking-[-1.8px] text-txt-primary relative my-6 w-full ">
        Built for <span className="text-txt-class-red">Legends.</span>
      </div>
      <div className="w-full flex gap-2 relative">
        <MegaMenus
          className="w-[var(--width-nav)] shrink-0 row-span-3 bg-primary hidden mr-[0.0625rem] xl:block"
          classNameContent="absolute top-0 left-[calc(var(--width-nav)+0.4375rem)] w-[calc(100%-var(--width-nav)-0.5rem+2px)] h-[100%] z-10"
        />
        <BannerSlot
          page="homepage"
          position="top"
          id="hero-grid-banner"
          className="grow h-full grid-cols-1 gap-2 [&_#group-1-2]:!flex-row [&_#group-1-2]:order-3 [&_#group-1-2>a>img]:min-w-[13.8125rem] [&_#group-1-2]:overflow-x-scroll [&_#group-1-2]:scrollbar-hidden [&_#carousel-2-1-2]:order-2 [&_#carousel-2-1-0]:order-0 lg:[&_#group-1-2]:order-1 lg:[&_#group-1-2]:overflow-hidden lg:[&_#group-1-2>a>img]:max-h-[10.5rem] lg:[&_#group-1-2]:!gap-3 lg:[&_#group-1-2]:!flex-col lg:[&_#group-1-2]:col-start-3 lg:grid-cols-[repeat(3,1fr)] lg:grid-rows-[302px_210px] xl:grid-rows-[358px_210px] lg:gap-3"
        />
      </div>
    </section>
  );
}
