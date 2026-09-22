"use client";

import { motion, Variants } from "motion/react";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export const itemVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function SiteHeader() {
  return (
    <motion.header
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="bg-zinc-900 text-zinc-200"
    >
      <nav className="relative flex px-4">
        <motion.div variants={itemVariant} className="my-auto">
          <Logo />
        </motion.div>

        <motion.div variants={itemVariant} className="my-auto ml-auto block md:hidden pr-4">
          <MobileNav />
        </motion.div>

        <div className="mx-auto hidden items-center md:flex pr-4">
          <MainNav />
        </div>
      </nav>
    </motion.header>
  );
}