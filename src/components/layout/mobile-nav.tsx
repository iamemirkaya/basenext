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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="block" aria-hidden="true">
      <span
        className={cn(
          "relative top-0 block h-1 w-8 rounded-full bg-zinc-200 transition-all",
          open && "top-2 rotate-45",
        )}
      />
      <span
        className={cn(
          "mt-1 block h-1 w-8 rounded-full bg-zinc-200 opacity-100 transition-all",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "relative top-0 mt-1 block h-1 w-8 rounded-full bg-zinc-200 transition-all",
          open && "-top-2 -rotate-45",
        )}
      />
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
        className="border-0 bg-zinc-950 p-0"
      >
        <SheetTitle className="sr-only">Menü</SheetTitle>

        <div className="flex bg-zinc-900 border-b border-zinc-800">
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
              className="block cursor-pointer p-4 text-center text-lg font-medium text-zinc-300 transition-colors hover:text-emerald-400 hover:bg-zinc-900/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}