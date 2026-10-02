import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeyData } from "@/data/journey";

export function AboutSection() {
  return (
    <section id="journey" className="mt-20 px-4 md:px-0">
      <SectionHeading>My Journey</SectionHeading>

      <div className="relative mx-auto mt-5 max-w-4xl rounded-lg border bg-card/50 p-6 sm:p-10">
        <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-linear-to-b from-brand-900 to-brand-alt-900 sm:left-1/2 sm:-ml-1 sm:w-2">
          <div className="sticky top-1/2 -ml-1.5 sm:-ml-1">
            <div className="relative size-4">
              <div className="absolute size-4 animate-ping rounded-full bg-brand-500" />
              <div className="size-4 rounded-full bg-brand-alt-500" />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 pl-8 sm:grid-cols-2 sm:pl-0">
          {journeyData.map((item, index) => (
            <Reveal
              key={item.id}
              className={index % 2 === 0 ? "sm:col-start-2 sm:pl-8" : "sm:pr-8 sm:text-right"}
            >
              <Card className="bg-surface/50 transition-shadow hover:ring-brand-500/50">
                <CardHeader className="p-4 pb-2 sm:p-6">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {item.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-muted-foreground sm:p-6">
                  <p>{item.period}</p>
                  {item.summary && <p className="mt-2 line-clamp-2">{item.summary}</p>}
                  <p className="mt-2 text-xs opacity-70">{item.skills}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
