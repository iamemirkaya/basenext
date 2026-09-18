"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

const mobileItemClass =
  "block cursor-pointer p-4 text-center font-medium text-zinc-200 transition-colors hover:text-pink-300";

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
        className="border-0 bg-gradient-to-r from-rose-500 to-pink-500 p-0"
      >
        <SheetTitle className="sr-only">Menü</SheetTitle>

        <div className="flex bg-gradient-to-r from-violet-500 to-pink-500">
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

        <nav className="pb-2">
          {mainNav.map((item) =>
            item.children ? (
              <Accordion key={item.title}>
                <AccordionItem value={item.title} className="border-0">
                  <AccordionTrigger
                    className={cn(
                      mobileItemClass,
                      "justify-center gap-2 hover:no-underline",
                    )}
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={close}
                        className={mobileItemClass}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                onClick={close}
                className={mobileItemClass}
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}