import { TechCarousel } from "@/components/sections/tech-carousel";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechSection() {
  return (
    <section id="tech-stack" className="mt-20">
      <SectionHeading className="mb-8">Tech Stack & Expertise</SectionHeading>

      <TechCarousel />
    </section>
  );
}
