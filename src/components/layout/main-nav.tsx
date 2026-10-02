"use client";

import Link from "next/link";
import { m } from "motion/react";
import { navItems } from "@/config/navigation";
import { fadeDown } from "@/lib/motion";

export function MainNav() {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <m.div key={item.label} variants={fadeDown}>
          <Link
            href={item.href}
            className="text-xl font-medium transition-all duration-300 hover:text-primary hover:drop-shadow-glow lg:text-2xl"
          >
            {item.label}
          </Link>
        </m.div>
      ))}
    </div>
  );
}
