import { TechItem } from "@/types/tech";
import Image from "next/image";


type TechCardProps = {
  item: TechItem;
  index: number; 
};

export function TechCard({ item, index }: TechCardProps) {
  return (
    <div className="min-w-[70%] transform-gpu snap-center rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] md:min-w-[30%]">
      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-zinc-950/50">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={index < 2} 
          className="object-contain p-2 transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 70vw, 30vw"
        />
      </div>
      <h3 className="mt-3 text-lg font-bold text-zinc-100">{item.title}</h3>
      <p className="mt-1 text-xs font-medium text-emerald-400">{item.subtitle}</p>
    </div>
  );
}