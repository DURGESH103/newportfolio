import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/20">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 280px, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-bg-elevated p-6">
                <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wide text-fg-subtle">
                  Engineering Focus
                </p>
                <ul className="space-y-3">
                  {profile.focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-fg">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
