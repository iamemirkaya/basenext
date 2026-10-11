"use client";

import { useEffect, useRef, useState } from "react";
import { m } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TechCard } from "@/components/sections/tech-card";
import { techStackData } from "@/types/tech-stack";
import { revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const trackVariants = staggerContainer(0.1);

const AUTOPLAY_INTERVAL = 1500;
const END_TOLERANCE = 10;

const arrowButtonClass =
  "absolute z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border bg-card shadow-lg transition-colors hover:border-brand-500 hover:text-primary";

/** Card width plus the track's CSS gap, measured from layout so it follows any class change. */
function getScrollStep(track: HTMLElement) {
  const first = track.children[0] as HTMLElement | undefined;
  const second = track.children[1] as HTMLElement | undefined;
  if (!first) return 0;
  return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
}

export function TechCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - END_TOLERANCE) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: getScrollStep(track), behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: direction * getScrollStep(track), behavior: "smooth" });
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