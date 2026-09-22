import { TechCarousel } from "@/components/sections/tech-carousel";

export function TechSection() {
  return (
    <section id="tech-stack" className="mt-20">
      <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
        <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
          Tech Stack & Expertise
        </span>
      </h2>

      <TechCarousel />
    </section>
  );
}