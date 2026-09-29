"use client";
import React, { useState, useEffect } from "react";

import { _user } from "@/_mocks";
import { useRouter } from "next/navigation";
import { APP_ROUTE } from "@/config/app_route";
import { Badge } from "@/components/v2/ui/bagde";
import { Button } from "@/components/v2/ui/button";
import useWindowSize from "@/hooks/use-window-size";
import { UserIcon } from "@heroicons/react/24/outline";
import { Typography } from "@/components/v2/ui/typography";

// ----------------------------------------------------------------------

export default function AccountPopover(): React.JSX.Element {
  const [subMenu, setSubMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { userInfo, authenticated } = _user;
  const windowSize = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBtnClick = (): void => {
    const searchParams = new URLSearchParams({
      returnTo: window.location.pathname,
    }).toString();

    router.replace(`${APP_ROUTE.account.login()}?${searchParams}`);
  };

  if (!mounted) {
    return <Button className="relative" disabled size="md" variant="solid" />;
  }

  if (!authenticated) {
    return (
      <Button
        aria-label="Login"
        className="h-[2.5rem] rounded-[0.5rem] px-4 py-[0.5625rem] text-sm/[156.22%] font-medium"
        onClick={handleBtnClick}
        size="md"
        variant="solid"
      >
        Đăng nhập
      </Button>
    );
  }

  return (
    <>
      <Button
        aria-label="Trigger Account Popover"
        onClick={() => setSubMenu(!subMenu)}
        role="button"
        tabIndex={0}
        variant={windowSize.width >= 748 ? "solid" : "plain"}
        color="primary"
        className="!size-[1.5rem] md:!size-10 lg:!size-[unset] w-fit shrink-0 hover:underline-[unset]"
      >
        {/* <Avatar
          avatar={userInfo?.avatar || ""}
          className="h-6 w-6"
          name={`${userInfo?.firstName} ${userInfo?.lastName}`}
        /> */}
        <Badge
          variant="mini"
          color="red"
          className="absolute top-0 -right-1 md:top-1 lg:left-5 md:!bg-invert"
        >
          <Typography
            fontWeight="medium"
            level="caption-11"
            className="text-txt-white"
          >
            1
          </Typography>
        </Badge>

        <UserIcon
          width={windowSize.width < 748 ? 20 : 24}
          height={windowSize.width < 748 ? 20 : 24}
          strokeWidth={2}
          className="text-txt-primary text-[1.25rem] md:text-[1.5rem] md:text-current"
        />

        <Typography
          level="body-14"
          fontWeight="semibold"
          className="hidden lg:block text-wrap"
        >
          {userInfo?.firstName} {userInfo?.lastName}
        </Typography>
      </Button>

      {subMenu && (
        <>
          {/* <AsideOverlay onClick={handleToggleSubMenu} visible={subMenu} /> */}
          {/* <PopoverContent
            userName={userInfo?.firstName + " " + userInfo?.lastName || ""}
            ref={ref}
          /> */}
        </>
      )}
    </>
  );
}
