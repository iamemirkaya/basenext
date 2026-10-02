import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub, SiKaggle } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectsData } from "@/data/projects";

const projectLinks = [
  { key: "githubUrl", label: "Source Code", icon: SiGithub, iconClassName: "size-4" },
  { key: "kaggleUrl", label: "Kaggle Notebook", icon: SiKaggle, iconClassName: "size-4 text-kaggle" },
  { key: "liveUrl", label: "Live Demo", icon: FiExternalLink, iconClassName: "size-4" },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-20 px-4 md:px-0">
      <SectionHeading>Featured Projects</SectionHeading>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.15}>
            <Card className="h-full transition-all duration-300 hover:shadow-glow hover:ring-brand-500/50">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto flex-wrap gap-4 border-border/50 pt-4">
                {projectLinks.map(({ key, label, icon: Icon, iconClassName }) => {
                  const href = project[key];
                  if (!href) return null;

                  return (
                    <Link
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary-foreground transition-colors hover:text-primary"
                    >
                      <Icon className={iconClassName} />
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
