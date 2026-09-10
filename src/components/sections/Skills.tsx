import type { Skill, SkillGroup } from "@/data/skills";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function TechItem({ skill, emphasis }: { skill: Skill; emphasis?: boolean }) {
  const Icon = skill.icon;
  return (
    <div
      className={cn(
        "group -mx-2 -my-1 flex cursor-default items-center gap-2.5 rounded-lg px-2 py-1 transition-all duration-150 hover:-translate-y-0.5 hover:bg-bg-elevated"
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            "shrink-0 text-fg-subtle transition-colors duration-150 group-hover:text-accent",
            emphasis ? "h-5 w-5" : "h-4 w-4"
          )}
          aria-hidden="true"
        />
      ) : null}
      <div>
        <p
          className={cn(
            "font-medium transition-colors duration-150 group-hover:text-fg",
            emphasis ? "text-base text-fg" : "text-sm text-fg-muted"
          )}
        >
          {skill.name}
        </p>
        {skill.note ? (
          <p className="text-xs text-fg-subtle">{skill.note}</p>
        ) : null}
      </div>
    </div>
  );
}

function TechGroup({
  group,
  delay = 0,
}: {
  group: SkillGroup;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className={group.emphasis ? "border-l-2 border-accent pl-6" : ""}>
        <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-wide text-accent/80">
          {group.title}
        </h3>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {group.skills.map((skill) => (
            <TechItem key={skill.name} skill={skill} emphasis={group.emphasis} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function groupByTitle(title: string): SkillGroup {
  const group = skillGroups.find((g) => g.title === title);
  if (!group) {
    throw new Error(`Skill group "${title}" not found in src/data/skills.ts`);
  }
  return group;
}

export function Skills() {
  const backend = groupByTitle("Backend");
  const languages = groupByTitle("Languages");
  const frontend = groupByTitle("Frontend");
  const databases = groupByTitle("Databases");
  const cloudData = groupByTitle("Cloud & Data");

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical toolkit for backend engineering, full-stack development, databases and cloud/data systems."
        />

        <div className="space-y-14">
          <TechGroup group={backend} />

          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            <TechGroup group={languages} delay={0.05} />
            <TechGroup group={frontend} delay={0.1} />
          </div>

          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-5">
            <div className="sm:col-span-2">
              <TechGroup group={databases} delay={0.05} />
            </div>
            <div className="sm:col-span-3">
              <TechGroup group={cloudData} delay={0.1} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
