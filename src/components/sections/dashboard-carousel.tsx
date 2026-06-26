"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import dashboardLight from "@/assets/dashboard-01-light.webp";
import sidebar10Light from "@/assets/sidebar-10-light.webp";
import sidebar15Light from "@/assets/sidebar-15-light.webp";

const slides: { src: StaticImageData; alt: string }[] = [
  { src: dashboardLight, alt: "Dashboard overview" },
  { src: sidebar10Light, alt: "Sidebar navigation view" },
  { src: sidebar15Light, alt: "Sidebar detail view" },
];

export default function DashboardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const goPrev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    if (activeIndex < slides.length - 1) goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 50 : -50,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -50 : 50,
      scale: 0.98,
    }),
  };

  return (
    <div className="mt-12 relative">
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
          className={cn(
            "hidden sm:flex shrink-0 items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] transition-all cursor-pointer",
            activeIndex === 0
              ? "opacity-30 pointer-events-none"
              : "hover:bg-[#f7f7f8] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)] active:scale-95",
          )}
        >
          <ChevronLeft className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-[#19171c]" />
        </button>

        <div className="relative flex-1 overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_40px_-12px_rgba(0,0,0,0.12)] mask-[linear-gradient(to_bottom,black,black_65%,transparent_100%)]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
            >
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                priority
                className="w-full select-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next slide"
          className={cn(
            "hidden sm:flex shrink-0 items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] transition-all cursor-pointer",
            activeIndex === slides.length - 1
              ? "opacity-30 pointer-events-none"
              : "hover:bg-[#f7f7f8] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.15)] active:scale-95",
          )}
        >
          <ChevronRight className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-[#19171c]" />
        </button>
      </div>

      <div className="flex sm:hidden justify-center gap-3 mt-4">
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-full bg-white border border-black/[0.08] shadow-sm transition-all cursor-pointer",
            activeIndex === 0
              ? "opacity-30 pointer-events-none"
              : "hover:bg-[#f7f7f8] active:scale-95",
          )}
        >
          <ChevronLeft className="w-4 h-4 text-[#19171c]" />
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === slides.length - 1}
          aria-label="Next slide"
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-full bg-white border border-black/[0.08] shadow-sm transition-all cursor-pointer",
            activeIndex === slides.length - 1
              ? "opacity-30 pointer-events-none"
              : "hover:bg-[#f7f7f8] active:scale-95",
          )}
        >
          <ChevronRight className="w-4 h-4 text-[#19171c]" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "rounded-full transition-all duration-300 cursor-pointer",
              i === activeIndex
                ? "w-5 h-1.5 bg-[#19171c]"
                : "w-1.5 h-1.5 bg-[#19171c]/20 hover:bg-[#19171c]/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
