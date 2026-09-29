"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/v2/carousel";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { ProductMedia } from "@/types/product";
import styles from "@/styles/product-detail.module.css";
import { cn } from "@/lib/utils";
import {
  CubeIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@/components/v2/ui/typography";

interface ProductGalleryProps {
  media: ProductMedia[];
}

export default function ProductGallery({ media }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [mainCarouselApi, setMainCarouselApi] = React.useState<CarouselApi>();
  const [thumbCarouselApi, setThumbCarouselApi] = React.useState<CarouselApi>();
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
    mainCarouselApi?.scrollTo(index);
  };

  // Handle main image click to open lightbox
  const handleMainImageClick = () => {
    setLightboxOpen(true);
  };

  // Prepare slides for lightbox
  const lightboxSlides = React.useMemo(
    () =>
      media.map((image) => ({
        src: image.src,
        alt: "Product Image",
      })),
    [media],
  );

  // Update current image when main carousel changes
  useEffect(() => {
    if (!mainCarouselApi) return;

    const onSelect = () => {
      const selectedIndex = mainCarouselApi.selectedScrollSnap();
      setCurrentImage(selectedIndex);
      // Scroll thumbnail carousel to keep active thumbnail in view
      thumbCarouselApi?.scrollTo(selectedIndex);
    };

    mainCarouselApi.on("select", onSelect);
    return () => {
      mainCarouselApi.off("select", onSelect);
    };
  }, [mainCarouselApi, thumbCarouselApi]);

  return (
    <>
      {/* Main image carousel */}
      <Carousel
        opts={{
          loop: true,
          align: "center",
          startIndex: 0,
        }}
        className="relative max-w-full"
        setApi={setMainCarouselApi}
      >
        <CarouselContent className="w-full aspect-[351/240] h-auto md:aspect-[708/372] lg:aspect-[556/372] xl:aspect-[660/372] gap-2">
          <CarouselItem
            key={"video"}
            className="min-w-full flex items-center justify-center border border-line-tertiary"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TsdU8iAsCHA"
              title="Review Lenovo LOQ 15 2025 (AMD) Mạnh vừa đủ nhưng SIÊU MÁT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </CarouselItem>
          <CarouselItem
            key={"favorite"}
            className="min-w-full flex items-center justify-center border border-line-tertiary"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TsdU8iAsCHA?mute=1"
              title="Review Lenovo LOQ 15 2025 (AMD) Mạnh vừa đủ nhưng SIÊU MÁT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </CarouselItem>
          <CarouselItem
            key={"unboxing"}
            className="min-w-full flex items-center justify-center border border-line-tertiary"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TsdU8iAsCHA?mute=1"
              title="Review Lenovo LOQ 15 2025 (AMD) Mạnh vừa đủ nhưng SIÊU MÁT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </CarouselItem>

          {media.map((image, index) => (
            <CarouselItem
              key={index}
              className="min-w-full flex items-center justify-center border border-line-tertiary"
            >
              <button
                onClick={handleMainImageClick}
                className="cursor-zoom-in h-full transition-transform"
              >
                <>
                  <Image
                    src={image.src}
                    width={372}
                    height={372}
                    alt="Product Image"
                    sizes="372px"
                    className="h-full w-auto mx-auto aspect-square object-contain rounded-lg"
                  />
                </>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-icon-white bg-[#090D1466] size-10 left-[1.125rem] shadow-none" />
        <CarouselNext className="text-icon-white bg-[#090D1466] size-10 right-[1.125rem] shadow-none" />
      </Carousel>

      {/* Thumbnail carousel */}
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            startIndex: 0,
            slidesToScroll: 3,
          }}
          className="relative"
          setApi={setThumbCarouselApi}
        >
          <CarouselContent className="gap-2">
            <CarouselItem key={"video"} className="size-[4rem] shrink-0">
              <button
                onClick={() => handleThumbnailClick(0)}
                className={cn(
                  "flex flex-col gap-1 items-center justify-center h-full aspect-square border border-stroke-secondary transition-all duration-200 ",
                  {
                    "border-stroke-invert": currentImage === 0,
                  },
                )}
              >
                <PlayCircleIcon
                  width={24}
                  height={24}
                  className="text-icon-primary"
                />
                <Typography
                  level="caption-10"
                  fontWeight="semibold"
                  className="text-txt-primary"
                >
                  Video
                </Typography>
              </button>
            </CarouselItem>
            <CarouselItem key={"favorite"} className="size-[4rem] shrink-0">
              <button
                onClick={() => handleThumbnailClick(1)}
                className={cn(
                  "flex flex-col gap-1 items-center justify-center h-full aspect-square border border-stroke-secondary transition-all duration-200 ",
                  {
                    "border-stroke-invert": currentImage === 1,
                  },
                )}
              >
                <StarIcon
                  width={24}
                  height={24}
                  className="text-icon-primary"
                />
                <Typography
                  level="caption-10"
                  fontWeight="semibold"
                  className="text-txt-primary"
                >
                  Nổi bật
                </Typography>
              </button>
            </CarouselItem>
            <CarouselItem key={"unboxing"} className="size-[4rem] shrink-0">
              <button
                onClick={() => handleThumbnailClick(2)}
                className={cn(
                  "flex flex-col gap-1 items-center justify-center h-full aspect-square border border-stroke-secondary transition-all duration-200 ",
                  {
                    "border-stroke-invert": currentImage === 2,
                  },
                )}
              >
                <CubeIcon
                  width={24}
                  height={24}
                  className="text-icon-primary"
                />
                <Typography
                  level="caption-10"
                  fontWeight="semibold"
                  className="text-txt-primary"
                >
                  Đập hộp
                </Typography>
              </button>
            </CarouselItem>
            {media.map((image, index) => (
              <CarouselItem
                key={image.position}
                className="size-[4rem] shrink-0"
              >
                <button
                  onClick={() => handleThumbnailClick(index + 3)}
                  className={cn(
                    "h-full aspect-square flex items-center justify-center border border-stroke-secondary transition-all duration-200 ",
                    { "border-stroke-invert": currentImage === index + 3 },
                  )}
                >
                  <Image
                    unoptimized
                    src={image.src}
                    width={48}
                    height={48}
                    alt={`Product Image ${index + 1}`}
                    sizes="4rem"
                    className="size-[4rem] object-contain object-center rounded-sm"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-icon-primary -left-3 bg-primary size-6 rounded-full shadow-control-button-carousel" />
          <CarouselNext className="text-icon-primary -right-3 bg-primary size-6 rounded-full  shadow-control-button-carousel" />
        </Carousel>
      </div>

      {/* Lightbox */}
      <Lightbox
        className={styles.lightbox}
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentImage}
        plugins={[Thumbnails]}
        carousel={{
          finite: false,
          preload: 2,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
      />
    </>
  );
}
