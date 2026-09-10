import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="space-y-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${index}`} delay={index * 0.05}>
              <article className="relative overflow-hidden rounded-xl border border-border bg-bg-elevated p-6 sm:p-7">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-accent"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-fg">
                    {item.role}
                  </h3>
                  <span className="font-mono text-sm text-fg-subtle">
                    {item.period}
                  </span>
                </div>
                {item.company ? (
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.company}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
