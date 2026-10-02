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
  metadataBase: new URL("https://iamemirkaya.vercel.app"),
  title: "Emir Kaya",
  description:
    "Personal portfolio of Emir Kaya, a Full Stack Developer working on Cloud & DevOps, 3D web development, and microservice architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${brandFont.variable} dark`} suppressHydrationWarning>
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
