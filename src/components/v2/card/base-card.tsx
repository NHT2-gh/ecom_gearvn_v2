import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/format";
import { Typography } from "../ui/typography";
import { getIcon, IconKey } from "@/utils/icon-map";
import { BasicProduct, Spec } from "@/types/v2/product";
import { TagType } from "./sub-components/tag-header-card";
import { ActionButtons, TagHeader } from "./sub-components";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { APP_ROUTE } from "@/config/app_route";

type BackgroundCard = "BG03" | "BG04" | "BG05" | "BG01" | "BG00";

interface BaseCardProps {
  product: BasicProduct;
  className?: string;
  custom?: {
    hearderTag?: {
      imageTag?: string;
      tagType?: TagType;
    };
    background?: BackgroundCard;
  };
  children?: React.ReactNode;
  actionButtons?: {
    onAddToCart: () => void;
    onViewDetail: () => void;
  };
}

export const backgroundMap = {
  light: ["BG03", "BG01", "BG00"],
  dark: ["BG04", "BG05"],
};
export default function Card({
  product,
  className,
  custom,
  children,
  actionButtons,
  ...props
}: BaseCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const colorStyle =
    custom?.background && backgroundMap["dark"].includes(custom?.background)
      ? "dark"
      : "light";

  const renderHeaderTag = (headerTag: {
    imageTag?: string;
    tagType?: TagType;
  }) => {
    if (headerTag.imageTag) {
      return (
        <Image
          className="object-cover overflow-hidden bg-center aspect-[94/32] w-[94px] h-[32px] rounded-md absolute z-10 translate-y-[-50%] translate-x-[calc(60%)]"
          src={headerTag.imageTag}
          alt={product.name}
          width={94}
          height={32}
        />
      );
    } else if (headerTag.tagType) {
      return <TagHeader type={headerTag.tagType} />;
    }
    return null;
  };
  const renderHeaderCard = (
    featureImage: string,
    highlightSpecs?: Spec[],
    background?: BackgroundCard,
  ) => {
    return (
      <Link href={APP_ROUTE.product.bySlug(product.slug)}>
        <div
          style={{
            background: background ? "var(--" + background + ")" : "none",
            ["--color-txt-primary" as string]:
              colorStyle === "dark" ? "white" : "var(--text-primary)",
          }}
          className={cn(
            "w-full h-[10rem] flex gap-1 items-center pt-2 pb-3 px-3",
            {
              "justify-center": highlightSpecs && highlightSpecs.length === 0,
            },
          )}
        >
          <Image
            unoptimized
            className="aspect-square object-contain bg-center transition-all duration-300 min-w-[56%] group-hover:scale-[1.07]"
            src={featureImage}
            alt={product.name}
            width={127}
            height={127}
            sizes="127px"
            aria-label={`Product image: ${product.name}`}
          />

          {highlightSpecs && highlightSpecs.length > 0 && (
            <div
              className="flex flex-col justify-start items-center gap-1.5 w-full"
              style={{
                color:
                  colorStyle === "dark"
                    ? "var(--color-white)"
                    : "var(--color-black)",
              }}
            >
              {highlightSpecs?.slice(0, 3).map((spec, idx) => {
                const IconComponent = getIcon(spec.key as IconKey);

                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-[0.125rem] items-center"
                  >
                    <span
                      className={cn(
                        "size-5 rounded-full flex items-center justify-center bg-primary",
                        {
                          "bg-transparent": colorStyle === "dark",
                        },
                      )}
                    >
                      {IconComponent ? (
                        <IconComponent colorstyle={colorStyle} />
                      ) : (
                        <CheckCircleIcon width={12} height={12} />
                      )}
                    </span>
                    <Typography
                      level="caption-9"
                      className={cn(
                        "line-clamp-2 text-txt-primary text-center whitespace-pre-line",
                      )}
                    >
                      {spec.value}
                    </Typography>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Link>
    );
  };

  const renderContentCard = (
    product: BasicProduct,
    additionalContent?: React.ReactNode,
  ) => {
    return (
      <div
        className="grow flex flex-col gap-2.5 pt-2 pb-5 px-3 justify-between"
        style={{
          ["--color-txt-primary" as string]:
            colorStyle === "dark" ? "white" : "var(--text-primary)",
          ["--color-txt-button-red" as string]:
            colorStyle === "dark"
              ? "var(--color-red-400)"
              : "var(--text-button-red)",
          ["--color-txt-secondary" as string]:
            colorStyle === "dark" ? "#D4D4D4" : "var(--text-secondary)",
        }}
      >
        <Link href={APP_ROUTE.product.bySlug(product.slug)}>
          <Typography
            level="body-14"
            className={cn(
              "-tracking-[0.28px] font-semibold text-txt-primary order-1 line-clamp-2",
            )}
          >
            {product.name}
          </Typography>
        </Link>
        <div className="text-left order-2">
          {product.price.discount && (
            <Typography
              level="body-12"
              className={cn("text-txt-secondary line-through")}
            >
              {formatPrice(product.price.original)}
            </Typography>
          )}
          <Typography
            level="h7-16"
            className={cn("font-semibold text-txt-primary")}
          >
            {formatPrice(product.price.discount || product.price.original)}
          </Typography>
          {product.price.discount && (
            <Typography
              level="body-12"
              className={cn("text-txt-button-red -tracking-[0.28px]")}
            >
              Giảm{" "}
              {formatPrice(product.price.original - product.price.discount)}
            </Typography>
          )}
        </div>

        {product.rating && (
          <div className="flex items-center gap-2 order-3">
            <Typography
              level="body-12"
              fontWeight="bold"
              className="text-icon-yellow inline-flex items-center gap-[0.125rem]"
            >
              {product.rating.avg_rating}
              <StarIcon
                className="size-[0.875rem]"
                fill="var(--icon-yellow)"
                stroke="var(--icon-yellow)"
              />
            </Typography>

            <Typography level="body-12" className="text-txt-secondary">
              {"("} {product.rating.total_rating} đánh giá {")"}
            </Typography>
          </div>
        )}

        {additionalContent}
      </div>
    );
  };
  return (
    <article
      {...props}
      className={cn(
        "group bg-primary relative w-[13.75rem] max-w-full backdrop-blur-lg border border-stroke-secondary hover:border-stroke-tertiary",
        className,
        {
          "bg-primary border-stroke-secondary": custom?.background === "BG03",
          "bg-[rgb(90,112,164)] border-none": custom?.background === "BG04",
          "bg-[rgba(23,23,23,0.60)] border-[#404040]":
            custom?.background === "BG05",
          "bg-secondary border-stroke-secondary": custom?.background === "BG00",
        },
        { "pb-[2.25rem]": actionButtons },
      )}
    >
      <div className="min-h-full flex flex-col">
        {custom?.hearderTag && renderHeaderTag(custom?.hearderTag)}

        {renderHeaderCard(
          product.featureImage || "/images/gearvn-thumb.png",
          product.highlightSpecs,
          custom?.background,
        )}

        {renderContentCard(product, children)}
      </div>

      {actionButtons && (
        <ActionButtons
          onAddToCart={actionButtons.onAddToCart}
          onViewDetail={actionButtons.onViewDetail}
        />
      )}
    </article>
  );
}
