"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();

  // Server and the first client render always agree on this plain div
  // (no inline style), so content stays visible without JS and hydration
  // never mismatches. The animated version is a client-only enhancement
  // swapped in after mount.
  if (!mounted || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
