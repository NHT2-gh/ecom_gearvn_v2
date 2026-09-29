"use client";
import React from "react";
import { cn } from "@/lib/utils";
import styles from "@/styles/product-detail.module.css";
import { Typography } from "@/components/v2/ui/typography";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/v2/ui/button";

interface DescriptionProps {
  description: string;
}
export default function Description({ description }: DescriptionProps) {
  const mainContent = description.split("##");
  const [isReadMore, setIsReadMore] = React.useState(
    mainContent[0].length >= 6800,
  );

  return (
    <div id="description">
      {mainContent[0].trim() ? (
        <div
          className={cn(
            styles.postDetailContent,
            "post-detail-content after:[background-image:linear-gradient(180deg,#f3f4f600_0%,#f3f4f6_100%)] h-fit max-h-[61.6875rem] relative overflow-hidden transition-all",
            {
              "max-h-[unset] h-fit after:[background-image:unset]": !isReadMore,
            },
          )}
          dangerouslySetInnerHTML={{ __html: mainContent[0] }}
        />
      ) : (
        <Typography className="italic">
          Đang cập nhật thông tin sản phẩm
        </Typography>
      )}

      {mainContent[0].length >= 6800 && (
        <div className="flex justify-center relative z-10 mt-3">
          <Button
            variant={"outline"}
            color="secondary"
            className="focus:bg-[unset]"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            <Typography level="body-14" fontWeight="medium" className="">
              {!isReadMore ? "Thu gọn" : "Xem thêm"}
            </Typography>
            <ChevronDownIcon
              className="w-4 h-4"
              style={{
                transform: !isReadMore ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
        </div>
      )}
    </div>
  );
}
