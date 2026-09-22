import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { FloatingDock } from "@/components/layout/floating-dock";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://emirkaya.dev"), 
  title: {
    default: "Emir Kaya | Full Stack & Cloud Developer",
    template: "%s | Emir Kaya",
  },
  description:
    "Full Stack Developer, Cloud & DevOps süreçleri, 3D Web geliştirme ve mikroservis mimarileri üzerine kişisel portfolyo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className="antialiased dark:bg-zinc-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark" 
          disableTransitionOnChange
        >
          <main className="pb-24"> 
            <SiteHeader />
            {children}
          </main>
          <FloatingDock />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}