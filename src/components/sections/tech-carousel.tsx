"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TechCard } from "@/components/sections/tech-card";
import { techStackData } from "@/types/tech-stack";


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
      {/* Sol Ok Butonu */}
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Önceki teknolojiler"
        className="absolute left-0 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-200 shadow-lg transition-colors hover:border-emerald-500 hover:text-emerald-400"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div
        ref={trackRef}
        className="flex snap-x gap-4 overflow-x-auto scroll-smooth px-2 pb-5 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {techStackData.map((item, index) => (
          <TechCard key={item.slug} item={item} index={index} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Sonraki teknolojiler"
        className="absolute right-0 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-200 shadow-lg transition-colors hover:border-emerald-500 hover:text-emerald-400"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}