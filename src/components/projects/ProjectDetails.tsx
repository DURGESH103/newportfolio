import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

function BackToProjectsLink({ className }: { className?: string }) {
  return (
    <Link
      href="/#projects"
      className={`inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-accent ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Back to Projects
    </Link>
  );
}

export function ProjectDetails({ project }: { project: Project }) {
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  const aboutParagraphs = [project.problem, project.solution].filter(
    (p): p is string => Boolean(p)
  );

  return (
    <div className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]"
        aria-hidden="true"
      />

      <Container>
        <BackToProjectsLink className="mb-8" />

        <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
          Project
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Button href={project.githubUrl} external variant="secondary">
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button href={project.liveUrl} external>
              Live Demo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : null}
        </div>

        <div className="mt-12">
          <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-wide text-fg-subtle">
            Project Screenshots
          </h2>
          <ProjectGallery images={images} alt={project.name} />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {aboutParagraphs.length > 0 ? (
              <>
                <h2 className="mb-4 text-xl font-semibold text-fg">
                  About the Project
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-fg-muted">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </>
            ) : null}

            {project.features?.length ? (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-fg">
                  Key Features
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm leading-relaxed text-fg-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.architecture ? (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-fg">
                  Architecture
                </h2>
                <p className="text-base leading-relaxed text-fg-muted">
                  {project.architecture}
                </p>
              </div>
            ) : null}

            {project.challenges ? (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-fg">
                  Challenges
                </h2>
                <p className="text-base leading-relaxed text-fg-muted">
                  {project.challenges}
                </p>
              </div>
            ) : null}

            {project.outcome ? (
              <div className="mt-10">
                <h2 className="mb-4 text-xl font-semibold text-fg">
                  Outcome
                </h2>
                <p className="text-base leading-relaxed text-fg-muted">
                  {project.outcome}
                </p>
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-fg">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <BackToProjectsLink />
        </div>
      </Container>
    </div>
  );
}
