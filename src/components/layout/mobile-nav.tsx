"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

const barClass = "block h-1 w-8 rounded-full bg-foreground transition-all";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="block" aria-hidden="true">
      <span className={cn(barClass, "relative top-0", open && "top-2 rotate-45")} />
      <span className={cn(barClass, "mt-1", open && "opacity-0")} />
      <span className={cn(barClass, "relative top-0 mt-1", open && "-top-2 -rotate-45")} />
    </span>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Menüyü aç" className="cursor-pointer">
        <HamburgerIcon open={false} />
      </SheetTrigger>

      <SheetContent
        side="top"
        showCloseButton={false}
        className="border-0 p-0"
      >
        <SheetTitle className="sr-only">Menü</SheetTitle>

        <div className="flex border-b bg-background">
          <Logo />
          <button
            type="button"
            onClick={close}
            aria-label="Menüyü kapat"
            className="my-auto ml-auto cursor-pointer pr-4"
          >
            <HamburgerIcon open />
          </button>
        </div>
        <nav className="flex flex-col pb-6 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className="block p-4 text-center text-lg font-medium text-secondary-foreground transition-colors hover:bg-background/50 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}