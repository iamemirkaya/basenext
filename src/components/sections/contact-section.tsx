import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/config/social";

export function ContactSection() {
  return (
    <section id="contact" className="mt-20 px-4 md:px-0">
      <SectionHeading>Get In Touch</SectionHeading>

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-lg text-muted-foreground">
          Have a question or an idea to collaborate on? Feel free to reach out through any of the channels below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-brand-500/50 hover:text-primary"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
