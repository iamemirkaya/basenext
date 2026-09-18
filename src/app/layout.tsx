import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://canboz.com"),
  title: {
    default: "Can Boz | Yazılım Eğitimleri",
    template: "%s | Can Boz",
  },
  description:
    "C, C#, React, Angular ve algoritma eğitimleri. Sıfırdan ileri seviyeye uygulamalı yazılım eğitimleri.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="dark:bg-zinc-900">
            <SiteHeader />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}