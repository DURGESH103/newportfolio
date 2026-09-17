"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function applyTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage unavailable — theme just won't persist across reloads.
  }
  listeners.forEach((callback) => callback());
}

/**
 * Reads/writes the `data-theme` attribute set on <html> by the inline
 * script in layout.tsx. getSnapshot always reads the DOM directly (no
 * separately-tracked variable to drift out of sync). The server snapshot
 * is always "dark" so the first client render matches it — no hydration
 * mismatch — and useSyncExternalStore re-renders once with the real
 * value immediately after mount.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    applyTheme(getSnapshot() === "light" ? "dark" : "light");
  }, []);

  return { theme, toggleTheme } as const;
}
