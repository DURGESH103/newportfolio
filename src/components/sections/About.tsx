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
import { GraduationCap, Layers, Server } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

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
            <div className="relative mx-auto w-full max-w-[380px]">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-linear-to-br from-accent/20 via-accent-2/10 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border shadow-2xl shadow-black/40">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 380px, 70vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/30 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div
                className="motion-safe:animate-float absolute -left-4 top-8 hidden items-center gap-1.5 rounded-full border border-border bg-bg-elevated/90 px-3 py-1.5 text-xs font-medium text-fg shadow-lg backdrop-blur-md lg:flex"
                style={{ animationDelay: "0.3s" }}
              >
                <Server className="h-3 w-3 text-accent" aria-hidden="true" />
                Backend Developer
              </div>
              <div
                className="motion-safe:animate-float absolute -right-4 bottom-10 hidden items-center gap-1.5 rounded-full border border-border bg-bg-elevated/90 px-3 py-1.5 text-xs font-medium text-fg shadow-lg backdrop-blur-md lg:flex"
                style={{ animationDelay: "0.9s" }}
              >
                <Layers className="h-3 w-3 text-accent-2" aria-hidden="true" />
                Full-Stack Developer
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
