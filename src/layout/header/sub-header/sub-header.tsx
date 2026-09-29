import React from "react";
import Link from "next/link";
import { getIcon } from "@/utils/icon-map";
import { _subHeaderContent } from "@/_mocks";
import { Typography } from "@/components/v2/ui/typography";
import { Button } from "@/components/v2/ui/button";

export default function SubHeader() {
  return (
    <div className="sub-header w-screen bg-primary h-subheader overflow-x-scroll border-b border-line-primary scrollbar-hidden">
      <ul className="flex items-center container px-0 max-w-fit h-full">
        {_subHeaderContent.map((item) => (
          <li
            key={item.key}
            className="flex-1 h-full relative last-of-type:after:hidden after:w-[1px] after:h-6 after:bg-line-primary after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
          >
            <Link
              href={item.link}
              className="inline-flex group items-center justify-center w-full h-full"
            >
              <div
                key={item.key}
                aria-label={item.title}
                className="w-full flex items-center justify-center gap-2 !px-2 !h-[35px] group"
              >
                {React.createElement(getIcon(item.icon), {
                  size: 16,
                  strokeWidth: 1.2,
                  className: "size-5 group-hover:text-icon-red-active",
                })}

                <Typography
                  level="body-12"
                  fontWeight="semibold"
                  className="group-hover:text-txt-button-red"
                >
                  {item.title}
                </Typography>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
