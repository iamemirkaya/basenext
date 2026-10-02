"use client";

import { m } from "motion/react";
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { fadeDown, introTiming, staggerContainer } from "@/lib/motion";

const headerVariants = staggerContainer(introTiming.headerStagger);

export function SiteHeader() {
  return (
    <m.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <nav className="relative flex px-4">
        <m.div variants={fadeDown} className="my-auto">
          <Logo />
        </m.div>

        <m.div variants={fadeDown} className="my-auto ml-auto block md:hidden pr-4">
          <MobileNav />
        </m.div>

        <div className="mx-auto hidden items-center md:flex pr-4">
          <MainNav />
        </div>
      </nav>
    </m.header>
  );
}
