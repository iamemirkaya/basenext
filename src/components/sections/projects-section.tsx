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
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-20 px-4 md:px-0">
      <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
        <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projectsData.map((project) => (
          <Card 
            key={project.id} 
            className="flex flex-col bg-zinc-900/50 border-zinc-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <CardHeader>
              <CardTitle className="text-xl text-zinc-100">{project.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-3 text-zinc-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="mt-auto flex flex-wrap gap-4 border-t border-zinc-800/50 pt-4">
              {project.githubUrl && (
                <Link 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <SiGithub className="size-4" />
                  <span>Source Code</span>
                </Link>
              )}
              {project.kaggleUrl && (
                <Link 
                  href={project.kaggleUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <SiKaggle className="size-4 text-[#20BEFF]" />
                  <span>Kaggle Notebook</span>
                </Link>
              )}
              {project.liveUrl && (
                <Link 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
                >
                  <FiExternalLink className="size-4" />
                  <span>Live Demo</span>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}