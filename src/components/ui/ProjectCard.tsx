import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ProjectImage } from "@/components/ui/ProjectImage";

/** Deterministic per-project accent pick so grid cards aren't all
 * visually identical, without needing a new data field. */
function accentFor(slug: string): "a" | "b" {
  const sum = [...slug].reduce((total, char) => total + char.charCodeAt(0), 0);
  return sum % 2 === 0 ? "a" : "b";
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View project: ${project.name}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30"
    >
      <ProjectImage
        image={project.image}
        alt={`${project.name} preview`}
        flush
        variant="card"
        accent={accentFor(project.slug)}
        className="border-b border-border transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-fg">
          {project.name}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              className="border-border/70 bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-fg-muted"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-fg-muted transition-colors duration-200 group-hover:text-accent">
          View Project
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
