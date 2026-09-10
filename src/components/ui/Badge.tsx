import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-bg-elevated px-3 py-1 text-sm text-fg-muted transition-colors duration-150",
        className
      )}
    >
      {children}
    </span>
  );
}
