import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { FloatingDock } from "@/components/layout/floating-dock";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";

const brandFont = Space_Grotesk({
  variable: "--font-brand",
  subsets: ["latin", "latin-ext"],
});

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
    <html lang="tr" className={`${brandFont.variable} dark`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <MotionProvider>
            <main className="pb-24">
              <SiteHeader />
              {children}
            </main>
            <FloatingDock />
          </MotionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
