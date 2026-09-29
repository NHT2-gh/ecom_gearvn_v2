import React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/v2/ui/avatar";
import { getInitials } from "@/utils/get-initials";

// ----------------------------------------------------------------------

interface Props {
  name: string;
  avatar?: string;
  className?: string;
}

export default function AvatarComponent({
  name,
  avatar,
  className,
}: Props): React.JSX.Element {
  return (
    <Avatar
      className={cn("flex h-10 w-10 cursor-pointer rounded-full", className)}
    >
      <AvatarImage
        alt="Avatar"
        className={cn("rounded-full object-cover")}
        src={avatar}
      />
      <AvatarFallback
        className={cn(
          "flex items-center justify-center rounded-full font-semibold text-[80%]",
        )}
        delayMs={600}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
