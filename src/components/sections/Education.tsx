import { GraduationCap, ArrowUpRight } from "lucide-react";
import { education } from "@/data/education";
import { codingProfiles } from "@/data/codingProfiles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  CodeChefIcon,
  GeeksforGeeksIcon,
  GitHubIcon,
  LeetCodeIcon,
} from "@/components/ui/BrandIcons";

const iconMap = {
  github: GitHubIcon,
  leetcode: LeetCodeIcon,
  geeksforgeeks: GeeksforGeeksIcon,
  codechef: CodeChefIcon,
};

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading eyebrow="Background" title="Education & coding profiles" />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Academic Background
            </p>
            <div className="space-y-5">
              {education.map((item) => (
                <Reveal key={item.institution}>
                  <div className="flex h-full gap-4 rounded-xl border border-border bg-bg-elevated p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-fg">
                        {item.institution}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">
                        {item.degree}
                      </p>
                      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <div>
                          <dt className="text-fg-subtle">CGPA</dt>
                          <dd className="font-medium text-fg">{item.cgpa}</dd>
                        </div>
                        <div>
                          <dt className="text-fg-subtle">Graduation</dt>
                          <dd className="font-medium text-fg">
                            {item.graduation}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-wide text-fg-subtle">
              Coding Profiles
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {codingProfiles.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Reveal key={item.name} delay={index * 0.05}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-5 transition-colors duration-150 hover:border-border-hover hover:bg-bg-elevated-hover"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 font-medium text-fg">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-fg-subtle transition-colors duration-150 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
