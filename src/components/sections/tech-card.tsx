import { TechItem } from "@/types/tech";
import Image from "next/image";
import { m } from "motion/react";
import { fadeUp } from "@/lib/motion";

type TechCardProps = {
  item: TechItem;
  index: number;
};

export function TechCard({ item, index }: TechCardProps) {
  return (
    <m.div variants={fadeUp} className="min-w-7/10 snap-center md:min-w-3/10">
      <div className="h-full transform-gpu rounded-xl border bg-card p-3 transition-all duration-300 hover:border-brand-500/50 hover:shadow-glow">
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-surface/50">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={index < 2}
            className="object-contain p-2 transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 70vw, 30vw"
          />
        </div>
        <h3 className="mt-3 text-lg font-bold text-card-foreground">{item.title}</h3>
        <p className="mt-1 text-xs font-medium text-primary">{item.subtitle}</p>
      </div>
    </m.div>
  );
}
