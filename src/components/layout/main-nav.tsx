"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mainNav } from "@/config/navigation";

const navItemClass =
  "flex h-full cursor-pointer items-center px-4 py-5 text-base font-medium text-zinc-900 transition-colors hover:text-pink-500 focus-visible:text-pink-500 data-[popup-open]:text-pink-500 dark:text-zinc-200";

const dropdownItemClass =
  "block cursor-pointer px-4 py-3 text-right font-medium text-zinc-900 transition-colors hover:text-pink-500 focus-visible:text-pink-500 dark:text-zinc-200";

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="gap-0">
        {mainNav.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className={navItemClass}>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-b-md bg-white p-0 shadow-md dark:bg-zinc-800">
                  <ul className="w-max whitespace-nowrap">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <NavigationMenuLink
                          render={<Link href={child.href} />}
                          className={dropdownItemClass}
                        >
                          {child.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className={navItemClass}
              >
                {item.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}