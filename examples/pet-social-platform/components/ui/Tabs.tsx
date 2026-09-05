"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export type TabItem<T extends string> = { value: T; label: string; count?: number };

export function Tabs<T extends string>({
  items,
  value,
  onChange,
  className,
  ariaLabel,
}: {
  items: TabItem<T>[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
  ariaLabel?: string;
}) {
  const id = useId();
  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    onChange(items[next].value);
    const el = document.getElementById(`${id}-${items[next].value}`);
    el?.focus();
  };
  return (
    <div role="tablist" aria-label={ariaLabel} className={cn("flex flex-wrap gap-x-6 border-b border-line", className)}>
      {items.map((t, i) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            id={`${id}-${t.value}`}
            role="tab"
            type="button"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(t.value)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "relative -mb-px pb-3 pt-1 t-label transition-colors",
              active ? "text-ink border-b border-ink" : "text-ink-3 hover:text-ink border-b border-transparent"
            )}
          >
            {t.label}
            {typeof t.count === "number" && (
              <span className={cn("ml-1.5", active ? "text-accent" : "text-ink-3")}>{t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
