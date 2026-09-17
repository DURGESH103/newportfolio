import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

export function TechBadge({
  icon: Icon,
  label,
  className,
  delay = 0,
}: {
  icon: IconType;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "motion-safe:animate-float flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-elevated text-fg-muted shadow-lg",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
      title={label}
    >
      <Icon className="h-[18px] w-[18px]" />
    </div>
  );
}
