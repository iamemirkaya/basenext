
import { Logo } from "@/components/layout/logo";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { HeaderMotion } from "./header-motion";

export function SiteHeader() {
  return (
    <HeaderMotion>
      <header className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200">
        <nav className="relative flex">
          <Logo />

          <div className="my-auto ml-auto block md:hidden">
            <MobileNav />
          </div>

          <div className="mx-auto hidden items-center md:flex">
            <MainNav />
          </div>

          <div className="my-auto pr-4 pl-2">
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </HeaderMotion>
  );
}