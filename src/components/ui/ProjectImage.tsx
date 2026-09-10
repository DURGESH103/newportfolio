import Image from "next/image";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectImage({
  image,
  alt,
  className,
  priority,
  flush = false,
}: {
  image?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Omit rounded corners and border — use when the parent card already frames it. */
  flush?: boolean;
}) {
  const frame = flush ? "" : "rounded-lg border border-border";

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
      <div className="relative flex flex-col items-center gap-2 text-fg-subtle">
        <Code2 className="h-6 w-6" aria-hidden="true" />
        <span className="font-mono text-xs">Preview coming soon</span>
      </div>
    </div>
  );
}
