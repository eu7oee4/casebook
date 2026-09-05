"use client";

import { ArrowRight } from "lucide-react";
import { transferMap } from "@/data/benchmark";
import { useT } from "@/lib/locale-context";

export function TransferMap() {
  const t = useT();
  return (
    <ol className="divide-y divide-line border-t border-ink">
      {transferMap.map((row, i) => (
        <li
          key={row.id}
          className="grid grid-cols-[28px_1fr] sm:grid-cols-[28px_minmax(0,1fr)_24px_minmax(0,1fr)_minmax(0,1.2fr)] items-baseline gap-x-4 gap-y-1 py-4"
        >
          <span className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-[15px] text-ink-2">{t(row.from)}</span>
          <span className="hidden sm:flex justify-center text-ink-3" aria-hidden>
            <ArrowRight size={14} strokeWidth={1.25} />
          </span>
          <span className="col-start-2 sm:col-start-4 t-h3 text-ink">{t(row.to)}</span>
          <span className="col-start-2 sm:col-start-5 t-caption">
            <span className="t-label mr-2">{t({ en: "via", zh: "通过" })}</span>
            {t(row.via)}
          </span>
        </li>
      ))}
    </ol>
  );
}
