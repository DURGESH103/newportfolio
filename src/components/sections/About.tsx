import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiApachespark,
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSnowflake,
} from "react-icons/si";
import { Code2, GraduationCap, Layers } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const ABOUT_TECH: { label: string; icon?: IconType }[] = [
  { label: "Python", icon: SiPython },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Django", icon: SiDjango },
  { label: "React", icon: SiReact },
  { label: "WebSockets" },
  { label: "Azure Data Factory" },
  { label: "Apache Spark", icon: SiApachespark },
  { label: "Snowflake", icon: SiSnowflake },
  { label: "Power BI" },
];

function TechChip({ label, icon: Icon }: { label: string; icon?: IconType }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/60 px-3.5 py-1.5 text-[13px] font-medium text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent">
      {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      {label}
    </span>
  );
}

function FloatingBadge({
  icon: Icon,
  label,
  dotClassName,
  className,
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  dotClassName: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "motion-safe:animate-float absolute hidden items-center gap-2.5 rounded-2xl border border-border bg-bg-elevated/95 py-2.5 pl-2.5 pr-4 shadow-xl backdrop-blur-md xl:flex",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-fg">{label}</span>
      <span
        className={cn(
          "absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-bg",
          dotClassName
        )}
        aria-hidden="true"
      />
    </div>
  );
}

function CompactRoleBadges() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 xl:hidden">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/80 px-3 py-1.5 text-xs font-medium text-fg">
        <Code2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        Backend Developer
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/80 px-3 py-1.5 text-xs font-medium text-fg">
        <Layers className="h-3.5 w-3.5 text-accent-2" aria-hidden="true" />
        Full-Stack Developer
      </span>
    </div>
  );
}

function CurrentlyCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/40 p-5 shadow-lg backdrop-blur-sm sm:p-6">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex items-start gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_0_20px_-6px_var(--color-accent)]">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wide text-accent">
            Currently
          </p>
          <p className="text-[14px] leading-relaxed text-fg-muted">
            {profile.bio[2]}
          </p>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24"
    >
      <div
        className="about-grid pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-accent/8 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-accent-2/8 blur-[110px]"
        aria-hidden="true"
      />

      <Container>
        <Reveal className="mb-12 max-w-2xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-bg-elevated/60 px-3 py-1 font-mono text-[13px] text-accent">
            About
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Who I am<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted">
              <p>{profile.bio[0]}</p>
              <p>{profile.bio[1]}</p>
            </div>

            <div className="mt-6 flex max-w-2xl flex-wrap gap-2.5">
              {ABOUT_TECH.map((tech) => (
                <TechChip key={tech.label} {...tech} />
              ))}
            </div>

            <div className="mt-6 max-w-lg">
              <CurrentlyCard />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[400px] xl:mx-0 xl:ml-auto xl:mr-8">
              <div
                className="pointer-events-none absolute inset-0 -z-20 scale-110 rounded-[50%] bg-accent/20 blur-[90px]"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/5] w-full">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rotate-6 rounded-[36px] border border-white/10 bg-[#0b0d16] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.65)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  <Image
                    src="/profile.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 640px) 60vw, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="pointer-events-none absolute -top-7 left-8 hidden h-7 w-7 text-accent/70 xl:block"
                aria-hidden="true"
              >
                <path d="M4 15 L9 10" />
                <path d="M3 8 L10 6" />
                <path d="M12 3 L13 8" />
              </svg>

              <div
                className="pointer-events-none absolute -right-20 top-0 hidden w-[170px] xl:block"
                aria-hidden="true"
              >
                <p
                  className="-rotate-3 text-2xl leading-tight text-accent"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  Turning ideas into real products
                </p>
                <svg
                  viewBox="0 0 60 50"
                  fill="none"
                  className="mt-1 h-12 w-14 text-accent/60"
                >
                  <path
                    d="M50 4 C 46 20, 28 30, 10 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 40 L16 35 M10 40 L18 43"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <FloatingBadge
                icon={Code2}
                label="Backend Developer"
                dotClassName="bg-accent"
                className="-left-8 top-10"
                delay={0.3}
              />
              <FloatingBadge
                icon={Layers}
                label="Full-Stack Developer"
                dotClassName="bg-accent-2"
                className="-right-8 bottom-12"
                delay={0.9}
              />

              <div
                className="pointer-events-none absolute -left-6 top-1/2 hidden h-2 w-2 rounded-full bg-accent/50 xl:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-4 right-1/4 hidden h-12 w-12 rounded-full border border-accent/20 xl:block"
                aria-hidden="true"
              />

              <CompactRoleBadges />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
