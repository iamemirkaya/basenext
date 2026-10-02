"use client";

import { m } from "motion/react";
import { fadeUp, revealViewport } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay }: RevealProps) {
  return (
    <m.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {children}
    </m.div>
  );
}
