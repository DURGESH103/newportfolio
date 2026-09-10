import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { GitHubIcon } from "@/components/ui/BrandIcons";

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-bg-elevated">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
        <ProjectImage
          image={project.image}
          alt={`${project.name} preview`}
          className="lg:order-2"
        />

        <div className="flex flex-col lg:order-1">
          <p className="mb-3 font-mono text-xs font-medium tracking-wide text-accent">
            Featured Project
          </p>
          <h3 className="text-2xl font-semibold text-fg">{project.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-fg-muted">
            {project.description}
          </p>

          {project.problem ? (
            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-medium text-fg">Problem</p>
                <p className="mt-1 text-fg-muted">{project.problem}</p>
              </div>
              {project.solution ? (
                <div>
                  <p className="font-medium text-fg">Solution</p>
                  <p className="mt-1 text-fg-muted">{project.solution}</p>
                </div>
              ) : null}
            </div>
          ) : null}

          {project.features ? (
            <ul className="mt-6 grid gap-2 text-sm text-fg-muted sm:grid-cols-2">
              {project.features.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button href={project.liveUrl} external>
                Live Demo
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} external variant="secondary">
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
