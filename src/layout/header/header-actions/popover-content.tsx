import { _accountPopoverContent } from "@/_mocks";
import SVGSayHi from "@/assets/svgs/svg-say-hi";
import { APP_ROUTE } from "@/config/app_route";
import { getIcon } from "@/utils/icon-map";
import Link from "next/link";
import React from "react";

interface PopoverContentProps {
  userName: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function PopoverContent({ userName, ref }: PopoverContentProps) {
  return (
    <div
      ref={ref}
      className="absolute top-[var(--header-height)] right-0  w-[20rem] h-fit bg-white shadow-popover rounded-sm"
    >
      <span className="size-0 bg-transparent absolute -top-1 right-[20%] border-t-16 border-r-16 border-t-transparent border-r-primary rotate-225" />
      <ol className="w-full [&_li]:px-4 [&_li]:py-2.5 [&_li]:border-b [&_li]:border-stroke [&_li]:text-text-primary [&_li:first-child]:py-4 [&_li:last-child]:border-none [&_li_a]:flex [&_li_a]:items-center [&_li_a]:gap-3">
        <li className="font-semibold">
          <Link
            className="inline-block h-full w-full"
            href={APP_ROUTE.account.index()}
          >
            <SVGSayHi />
            Xin chào, {userName}
          </Link>
        </li>
        {_accountPopoverContent.map((button) => {
          const IconComponent = getIcon(button.icon);
          return (
            <li key={button.key}>
              <Link
                className="inline-block h-full w-full"
                href={APP_ROUTE.account.index()}
              >
                <IconComponent size={16} strokeWidth={2} className="shrink-0" />
                {button.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
