"use client";
import { ReviewRatingStar } from "@/components/v2/rating";
import { Typography } from "@/components/v2/ui/typography";
import { Review, ReviewMedia } from "@/types/v2/review";
import React, { useState } from "react";
import ReviewMediaThumbnails from "./review-media-thumbnails";
import ReviewMediaPreview from "./review-media-preview";
import { Avatar } from "@/components/v2/avatar";
import ReactTimeAgo from "react-time-ago";

import TimeAgo from "javascript-time-ago";

import vi from "javascript-time-ago/locale/vi";
import eu from "javascript-time-ago/locale/eu";
import { Badge } from "@/components/v2/ui/bagde";
import { UserCircleIcon } from "@heroicons/react/24/outline";

TimeAgo.addDefaultLocale(vi);
TimeAgo.addLocale(eu);

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
    null
  );

  // Combine images and videos into a single media array
  const allMedia: (ReviewMedia & { type: "image" | "video" })[] = [
    ...(review.videos?.map((vid) => ({ ...vid, type: "video" as const })) ||
      []),
    ...(review.images?.map((img) => ({ ...img, type: "image" as const })) ||
      []),
  ];

  const selectedMedia =
    selectedMediaIndex !== null ? allMedia[selectedMediaIndex] : null;

  const handlePrevious = () => {
    setSelectedMediaIndex(
      selectedMediaIndex === 0 ? allMedia.length - 1 : selectedMediaIndex! - 1
    );
  };

  const handleNext = () => {
    setSelectedMediaIndex(
      selectedMediaIndex === allMedia.length - 1 ? 0 : selectedMediaIndex! + 1
    );
  };

  return (
    <div role="listitem" className="space-y-4 py-4">
      <div className="w-full flex gap-4">
        <Avatar
          name={review.author.name}
          className="bg-red-subtle4 border-none text-txt-primary"
        />
        <div className="grow space-y-2">
          <div className="flex items-center flex-wrap gap-2 text-txt-secondary">
            <Typography
              level="body-14"
              fontWeight="semibold"
              className="text-txt-primary"
            >
              {review.author.name}
            </Typography>
            {"•"}
            <ReactTimeAgo
              className="text-txt-secondary"
              locale="vi-VN"
              date={new Date(review.created_at)}
            />
          </div>

          <ReviewRatingStar rating={review.rating} />

          <Typography level="body-14" className="whitespace-pre-line">
            {review.content ||
              "Mình mua để setup góc chơi game tại nhà, kích thước 23.8 inch vừa đủ, tần số quét cao, Shop có hỗ trợ lắp ráp và giao hàng không ạ?"}
          </Typography>

          {allMedia.length > 0 && (
            <ReviewMediaThumbnails
              media={allMedia}
              onSelect={setSelectedMediaIndex}
            />
          )}

          {/* {review.replies && review.replies.length > 0 && (
            <div className="space-y-2">
              {review.replies.map((reply) => (
                <ReplyItem key={reply.id} {...reply} />
              ))}
            </div>
          )} */}

          <div className="mt-3">
            <ReplyItem
              id={"1"}
              rating={0}
              sku={""}
              content={
                "Chào anh Hiếu,\n\nDạ sản phẩm Màn hình LG 24GS65F-B 24 IPS 180Hz HDR10 bên em có hỗ trợ giao hàng miễn phí lắp lắp đặt cơ bản trong 20km ạ. Bên em xin phép liên hệ để tư vấn chi tiết hơn. Nếu cần thêm thông tin khác anh/chị gọi tổng đài miễn phí 18006601 hoặc có thể chat qua Zalo tại đây"
              }
              created_at={new Date()}
              author={{
                name: "Tạ Văn Huy",
                avatar: "/images/logo_icon.webp",
              }}
            />
          </div>
        </div>
      </div>

      {selectedMedia && (
        <ReviewMediaPreview
          media={selectedMedia}
          currentIndex={selectedMediaIndex!}
          totalMedia={allMedia.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={() => setSelectedMediaIndex(null)}
        />
      )}
    </div>
  );
}

const ReplyItem = (reply: Review) => {
  return (
    <div className="w-full bg-neutral-50 flex gap-3 p-3">
      <Avatar
        avatar={reply.author.avatar}
        className="size-10 bg-tertiary p-2"
        name="Gearvn"
      />
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-txt-secondary">
          <Typography
            level="body-14"
            fontWeight="semibold"
            className="text-txt-primary"
          >
            {reply.author.name}
          </Typography>

          <Badge variant={"combo"} color="yellow">
            <UserCircleIcon className="size-[1rem]" />
            Quản trị viên
          </Badge>

          {"•"}
          <ReactTimeAgo
            className="text-txt-secondary"
            locale="vi-VN"
            date={new Date()}
          />
        </div>
        <Typography
          level="body-14"
          className="whitespace-pre-line text-txt-primary max-w-[48.125rem]"
        >
          {reply.content}
        </Typography>
      </div>
    </div>
  );
};
