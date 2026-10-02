"use client";

import { m, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { SiGithub, SiKaggle } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { fadeUp, introTiming } from "@/lib/motion";

const dockItems = [
  { href: "#", icon: HiHome, label: "Home" },
  { href: "https://github.com/iamemirkaya", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/iamemirkaya/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.kaggle.com/iamemirkaya", icon: SiKaggle, label: "Kaggle" },
  { href: "mailto:iamemirkaya@gmail.com", icon: MdEmail, label: "Email" }, 
];

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <m.div
      variants={fadeUp}
      custom={introTiming.dockDelay}
      initial="hidden"
      animate="show"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center rounded-full border bg-popover/80 px-4 py-3 shadow-2xl backdrop-blur-md"
    >
      <div 
        className="flex items-end gap-3"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {dockItems.map((item) => (
          <DockIcon key={item.label} mouseX={mouseX} href={item.href} label={item.label}>
            <item.icon className="size-full text-secondary-foreground transition-colors group-hover:text-primary" />
          </DockIcon>
        ))}
      </div>
    </m.div>
  );
}

function DockIcon({
  mouseX,
  href,
  label,
  children,
}: {
  mouseX: MotionValue<number>;
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [36, 44, 36]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const content = (
    <div className="group relative">
      <m.div
        ref={ref}
        style={{ width, height: width }}
        className="flex items-center justify-center rounded-full border bg-card p-2 shadow-sm transition-colors hover:border-brand-500/50 hover:bg-muted"
      >
        {children}
      </m.div>
      
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-muted px-2 py-1 text-xs font-medium opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
        {label}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : "_self"}>
        {content}
      </Link>
    );
  }

  return content;
}