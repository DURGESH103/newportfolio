"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile, socialLinks } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="#home"
          className="font-mono text-base font-semibold tracking-tight text-fg"
        >
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  activeHref === item.href
                    ? "text-accent"
                    : "text-fg-muted hover:text-fg"
                )}
                aria-current={activeHref === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-fg-muted transition-colors duration-150 hover:text-fg"
          >
            <GitHubIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-fg-muted transition-colors duration-150 hover:text-fg"
          >
            <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <Button
            href={profile.resumeUrl}
            variant="secondary"
            external
            className="ml-1"
          >
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-fg md:hidden"
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
          "overflow-hidden border-b border-border bg-bg transition-[max-height] duration-300 ease-in-out md:hidden",
          mobileOpen ? "max-h-[28rem]" : "max-h-0 border-b-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-2 py-3 text-base font-medium transition-colors duration-150",
                  activeHref === item.href
                    ? "text-accent"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 border-t border-border px-6 py-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-fg-muted hover:text-fg"
          >
            <GitHubIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-fg-muted hover:text-fg"
          >
            <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <Button
            href={profile.resumeUrl}
            variant="secondary"
            external
            className="ml-auto"
          >
            Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
