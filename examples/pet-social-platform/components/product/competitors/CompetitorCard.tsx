"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { Competitor } from "@/data/competitors";
import { Spec } from "@/components/ui/InsightCard";
import { ProvenanceMark } from "@/components/ui/Note";
import { Badge } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/locale-context";
import { TIER_COLOR, TIER_SHORT } from "./CompetitorMap";

export function CompetitorCard({ competitor: c }: { competitor: Competitor }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const id = `competitor-${c.id}`;
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={cn("border-t pt-4 pb-5 transition-colors", open ? "border-ink" : "border-line hover:border-line-2")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={t(open ? { en: "Collapse", zh: "收起" } : { en: "Expand", zh: "展开" }) + " · " + t(c.name)}
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full shrink-0" style={{ background: TIER_COLOR[c.tier] }} aria-hidden />
              <span className="t-label">{t(c.category)}</span>
            </div>
            <h3 className="t-h3 mt-2 group-hover:text-accent-ink transition-colors">{t(c.name)}</h3>
            <p className="t-body-sm text-ink-2 mt-1.5 max-w-[46ch]">{t(c.coreValue)}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-1">
            <Badge tone="neutral">{t(TIER_SHORT[c.tier])}</Badge>
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className={cn("text-ink-3 transition-transform duration-200", open && "rotate-180 text-ink")}
            />
          </div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <Spec
                dense
                rows={[
                  { label: t({ en: "Strength", zh: "优势" }), value: t(c.strength) },
                  { label: t({ en: "Gap", zh: "缺口" }), value: <span className="text-ink-2">{t(c.gap)}</span> },
                  {
                    label: t({ en: "Mechanism", zh: "值得借鉴的机制" }),
                    value: <span className="text-accent-ink">{t(c.mechanism)}</span>,
                  },
                  ...(c.provenance
                    ? [{ label: t({ en: "Source", zh: "来源" }), value: <ProvenanceMark provenance={c.provenance} /> }]
                    : []),
                ]}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
