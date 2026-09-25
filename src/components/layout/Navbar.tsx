"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile, socialLinks } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { useTheme } from "@/lib/useTheme";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-accent to-accent-2 text-[13px] font-bold text-white shadow-[0_0_18px_-6px_var(--color-accent)]">
        {profile.initials}
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-fg">
          {profile.name}
        </span>
        <span className="mt-1 text-[11px] text-fg-subtle">
          {profile.navRole}
        </span>
      </span>
    </Link>
  );
}

function ResumeLink({ className }: { className?: string }) {
  return (
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-accent to-accent-2 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_-6px_var(--color-accent)] transition-transform duration-150 hover:-translate-y-0.5 hover:scale-[1.02]",
        className
      )}
    >
      <Download className="h-3.5 w-3.5" aria-hidden="true" />
      Resume
    </a>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-colors duration-150 hover:border-accent/40 hover:text-accent"
    >
      {isLight ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 8);

      const scrolledDown = currentY > lastScrollY.current;
      const pastRevealThreshold = currentY > 96; // clear of the hero's top
      setHidden(scrolledDown && pastRevealThreshold);

      lastScrollY.current = currentY;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 transition-transform duration-300 ease-in-out sm:pt-4",
        hidden && !mobileOpen ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"
      )}
    >
      <header
        className={cn(
          "pointer-events-auto w-full max-w-[1400px] rounded-[18px] border transition-all duration-300",
          scrolled
            ? "border-border bg-bg/75 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-border/50 bg-bg/30 backdrop-blur-md"
        )}
      >
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6"
        >
          <Logo />

          <div className="hidden items-center rounded-full border border-border/60 bg-bg-elevated/40 p-1 xl:flex">
            <ul className="relative flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href} className="relative">
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-linear-to-r from-accent to-accent-2 shadow-[0_0_16px_-4px_var(--color-accent)]"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    ) : null}
                    <Link
                      href={item.href}
                      className={cn(
                        "relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150",
                        isActive
                          ? "text-white"
                          : "text-fg-muted hover:text-fg"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-fg-muted transition-colors duration-150 hover:text-accent"
            >
              <GitHubIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-fg-muted transition-colors duration-150 hover:text-accent"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <ThemeToggle />
            <ResumeLink className="ml-1" />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-fg xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        <div
          className={cn(
            "overflow-hidden transition-[max-height] duration-300 ease-in-out xl:hidden",
            mobileOpen ? "max-h-[32rem] border-t border-border" : "max-h-0"
          )}
        >
          <ul className="flex flex-col px-5 py-3">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium transition-colors duration-150",
                      isActive
                        ? "bg-linear-to-r from-accent to-accent-2 text-white"
                        : "text-fg-muted hover:text-fg"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 border-t border-border px-5 py-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-fg-muted hover:text-accent"
            >
              <GitHubIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-fg-muted hover:text-accent"
            >
              <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <ThemeToggle />
            <ResumeLink className="ml-auto" />
          </div>
        </div>
      </header>
    </div>
  );
}
