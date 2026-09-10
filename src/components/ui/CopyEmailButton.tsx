"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, user can still select the text.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-fg transition-colors duration-150 hover:border-border-hover hover:bg-bg-elevated-hover",
        className
      )}
      aria-label={copied ? "Email copied to clipboard" : `Copy email address ${email}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-success" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{copied ? "Copied!" : email}</span>
    </button>
  );
}
