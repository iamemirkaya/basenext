import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <Reveal>
      <h2 className={cn("mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl", className)}>
        <span className="text-gradient">{children}</span>
      </h2>
    </Reveal>
  );
}
