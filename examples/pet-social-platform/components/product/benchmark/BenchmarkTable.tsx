"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Tag";
import { Spec } from "@/components/ui/InsightCard";
import { ProvenanceMark } from "@/components/ui/Note";
import { benchmarkRows, DOMAIN_LABEL, type BenchmarkDomain } from "@/data/benchmark";
import { useT } from "@/lib/locale-context";

type Filter = "all" | BenchmarkDomain;

const COLS = "grid-cols-[150px_1.1fr_1.1fr_1.2fr_1.2fr]";

export function BenchmarkTable() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");
  const rows = filter === "all" ? benchmarkRows : benchmarkRows.filter((r) => r.domain === filter);
  const count = (d: Filter) => (d === "all" ? benchmarkRows.length : benchmarkRows.filter((r) => r.domain === d).length);

  return (
    <div>
      <Tabs<Filter>
        ariaLabel={t({ en: "Filter by domain", zh: "按领域筛选" })}
        value={filter}
        onChange={setFilter}
        items={[
          { value: "all", label: t({ en: "All", zh: "全部" }), count: count("all") },
          { value: "Content", label: t(DOMAIN_LABEL.Content), count: count("Content") },
          { value: "Social", label: t(DOMAIN_LABEL.Social), count: count("Social") },
          { value: "Local", label: t(DOMAIN_LABEL.Local), count: count("Local") },
        ]}
      />

      {/* Desktop table */}
      <div className="hidden lg:block mt-6">
        <div className={`grid ${COLS} gap-x-6 pb-3 border-b border-ink`}>
          <span className="t-label">{t({ en: "Product", zh: "产品" })}</span>
          <span className="t-label">{t({ en: "Mechanism", zh: "机制" })}</span>
          <span className="t-label">{t({ en: "Why it works", zh: "为何有效" })}</span>
          <span className="t-label">{t({ en: "Transferable insight", zh: "可迁移的洞察" })}</span>
          <span className="t-label">{t({ en: "Potential adaptation", zh: "可能的落地方式" })}</span>
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          {rows.map((r) => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={`grid ${COLS} gap-x-6 py-5 border-b border-line text-[13.5px] leading-[1.55] hover:bg-surface transition-colors`}
            >
              <div>
                <div className="font-medium text-ink">{t(r.product)}</div>
                <Badge tone="neutral" className="mt-2">
                  {t(DOMAIN_LABEL[r.domain])}
                </Badge>
                {r.provenance && (
                  <div className="mt-2">
                    <ProvenanceMark provenance={r.provenance} />
                  </div>
                )}
              </div>
              <div className="text-ink">{t(r.mechanism)}</div>
              <div className="text-ink-2">{t(r.whyItWorks)}</div>
              <div className="text-ink border-l border-accent pl-3">{t(r.insight)}</div>
              <div className="text-ink-2">{t(r.adaptation)}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stacked mobile variant */}
      <div className="lg:hidden mt-6 divide-y divide-line">
        <AnimatePresence initial={false} mode="popLayout">
          {rows.map((r) => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="py-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="t-h3">{t(r.product)}</div>
                <Badge tone="neutral">{t(DOMAIN_LABEL[r.domain])}</Badge>
              </div>
              <Spec
                className="mt-3"
                dense
                rows={[
                  { label: t({ en: "Mechanism", zh: "机制" }), value: t(r.mechanism) },
                  { label: t({ en: "Why", zh: "为何有效" }), value: t(r.whyItWorks) },
                  { label: t({ en: "Insight", zh: "洞察" }), value: <span className="text-accent-ink">{t(r.insight)}</span> },
                  { label: t({ en: "Adaptation", zh: "落地" }), value: t(r.adaptation) },
                  ...(r.provenance ? [{ label: t({ en: "Source", zh: "来源" }), value: <ProvenanceMark provenance={r.provenance} /> }] : []),
                ]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
