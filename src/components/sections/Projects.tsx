import { featuredProject, otherProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedProject } from "@/components/ui/FeaturedProject";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of projects covering real-time systems, full-stack applications and applied machine learning."
        />

        {featuredProject ? (
          <Reveal className="mb-8">
            <FeaturedProject project={featuredProject} />
          </Reveal>
        ) : null}

        {otherProjects.length > 0 ? (
          <div className="mt-2">
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Other Projects
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 2) * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
