import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section"; 
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TechSection } from "@/components/sections/tech-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        
        {/* Karşılama (Hero) Bölümü */}
        <HeroSection />
        <div className="mt-20 pb-5 text-zinc-900 dark:text-zinc-200">
          <TechSection />
          <AboutSection />
          <ProjectsSection />
        </div>
        
      </div>

      <footer className="mt-10 border-t border-zinc-800/50 py-10 text-center">
        <p className="text-sm font-medium text-zinc-500">
          © {new Date().getFullYear()} Emir Kaya. Tüm hakları saklıdır.
        </p>
        <p className="mt-1 text-xs text-zinc-600">
          Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </footer>
    </>
  );
}