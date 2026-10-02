"use client";

import { useEffect, useRef, useState } from "react";
import { m } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TechCard } from "@/components/sections/tech-card";
import { techStackData } from "@/types/tech-stack";
import { revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const trackVariants = staggerContainer(0.1);

const arrowButtonClass =
  "absolute z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border bg-card shadow-lg transition-colors hover:border-brand-500 hover:text-primary";

export function TechCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const firstItem = track.firstElementChild as HTMLElement | null;
      const itemWidth = firstItem?.clientWidth ?? 0;

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
      }
    }, 1500); 

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const itemWidth = firstItem?.clientWidth ?? 0;

    track.scrollBy({ left: direction * (itemWidth + 16), behavior: "smooth" });
  };

  return (
    <div 
      className="relative flex items-center px-6"
      onMouseEnter={() => setIsPaused(true)}  
      onMouseLeave={() => setIsPaused(false)} 
    >
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Previous technologies"
        className={cn(arrowButtonClass, "left-0")}
      >
        <ChevronLeft className="size-5" />
      </button>

      <m.div
        ref={trackRef}
        variants={trackVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        className="flex snap-x gap-4 overflow-x-auto scroll-smooth px-2 pb-5 pt-2 scrollbar-none"
      >
        {techStackData.map((item, index) => (
          <TechCard key={item.slug} item={item} index={index} />
        ))}
      </m.div>

      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next technologies"
        className={cn(arrowButtonClass, "right-0")}
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}