"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ReviewMedia } from "@/types/response/review.response";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

interface ReviewMediaThumbnailsProps {
  media: (ReviewMedia & { type: "image" | "video" })[];
  onSelect: (index: number) => void;
}

export default function ReviewMediaThumbnails({
  media,
  onSelect,
}: ReviewMediaThumbnailsProps) {
  if (media.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      {media.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className="relative group cursor-pointer"
          aria-label={item.type === "video" ? "Play video" : "View image"}
        >
          {item.type === "video" && (
            <>
              <video
                src={item.url}
                width={80}
                height={80}
                className="aspect-square object-cover object-center"
              />

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(94, 94, 94, 0.5) 29.83%, rgba(66, 66, 66, 0.4) 79.7%, rgb(66, 66, 66))",
                }}
              >
                <VideoCameraIcon
                  fill="var(--icon-white)"
                  width={16}
                  height={16}
                  className="absolute bottom-1 left-1 text-icon-white"
                />
              </div>
            </>
          )}

          {item.type === "image" && (
            <Image
              width={80}
              height={80}
              src={item.url}
              alt={item.alt}
              sizes="80px"
              className="aspect-square object-cover"
            />
          )}
        </button>
      ))}
    </div>
  );
}
