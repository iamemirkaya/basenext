"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      className="cursor-pointer rounded-lg p-2 text-zinc-900 transition-colors hover:text-pink-500 focus-visible:text-pink-500 dark:text-zinc-200"
    >
      <span className="flex size-8 items-center justify-center">
        {mounted ? (
          isDark ? (
            <Moon className="size-6" />
          ) : (
            <Sun className="size-6" />
          )
        ) : null}
      </span>
    </button>
  );
}
