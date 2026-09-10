import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { GitHubIcon } from "@/components/ui/BrandIcons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-all duration-200 hover:-translate-y-1 hover:border-border-hover hover:shadow-xl hover:shadow-black/30">
      <ProjectImage
        image={project.image}
        alt={`${project.name} preview`}
        flush
        className="border-b border-border transition-transform duration-300 group-hover:scale-[1.02]"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-fg">{project.name}</h3>
          <div className="flex shrink-0 items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                className="text-fg-subtle transition-colors duration-150 hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo (opens in new tab)`}
                className="text-fg-subtle transition-colors duration-150 hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tech.map((tech) => (
            <Badge key={tech} className="bg-bg px-2 py-0.5 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
