import { ArrowRight, Download, Send } from "lucide-react";
import { SiDocker, SiMongodb, SiNodedotjs, SiPython, SiReact } from "react-icons/si";
import { profile, socialLinks } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureVisual } from "@/components/ui/ArchitectureVisual";
import { TechBadge } from "@/components/ui/TechBadge";
import { GitHubIcon } from "@/components/ui/BrandIcons";

const HIGHLIGHT_PHRASES = ["complex workflows", "reliable"];
const highlightPattern = new RegExp(
  `(${HIGHLIGHT_PHRASES.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(
    "|"
  )})`,
  "gi"
);

function HeroBackground() {
  return (
    <>
      {/* Soft atmospheric glow, right side only — static, no animation */}
      <div
        className="pointer-events-none absolute -top-16 right-[-6%] -z-10 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[8%] -z-10 h-[320px] w-[320px] rounded-full bg-accent-2/10 blur-[100px]"
        aria-hidden="true"
      />
    </>
  );
}

function Headline({ text }: { text: string }) {
  const parts = text.split(highlightPattern);
  return (
    <>
      {parts.map((part, index) =>
        HIGHLIGHT_PHRASES.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
          <span
            key={index}
            className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent"
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32"
    >
      <div className="absolute inset-0 -z-20 hero-grid" aria-hidden="true" />
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-[1260px] items-center gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <Reveal>
          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-bg-elevated/60 px-3 py-1 font-mono text-[13px] text-accent sm:text-sm">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
          </span>
          <h1 className="max-w-[650px] text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-fg sm:text-[38px] lg:text-[44px] xl:text-[48px]">
            <Headline text={profile.headline} />
          </h1>
          <p className="mt-6 max-w-[620px] text-[15px] leading-[1.55] text-fg-muted sm:text-[16px] lg:text-[17px]">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-linear-to-r from-accent to-accent-2 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_var(--color-accent)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-bg px-5 text-sm font-medium text-fg transition-colors duration-150 hover:border-accent/40"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 text-[13px] text-fg-subtle">
              <span
                className="h-1.5 w-1.5 rounded-full bg-success/70"
                aria-hidden="true"
              />
              {profile.availability}
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              Let&apos;s connect
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-2 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[450px]">
            <ArchitectureVisual />
            <TechBadge
              icon={SiPython}
              label="Python"
              className="absolute -left-5 -top-5 hidden lg:flex"
            />
            <TechBadge
              icon={SiReact}
              label="React"
              delay={0.4}
              className="absolute -right-5 -top-5 hidden lg:flex"
            />
            <TechBadge
              icon={SiNodedotjs}
              label="Node.js"
              delay={0.8}
              className="absolute -left-6 top-[38%] hidden lg:flex"
            />
            <TechBadge
              icon={SiMongodb}
              label="MongoDB"
              delay={1.2}
              className="absolute -right-6 top-[58%] hidden lg:flex"
            />
            <TechBadge
              icon={SiDocker}
              label="Docker"
              delay={1.6}
              className="absolute -bottom-12 left-10 hidden lg:flex"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
