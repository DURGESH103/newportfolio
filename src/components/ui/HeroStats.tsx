import { projects } from "@/data/projects";
import { education } from "@/data/education";

const stats = [
  { value: String(projects.length), label: "Projects" },
  { value: education[0]?.cgpa ?? "—", label: "CGPA" },
  { value: "Full-Stack", label: "Focus Area" },
  { value: "Open", label: "To Opportunities" },
];

export function HeroStats() {
  return (
    <dl className="grid grid-cols-2 divide-border sm:flex sm:flex-wrap sm:divide-x">
      {stats.map((stat) => (
        <div key={stat.label} className="py-3 sm:py-0 sm:px-6 sm:first:pl-0">
          <dd className="text-xl font-semibold text-fg">{stat.value}</dd>
          <dt className="mt-0.5 text-xs text-fg-subtle">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
