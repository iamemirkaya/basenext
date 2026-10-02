import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechSection } from "@/components/sections/tech-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Reveal } from "@/components/motion/reveal";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="mt-20 pb-5">
          <TechSection />
          <AboutSection />
          <ProjectsSection />
        </div>
      </div>

      <footer className="mt-10 border-t border-border/50 py-10 text-center">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground/70">
            © {new Date().getFullYear()} Emir Kaya. Tüm hakları saklıdır.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/50">
            Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </Reveal>
      </footer>
    </>
  );
}
