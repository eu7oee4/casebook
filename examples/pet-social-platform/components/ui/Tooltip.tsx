"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function Tooltip({
  content,
  children,
  className,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span tabIndex={0} aria-describedby={id} className="border-b border-dotted border-line-2 cursor-help">
        {children}
      </span>
      <span
        role="tooltip"
        id={id}
        className={cn(
          "pointer-events-none absolute left-0 top-full z-30 mt-2 w-56 rounded-md border border-line bg-surface p-3 text-[12.5px] leading-5 text-ink-2 shadow-[0_8px_24px_-12px_rgba(23,22,15,0.25)] transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
      >
        {content}
      </span>
    </span>
  );
}

/** Recharts custom tooltip body. */
export function ChartTip({
  title,
  rows,
}: {
  title?: React.ReactNode;
  rows: Array<{ label: string; value: string; color?: string }>;
}) {
  return (
    <div className="rounded-md border border-line bg-surface px-3 py-2 shadow-[0_8px_24px_-12px_rgba(23,22,15,0.3)] min-w-[140px]">
      {title && <div className="t-label mb-1.5">{title}</div>}
      <div className="space-y-1">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 text-[12.5px]">
            <span className="inline-flex items-center gap-1.5 text-ink-2">
              {r.color && <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />}
              {r.label}
            </span>
            <span className="tabular text-ink">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
