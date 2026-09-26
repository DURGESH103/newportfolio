import { type ExperienceItem, isCurrentExperience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const current = isCurrentExperience(item);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-6 shadow-sm shadow-black/5 backdrop-blur-sm transition-all duration-250 hover:-translate-y-1 hover:shadow-xl sm:p-8",
        current
          ? "border-accent/30 bg-bg-elevated/70 hover:border-accent/50 hover:shadow-black/20"
          : "border-border bg-bg-elevated/50 hover:border-border-hover hover:shadow-black/15"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-fg">
            {item.role}
          </h3>
          {item.company ? (
            <p className="mt-1 text-sm font-medium text-accent">
              {item.company}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1.5">
          {current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              Current
            </span>
          ) : null}
          <span className="rounded-full border border-border bg-bg/60 px-3 py-1 font-mono text-xs text-fg-subtle">
            {item.startDate} — {item.endDate}
          </span>
        </div>
      </div>

      {item.description ? (
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          {item.description}
        </p>
      ) : null}

      <ul className="mt-5">
        {item.responsibilities.map((point, index) => (
          <li
            key={point}
            className={cn(
              "flex items-start gap-3.5 py-2.5 text-sm leading-relaxed text-fg-muted",
              index !== item.responsibilities.length - 1 &&
                "border-b border-border/60"
            )}
          >
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[11px] text-fg-subtle"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {point}
          </li>
        ))}
      </ul>

      {item.technologies?.length ? (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
          {item.technologies.map((tech) => (
            <Badge
              key={tech}
              className="border-border/70 bg-bg/60 px-2.5 py-1 text-[11px] font-medium text-fg-muted"
            >
              {tech}
            </Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
}
