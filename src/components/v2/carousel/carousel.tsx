"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Fade from "embla-carousel-fade";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  showDots?: boolean;
  fade?: boolean;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
  slideInViews: number[];
  onDotButtonClick: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  showDots = false,
  fade = false,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const fadePlugin = React.useMemo(() => (fade ? [Fade()] : []), [fade]);
  const allPlugins = React.useMemo(
    () => [...fadePlugin, ...(plugins || [])],
    [fadePlugin, plugins],
  );

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      ...(fade && { align: "center", containScroll: false }),
    },
    allPlugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [slideInViews, setSlideInViews] = React.useState<Set<number>>(
    new Set(),
  );

  React.useEffect(() => {
    if (!api) return;
    setSlideInViews(new Set(api.slidesInView()));
  }, [api]);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onInit = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api],
  );

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
      api?.off("reInit", onSelect);
      api?.off("reInit", onInit);
    };
  }, [api, onInit, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
        showDots,
        slideInViews: [...slideInViews],
        fade,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn(className, {})}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn("scrollbar-hidden overflow-hidden max-h-full")}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "gap-2" : "gap-2 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 basis-full max-w-fit overflow-visible",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,

  ...props
}: React.ComponentProps<"button">) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      data-slot="carousel-previous"
      className={cn(
        "hidden md:flex absolute justify-center items-center text-icon-primary index-10 size-8 bg-secondary disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-30 cursor-pointer",
        orientation === "horizontal"
          ? "top-1/2 left-2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft size={20} />
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      data-slot="carousel-next"
      className={cn(
        "hidden md:flex absolute justify-center items-center  text-icon-primary index-10 size-8 bg-secondary disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-30 cursor-pointer",
        orientation === "horizontal"
          ? "top-1/2 right-2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight size={20} />
      <span className="sr-only">Next slide</span>
    </button>
  );
}

function CarouselDots({
  className,
  classNameDot,
  colorDotActive = "bg-icon-tertiary",
  ...props
}: React.ComponentProps<"div"> & {
  classNameDot?: string;
  colorDotActive?: string;
}) {
  const { scrollSnaps, selectedIndex, onDotButtonClick } = useCarousel();

  return (
    <div
      className={cn(
        "absolute w-full bottom-3 flex items-center justify-center gap-2",
        className,
      )}
      data-slot="carousel-dots"
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "w-4 h-1.5 rounded-full transition-colors cursor-pointer",
            index === selectedIndex ? colorDotActive : "bg-icon-quinary w-1.5",
            classNameDot,
          )}
          onClick={() => onDotButtonClick(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};
