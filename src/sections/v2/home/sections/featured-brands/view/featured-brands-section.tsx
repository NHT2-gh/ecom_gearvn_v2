import { _featureBrands } from "@/_mocks";
import { Button } from "@/components/v2/ui/button";
import { APP_ROUTE } from "@/config/app_route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedBrandsSection() {
  return (
    <section
      aria-label="Featured Brands"
      className="border-corner-style max-w-full w-full py-6 px-5 bg-neutral-50"
      style={{
        ["--border-color" as string]: "var(--icon-primary)",
      }}
    >
      <div className="relative w-full flex gap-4 max-w-full overflow-x-scroll scrollbar-hidden md:justify-between md:grid md:grid-rows-2 md:grid-cols-[repeat(5,minmax(14.0625rem,1fr))] md:gap-y-4">
        {_featureBrands.map((brand) => (
          <Link
            aria-label={`Link to ${brand.brandName}'s products`}
            key={brand.brandName}
            href={APP_ROUTE.collection.byCate(brand.slug)}
            className="relative shrink-0 block h-fit w-[14.0625rem] lg:w-full"
          >
            <Button
              aria-label={`Button to ${brand.brandName}'s products`}
              className="h-[5rem] border-1 w-full"
              variant={"outline"}
              color="secondary"
            >
              <Image
                src={brand.logoUrl}
                alt={"Logo of " + brand.brandName}
                width={170}
                height={60}
              />
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
