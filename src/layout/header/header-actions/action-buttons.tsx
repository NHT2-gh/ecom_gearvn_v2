import React from "react";
import Link from "next/link";
import { getIcon } from "@/utils/icon-map";
import { Button } from "@/components/v2/ui/button";
import { _actionButtons, ActionButton } from "@/_mocks";
import { Typography } from "@/components/v2/ui/typography";
import { AccountPopover, ShoppingCart } from "..";

export default function ActionButtons() {
  const renderButton = (button: ActionButton) => {
    const IconComponent = getIcon(button.icon);

    return (
      <Link
        className="cursor-pointer hidden md:block"
        key={button.key}
        href={button.redirectUrl ? button.redirectUrl : "#"}
        aria-label={button.title}
      >
        <Button variant="solid" color="secondary" size="md" className="h-10">
          <IconComponent size={24} className="shrink-0 " />
          <Typography
            level="body-12"
            fontWeight="medium"
            className="whitespace-break-spaces text-left hidden lg:block"
          >
            {button.title}
          </Typography>
        </Button>
      </Link>
    );
  };

  return (
    <div className="flex w-fit items-center gap-3 justify-end">
      {_actionButtons.map((button) => {
        return renderButton(button);
      })}

      <AccountPopover />

      <ShoppingCart />
    </div>
  );
}
