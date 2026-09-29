"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ReviewMedia } from "@/types/response/review.response";

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
                width={50}
                height={50}
                className="aspect-square rounded-sm object-cover object-center"
              />
              <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-40 rounded-sm transition-all flex items-center justify-center">
                <Play size={20} className="text-white fill-white" />
              </div>
            </>
          )}

          {item.type === "image" && (
            <Image
              width={50}
              height={50}
              src={item.url}
              alt={item.alt}
              sizes="50px"
              className="aspect-square rounded-sm object-cover"
            />
          )}
        </button>
      ))}
    </div>
  );
}
