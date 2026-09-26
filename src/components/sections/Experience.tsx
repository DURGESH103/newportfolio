import { Code2 } from "lucide-react";
import { experience, isCurrentExperience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { cn } from "@/lib/utils";

function TimelineNode({ current }: { current: boolean }) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-shadow duration-250",
        current
          ? "border-transparent bg-linear-to-br from-accent to-accent-2 text-white shadow-[0_0_18px_-4px_var(--color-accent)]"
          : "border-border bg-bg-elevated text-fg-subtle"
      )}
    >
      <Code2 className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="flex flex-col">
          {experience.map((item, index) => {
            const isLast = index === experience.length - 1;
            const current = isCurrentExperience(item);

            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <div className="flex items-stretch gap-5 sm:gap-6">
                  <div className="flex w-10 shrink-0 flex-col items-center">
                    <TimelineNode current={current} />
                    {!isLast ? (
                      <span
                        className={cn(
                          "w-px flex-1",
                          current
                            ? "bg-linear-to-b from-accent/50 to-border"
                            : "bg-border"
                        )}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className={cn("min-w-0 flex-1", !isLast && "pb-6 sm:pb-8")}>
                    <ExperienceCard item={item} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
