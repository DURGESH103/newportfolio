import { ArrowRight } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureVisual } from "@/components/ui/ArchitectureVisual";
import { GitHubIcon } from "@/components/ui/BrandIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <p className="mb-5 font-mono text-sm text-accent">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
          </p>
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-fg sm:text-5xl lg:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={profile.resumeUrl} variant="secondary" external>
              Download Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              View GitHub
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-fg-subtle">
              <span
                className="h-1.5 w-1.5 rounded-full bg-success"
                aria-hidden="true"
              />
              {profile.availability}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <ArchitectureVisual />
        </Reveal>
      </Container>
    </section>
  );
}
