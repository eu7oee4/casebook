"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Spec } from "@/components/ui/InsightCard";
import { Badge, Tag } from "@/components/ui/Tag";
import type { Capability } from "@/data/ai";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/locale-context";

export function CapabilityList({ items }: { items: Capability[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.index ?? null);
  const t = useT();

  return (
    <ol className="border-t border-ink">
      {items.map((c) => {
        const expanded = open === c.index;
        return (
          <li key={c.index} className="border-b border-line">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`cap-${c.index}`}
              onClick={() => setOpen(expanded ? null : c.index)}
              className="w-full grid grid-cols-[36px_1fr_auto] sm:grid-cols-[36px_minmax(0,280px)_1fr_auto] gap-x-6 gap-y-1 items-baseline py-5 text-left group"
            >
              <span className={cn("t-mono transition-colors", expanded ? "text-accent" : "text-ink-3")}>{c.index}</span>
              <span className={cn("t-h3 transition-colors", expanded ? "text-ink" : "text-ink group-hover:text-accent-ink")}>
                {t(c.name)}
              </span>
              <span className="hidden sm:block t-body-sm text-ink-2">{t(c.oneLiner)}</span>
              <span className="flex items-center gap-3 justify-self-end">
                <Badge tone={c.priority === "P0" ? "accent" : "neutral"}>{c.priority}</Badge>
                <span className="text-ink-3 group-hover:text-ink transition-colors">
                  {expanded ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
                </span>
              </span>
              <span className="sm:hidden col-start-2 t-body-sm text-ink-2">{t(c.oneLiner)}</span>
            </button>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={`cap-${c.index}`}
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-0 sm:pl-[60px] grid-12 gap-y-6">
                    <div className="col-span-12 lg:col-span-7">
                      <Spec
                        rows={[
                          { label: t({ en: "Problem", zh: "问题" }), value: t(c.problem) },
                          { label: t({ en: "AI capability", zh: "AI 能力" }), value: t(c.capability) },
                          { label: t({ en: "Mechanism", zh: "产品机制" }), value: t(c.mechanism) },
                          {
                            label: t({ en: "Data input", zh: "数据输入" }),
                            value: (
                              <span className="flex flex-wrap gap-1.5">
                                {c.dataInput.map((d) => (
                                  <Tag key={d.en} tone="outline">
                                    {t(d)}
                                  </Tag>
                                ))}
                              </span>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-6">
                      <div className="border-t border-accent pt-3">
                        <div className="t-label">{t({ en: "User value", zh: "用户价值" })}</div>
                        <p className="t-statement !text-[1.25rem] mt-2 text-ink">{t(c.userValue)}</p>
                      </div>
                      <div className="border-t border-ink pt-3">
                        <div className="t-label">{t({ en: "Business value", zh: "商业价值" })}</div>
                        <p className="t-body-sm text-ink-2 mt-2">{t(c.businessValue)}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
