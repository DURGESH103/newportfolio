import { profile, socialLinks } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-soft blur-3xl"
        aria-hidden="true"
      />

      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
            Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
            I&apos;m open to software engineering opportunities, interesting
            projects and technical collaborations.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CopyEmailButton email={profile.email} />
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-fg transition-colors duration-150 hover:border-border-hover hover:bg-bg-elevated-hover"
            >
              <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-fg transition-colors duration-150 hover:border-border-hover hover:bg-bg-elevated-hover"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
