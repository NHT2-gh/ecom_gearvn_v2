import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { APP_ROUTE } from "@/config/app_route";
import { Typography } from "../../ui/typography";
import { ButtonsToggle } from "../../filter/type";
import { cn } from "@/lib/utils";

interface GroupLayoutProps {
  children: React.ReactNode;
  groupTitle: string;
  featureImage?: string;
  categorys?: ButtonsToggle;
}

export default function GroupLayout({
  groupTitle,
  featureImage,
  categorys,
  children,
}: GroupLayoutProps) {
  return (
    <div
      className="group-layout border-corner-style pl-0 pr-2 pt-6 pb-8 md:pr-6 md:pl-3.5 bg-neutral-50 border border-stroke-primary"
      style={{
        ["--border-color" as string]: "var(--icon-primary)",
      }}
    >
      <div className="relative w-full max-w-full h-fit flex gap-5 ">
        {featureImage && (
          <Image
            src={featureImage}
            alt={groupTitle}
            width={400}
            height={453}
            className=" hidden lg:block object-cover bg-center w-[25rem] h-auto shrink-0"
          />
        )}

        <div
          className={cn(
            "space-y-6 grow max-w-full lg:max-w-[calc(100%-26rem)]",
            {
              "lg:max-w-full": !featureImage,
            },
          )}
        >
          <Typography
            level="h4-24"
            fontWeight="semibold"
            className="group-title text-[1.25rem] px-2 text-txt-primary leading-10 text-center md:text-left md:-[1.5rem]"
          >
            {groupTitle}
          </Typography>
          {categorys && (
            <div className="flex flex-wrap gap-2 w-fit px-2 md:px-6">
              {categorys?.options.map((category) => (
                <Link
                  key={category.label as string}
                  href={APP_ROUTE.collection.byCate(category.value)}
                  aria-label={"Link to collection " + category.label}
                >
                  <Button
                    variant="outline"
                    color="secondary"
                    className="border-1"
                  >
                    {category.label}
                  </Button>
                </Link>
              ))}
            </div>
          )}
          <div className="max-w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
