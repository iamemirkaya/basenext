"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navItems } from "@/config/navigation";
import { itemVariant } from "@/components/layout/site-header";

export function MainNav() {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <motion.div key={item.label} variants={itemVariant}>
          <Link
            href={item.href}
            className="cursor-pointer text-xl font-medium text-zinc-900 transition-all duration-300 hover:text-emerald-600 hover:drop-shadow-[0_0_8px_rgba(5,150,105,0.6)] dark:text-zinc-200 dark:hover:text-emerald-400 dark:hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] lg:text-2xl"
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}