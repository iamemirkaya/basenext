import type { Transition, Variants } from "motion/react";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const fadeUpTransition: Transition = { duration: 0.6, ease: easeOut };

export const introTiming = {
  headerStagger: 0.08,
  heroDelay: 0.5,
  heroStagger: 0.12,
  robotDelay: 1.1,
  dockDelay: 0.4,
} as const;

export const revealViewport = { once: true, amount: 0.2 } as const;

export function staggerContainer(staggerChildren: number, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, transform: "translateY(-20px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.4, ease: easeOut } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, transform: "translateY(24px)" },
  show: (delay?: number) => ({
    opacity: 1,
    transform: "translateY(0px)",
    transition: delay ? { ...fadeUpTransition, delay } : fadeUpTransition,
  }),
};
