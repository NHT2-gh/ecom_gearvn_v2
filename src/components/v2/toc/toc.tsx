"use client";

// import lodash from 'lodash';
import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "../ui/typography";
import style from "@/styles/product-detail.module.css";

// ----------------------------------------------------------------------

export default function ToC(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    import("tocbot").then(({ default: tocbot }) => {
      tocbot.init({
        tocSelector: ".toc",
        contentSelector: ".post-detail-content",
        headingSelector: "h1, h2, h3",
        scrollSmooth: true,
        scrollSmoothOffset: -80,
        scrollSmoothDuration: 420,
        headingsOffset: 80,
        hasInnerContainers: true,
        activeListItemClass: "is-active-li",
        activeLinkClass: "is-active-link",
      });

      return () => {
        tocbot.destroy();
      };
    });
  }, []);

  return (
    <div className="bg-secondary flex h-auto w-full flex-col border border-stroke-primary py-2">
      <div className="flex w-full items-center justify-between px-4">
        <Typography className="text-[1rem]" fontWeight="semibold" level="h6-18">
          Mục Lục
        </Typography>

        <Button
          variant={"plain"}
          className={cn(
            "toc-button bg-toc-bg hover:bg-toc-bg minlg:hidden !h-12 transition-transform duration-500",
            {
              "rotate-180": open,
            },
          )}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ChevronDownIcon
            className="h-5 w-5"
            stroke="var(--text-primary)"
            strokeWidth={2}
          />
        </Button>
      </div>
      <div
        className={cn(
          "toc-scrollbar overflow-hidden transition-all duration-500 ease-in-out overflow-y-auto",
          {
            "!max-h-[200px] mt-0": open,
            "max-h-0 mt-0": !open,
          },
        )}
      >
        <div className={cn("toc text-txt-secondary px-4 pt-3", style.toc)} />
      </div>
    </div>
  );
}
