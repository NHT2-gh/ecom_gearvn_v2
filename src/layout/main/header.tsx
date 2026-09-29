"use client";
import React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { _megaMenu } from "@/_mocks";
import { ActionButtons } from "../header";
import { SVGGVNLogo } from "@/assets/svgs";
import { SubHeader } from "../header/sub-header";
import { BannerSlot } from "@/components/banner";
import { Button } from "@/components/v2/ui/button";
import useWindowSize from "@/hooks/use-window-size";
import { InputSearch } from "@/components/v2/ui/input";
import { Typography } from "@/components/v2/ui/typography";
import { MegaMenus, MiniMenu } from "../header/nav-content";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const windowSize = useWindowSize();

  const renderMenu = (breakpoint: "window" | "mobile") => {
    if (breakpoint === "window") {
      return (
        <div className="container h-screen">
          <MegaMenus className="mega-menu-container sticky w-full top-[calc(var(--height-header)+var(--height-subheader)+var(--height-hero-header)+var(--height-top-banner))] z-[102]" />
        </div>
      );
    }
    return <MiniMenu nav={_megaMenu} setOpen={setOpen} />;
  };

  return (
    <>
      <BannerSlot
        page={"all"}
        position={"top"}
        id="top-banner"
        className="w-full h-[2rem] [&_span]:align-middle [&_span]:text-[13px]/[138.462%] [&_span]:font-semibold"
      />
      <header className="w-[100vw] bg-primary sticky top-0 z-[1000] border-b border-t border-[#9897971A]">
        <div className="container relative h-full flex items-center gap-2 py-4 justify-between md:justify-normal xl:gap-6">
          <Link
            href="/"
            className="inline-block absolute scale-[0.8] left-1/2 translate-x-[-50%] top-1/2 -translate-y-1/2 shrink-0 w-fit md:relative md:top-0 md:left-0 md:translate-x-0 md:translate-y-0"
          >
            <SVGGVNLogo className=" [&>path]:fill-[var(--color-red-600)] w-[9rem] h-[2rem]" />
          </Link>

          <Button
            variant="solid"
            color="secondary"
            aria-controls="mega-menu"
            onClick={() => setOpen(!open)}
            className="size-11 md:size-[unset]"
          >
            <Menu size={18} />

            <Typography
              level="body-14"
              fontWeight="semibold"
              className="hidden md:block text-left text-txt-primary"
            >
              Danh mục
            </Typography>
          </Button>

          <div className="w-fit flex gap-2 items-center h-full md:w-full md:grow md:gap-6">
            {windowSize.width <= 748 ? (
              <Button
                variant="plain"
                color="primary"
                className="size-[2rem] md:!size-10 shrink-0 hover:underline-[unset]"
              >
                <Search
                  className="text-txt-primary md:text-current"
                  width={20}
                  strokeWidth={2}
                />
              </Button>
            ) : (
              <InputSearch />
            )}

            <ActionButtons />
          </div>
        </div>

        {open && (
          <>
            <div
              className="mega-menu-overlay absolute top-0 left-0 bg-transparent w-full h-[100vh] z-[101]"
              onClick={() =>
                windowSize.width > 1024 ? setOpen(false) : undefined
              }
            >
              {renderMenu(windowSize.width > 1024 ? "window" : "mobile")}
            </div>
          </>
        )}
      </header>
      <SubHeader />
    </>
  );
}
