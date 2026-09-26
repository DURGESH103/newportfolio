import Image from "next/image";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectImage({
  image,
  alt,
  className,
  priority,
  flush = false,
  variant = "featured",
  accent = "a",
}: {
  image?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Omit rounded corners and border — use when the parent card already frames it. */
  flush?: boolean;
  /** "featured" (default) keeps the existing FeaturedProject look untouched.
   * "card" opts in to the refined preview treatment used by the compact
   * project-grid cards. */
  variant?: "featured" | "card";
  /** Card variant only: alternates which accent color leads the ambient
   * glow, so grid cards aren't all visually identical. */
  accent?: "a" | "b";
}) {
  const frame = flush ? "" : "rounded-lg border border-border";

  if (variant === "card") {
    if (image) {
      return (
        <div
          className={cn(
            "relative aspect-video w-full overflow-hidden bg-bg",
            frame,
            className
          )}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/55 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative flex aspect-video w-full items-center justify-center overflow-hidden bg-bg",
          frame,
          className
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-linear-to-br",
            accent === "a"
              ? "from-accent/12 via-transparent to-accent-2/10"
              : "from-accent-2/12 via-transparent to-accent/10"
          )}
          aria-hidden="true"
        />
        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[56px]",
            accent === "a" ? "bg-accent/20" : "bg-accent-2/20"
          )}
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-2.5 text-fg-subtle">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg-elevated/90 font-mono text-sm font-semibold text-accent shadow-[0_0_22px_-8px_var(--color-accent)]">
            {"</>"}
          </span>
          <span className="font-mono text-xs">Preview coming soon</span>
        </div>
      </div>
    );
  }

  if (image) {
    return (
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden bg-bg",
          frame,
          className
        )}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden bg-bg",
        frame,
        className
      )}
    >
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent-2/10"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2 text-fg-subtle">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-elevated/80 shadow-[0_0_18px_-8px_var(--color-accent)]">
          <Code2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs">Preview coming soon</span>
      </div>
    </div>
  );
}
