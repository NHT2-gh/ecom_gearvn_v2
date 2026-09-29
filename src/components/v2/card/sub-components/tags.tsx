import React from "react";
import { Badge } from "../../ui/bagde";
import { cn } from "@/lib/utils";

interface Props {
  tags: [string, string];
  mode?: "dark" | "light";
}

export default function Tags({ tags, mode }: Props) {
  return (
    <div className="flex items-center gap-2 order-0">
      <Badge
        variant={"flag"}
        color="fuchsia"
        className={cn("font-normal", mode === "dark" ? "text-white" : "")}
      >
        {tags[0]}
      </Badge>
      <Badge
        variant={"flag"}
        color="violet"
        className={cn("font-normal", mode === "dark" ? "text-white" : "")}
      >
        {tags[1]}
      </Badge>
    </div>
  );
}
