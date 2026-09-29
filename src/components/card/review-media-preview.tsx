"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ReviewMedia } from "@/types/response/review.response";

interface ReviewMediaPreviewProps {
  media: ReviewMedia & { type: "image" | "video" };
  currentIndex: number;
  totalMedia: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

export default function ReviewMediaPreview({
  media,
  currentIndex,
  totalMedia,
  onPrevious,
  onNext,
  onClose,
}: ReviewMediaPreviewProps) {
  return (
    <div className="overflow-hidden">
      <div className="relative bg-black rounded-lg max-w-2xl w-full aspect-video mx-auto flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          aria-label="Close preview"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Media Display */}
        {media.type === "video" ? (
          <video src={media.url} controls autoPlay className="w-full h-full" />
        ) : (
          <Image
            src={media.url}
            alt={media.alt}
            width={800}
            height={600}
            className="w-full h-full object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          />
        )}

        {/* Navigation Buttons */}
        {totalMedia > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              aria-label="Previous media"
            >
              <ChevronLeft size={24} className="text-black" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              aria-label="Next media"
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </>
        )}

        {/* Media Counter - Always centered at bottom */}
        {totalMedia > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {totalMedia}
          </div>
        )}
      </div>
    </div>
  );
}
