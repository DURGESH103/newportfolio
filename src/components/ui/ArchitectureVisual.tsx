import { Database, Monitor, Server, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  {
    icon: Monitor,
    label: "Client",
    sub: "React · Next.js",
  },
  {
    icon: Server,
    label: "API Layer",
    sub: "Django REST · Node.js · WebSockets",
    tag: "Real-time",
  },
  {
    icon: Database,
    label: "Database",
    sub: "MySQL · MongoDB",
  },
];

export function ArchitectureVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-fg-subtle">
          architecture.flow
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="relative pl-10">
          <div
            className="absolute left-[15px] top-4 bottom-4 w-px bg-linear-to-b from-accent/40 via-border to-accent-2/40"
            aria-hidden="true"
          />
          {nodes.map((node, index) => (
            <div
              key={node.label}
              className={cn(
                "group relative -mx-2 rounded-lg px-2 py-1 transition-colors duration-200 hover:bg-bg/60",
                index < nodes.length - 1 && "mb-6"
              )}
            >
              <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-accent shadow-[0_0_14px_-6px_var(--color-accent)] transition-colors duration-200 group-hover:border-accent/50">
                <node.icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-[13px] font-medium text-fg">
                  {node.label}
                </p>
                {node.tag ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-accent">
                    <Zap className="h-2.5 w-2.5" aria-hidden="true" />
                    {node.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-[11px] leading-relaxed text-fg-subtle">
                {node.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-5 py-2.5 font-mono text-[10px] text-fg-subtle">
        {"// Building scalable solutions..."}
      </div>
    </div>
  );
}
