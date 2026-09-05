"use client";

import { relationshipLadder } from "@/data/social";
import { useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

/** Ascending steps: each rung sits higher and further right than the last. */
export function RelationshipLadder() {
  const t = useT();
  const n = relationshipLadder.length;
  return (
    <ol className="relative">
      {relationshipLadder.map((r, i) => {
        const last = i === n - 1;
        return (
          <li
            key={r.step.en}
            className={cn("grid grid-cols-[28px_1fr] gap-x-4 items-baseline py-3 border-b border-line last:border-b-0")}
            style={{ paddingLeft: `${i * 6}%` }}
          >
            <span className={cn("t-mono", last ? "text-accent" : "text-ink-3")}>{String(r.depth).padStart(2, "0")}</span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
              <span className={cn("text-[15px] font-medium", last && "text-accent-ink")}>{t(r.step)}</span>
              <span className="t-caption">{t(r.signal)}</span>
              <span className="t-annotation hidden sm:inline">· {t(r.note)}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
