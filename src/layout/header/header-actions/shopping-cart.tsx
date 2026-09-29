import { Badge } from "@/components/v2/ui/bagde";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { APP_ROUTE } from "@/config/app_route";
import useWindowSize from "@/hooks/use-window-size";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ShoppingCart() {
  const windowSize = useWindowSize();

  return (
    <Link href={APP_ROUTE.checkout()}>
      <Button
        color="primary"
        size="md"
        className="!size-[1.5rem] md:!size-10 w-fit shrink-0 hover:underline-[unset]"
        variant={windowSize.width >= 748 ? "solid" : "plain"}
      >
        {/* TODO: Add cart count */}
        <Badge
          variant="mini"
          color="red"
          className="absolute top-0 -right-2 md:top-1 md:right-1 md:!bg-invert"
        >
          <Typography
            fontWeight="medium"
            level="caption-11"
            className="text-txt-white"
          >
            10
          </Typography>
        </Badge>
        <ShoppingCartIcon
          width={windowSize.width < 748 ? 20 : 24}
          height={windowSize.width < 748 ? 20 : 24}
          className="text-txt-primary text-[1.25rem] md:text-[1.5rem] md:text-current"
        />
      </Button>
    </Link>
  );
}
