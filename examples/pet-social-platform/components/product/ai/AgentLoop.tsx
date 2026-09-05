"use client";

import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/locale-context";
import type { Str } from "@/lib/i18n";

export function AgentLoop({ nodes }: { nodes: Array<{ label: Str; note?: Str; emphasis?: boolean }> }) {
  const t = useT();
  return (
    <div>
      {/* wide */}
      <div className="hidden lg:block">
        <ol className="grid" style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0,1fr))` }}>
          {nodes.map((n, i) => (
            <li key={typeof n.label === "string" ? n.label : n.label.en} className="relative pr-6">
              <div className={cn("border-t pt-4", n.emphasis ? "border-accent" : "border-ink")}>
                <div className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</div>
                <div className={cn("text-[15px] font-medium mt-2", n.emphasis && "text-accent-ink")}>{t(n.label)}</div>
                {n.note && <div className="t-annotation mt-1.5 pr-2">{t(n.note)}</div>}
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight size={14} strokeWidth={1.25} className="absolute right-1 top-[13px] text-ink-3" aria-hidden />
              )}
            </li>
          ))}
        </ol>
        {/* return path */}
        <div className="relative mt-6 mb-4 h-12" aria-hidden>
          {/* return path: from 06 Feedback back up to 01 Understand intent */}
          <div className="absolute left-[6px] right-[calc(8.33%+6px)] top-0 bottom-0 border-b border-l border-r border-accent-soft rounded-b-sm" />
          <ArrowUp size={12} strokeWidth={1.5} className="absolute left-[0.5px] -top-[7px] text-accent" />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] bg-bg px-3 t-label whitespace-nowrap text-accent-ink">
            {t({ en: "Feedback → next intent starts better informed", zh: "反馈 → 下一次意图从更好的起点开始" })}
          </span>
        </div>
      </div>
      {/* narrow */}
      <ol className="lg:hidden flex flex-col">
        {nodes.map((n, i) => (
          <li key={typeof n.label === "string" ? n.label : n.label.en} className="flex flex-col">
            <div className={cn("border-t pt-3 pb-3", n.emphasis ? "border-accent" : "border-ink")}>
              <div className="flex items-baseline gap-3">
                <span className="t-mono text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                <span className={cn("text-[15px] font-medium", n.emphasis && "text-accent-ink")}>{t(n.label)}</span>
              </div>
              {n.note && <div className="t-annotation mt-1 pl-8">{t(n.note)}</div>}
            </div>
            {i < nodes.length - 1 && <ArrowDown size={14} strokeWidth={1.25} className="text-ink-3 ml-1 mb-2" aria-hidden />}
          </li>
        ))}
        <li className="t-annotation mt-2 pl-1">
          {t({ en: "Feedback returns to Understand intent — the loop, not a line.", zh: "反馈回到「理解意图」：这是一个环，而不是一条线。" })}
        </li>
      </ol>
    </div>
  );
}
