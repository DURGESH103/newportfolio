"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Code2, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const goTo = useCallback(
    (next: number) => {
      setIndex((current) => {
        if (images.length === 0) return current;
        return ((next % images.length) + images.length) % images.length;
      });
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!lightboxOpen) return;

    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, goPrev, goNext]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  if (!hasImages) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-elevated">
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent-2/10"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-3 text-fg-subtle">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg/80 shadow-[0_0_20px_-8px_var(--color-accent)]">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-sm">Preview coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 z-10 cursor-zoom-in"
          aria-label={`Open ${alt} screenshot ${index + 1} of ${images.length} full size`}
        />

        {images.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt={`${alt} screenshot ${i + 1} of ${images.length}`}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 800px, 100vw"
            className={cn(
              "object-cover transition-opacity duration-300",
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          />
        ))}

        <div
          className="pointer-events-none absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-bg/70 text-fg opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        >
          <ZoomIn className="h-4 w-4" />
        </div>

        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-fg shadow-lg backdrop-blur-sm transition-colors duration-150 hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg/80 text-fg shadow-lg backdrop-blur-sm transition-colors duration-150 hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>

      {hasMultiple ? (
        <div
          className="mt-3 flex flex-wrap gap-2.5"
          role="tablist"
          aria-label={`${alt} screenshots`}
        >
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-150",
                i === index
                  ? "border-accent shadow-[0_0_0_2px_var(--color-accent-soft)]"
                  : "border-border opacity-60 hover:opacity-100"
              )}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} screenshot, full size`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close full-size image"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors duration-150 hover:bg-black/70"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors duration-150 hover:bg-black/70 sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition-colors duration-150 hover:bg-black/70 sm:right-6"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${alt} screenshot ${index + 1} of ${images.length}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
