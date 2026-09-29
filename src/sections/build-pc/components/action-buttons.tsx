import { Button } from "@/components/v2/ui/button";
import React from "react";

interface ActionButtonsProps {
  onReset: () => void;
}

export default function ActionButtons({ onReset }: ActionButtonsProps) {
  return (
    <div className="flex items-center">
      <Button
        className="h-10 shadow-build-pc-buttons text-sm font-normal !rounded-sm text-[rgb(0,130,231)]"
        onClick={onReset}
      >
        Chọn lại từ đầu
      </Button>
    </div>
  );
}
