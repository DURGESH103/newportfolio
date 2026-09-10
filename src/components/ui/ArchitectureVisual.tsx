import { Database, Monitor, Server, Zap } from "lucide-react";

const nodes = [
  {
    icon: Monitor,
    label: "Client",
    sub: "React · Next.js",
  },
  {
    icon: Server,
    label: "API Layer",
    sub: "Django REST · WebSockets",
    tag: "Real-time",
  },
  {
    icon: Database,
    label: "Database",
    sub: "PostgreSQL · MongoDB",
  },
];

export function ArchitectureVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/40" />
        <span className="ml-2 font-mono text-xs text-fg-subtle">
          architecture.flow
        </span>
      </div>

      <div className="p-8">
        <div className="relative pl-11">
          <div
            className="absolute left-4 top-4 bottom-4 w-px bg-border"
            aria-hidden="true"
          />
          {nodes.map((node, index) => (
            <div
              key={node.label}
              className={index < nodes.length - 1 ? "relative mb-9" : "relative"}
            >
              <span className="absolute -left-11 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg text-accent">
                <node.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-2">
                <p className="font-mono text-sm text-fg">{node.label}</p>
                {node.tag ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                    <Zap className="h-3 w-3" aria-hidden="true" />
                    {node.tag}
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 text-xs text-fg-subtle">{node.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
