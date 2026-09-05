"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { competitors, tiers, type Tier } from "@/data/competitors";
import { Tabs } from "@/components/ui/Tabs";
import { ChartCard } from "@/components/ui/ChartCard";
import { useT } from "@/lib/locale-context";
import { CompetitorMap, TIER_COLOR, TIER_LABEL } from "./CompetitorMap";
import { CompetitorCard } from "./CompetitorCard";

type Filter = Tier | "all";

export function CompetitorExplorer() {
  const t = useT();
  const [tier, setTier] = useState<Filter>("all");
  const visible = useMemo(() => (tier === "all" ? competitors : competitors.filter((c) => c.tier === tier)), [tier]);
  const active = tiers.find((x) => x.value === tier)!;

  const legend = (Object.keys(TIER_COLOR) as Tier[]).map((k) => ({ label: t(TIER_LABEL[k]), color: TIER_COLOR[k] }));

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <Tabs
          ariaLabel={t({ en: "Competitor tiers", zh: "竞品层级" })}
          value={tier}
          onChange={setTier}
          items={tiers.map((x) => ({
            value: x.value,
            label: t(x.label),
            count: x.value === "all" ? competitors.length : competitors.filter((c) => c.tier === x.value).length,
          }))}
          className="flex-1 min-w-[280px]"
        />
        <AnimatePresence mode="wait">
          <motion.p
            key={tier}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="t-caption max-w-[44ch] pb-3"
          >
            {t(active.description)}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-10 grid-12 gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <ChartCard
            title={t({ en: "Competition map", zh: "竞争地图" })}
            question={t({
              en: "Who owns which part of the lifecycle — and where is nobody?",
              zh: "谁占据了生命周期的哪一段——哪里还没有人？",
            })}
            height={460}
            legend={legend}
            illustrative={false}
            caption={t({
              en: "Positions are research judgements. Filtering fades the other tiers rather than removing them, so positions stay comparable.",
              zh: "位置来自研究判断。筛选时其他层级只是淡化而非移除，以保持位置可比。",
            })}
          >
            <CompetitorMap competitors={competitors} activeTier={tier} />
          </ChartCard>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-baseline justify-between border-t border-line pt-4">
            <div className="text-[14px] font-medium">{t({ en: "Products", zh: "产品" })}</div>
            <div className="t-label">
              {visible.length} {t({ en: "of", zh: "/" })} {competitors.length}
            </div>
          </div>
          <motion.ul layout className="mt-2">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((c) => (
                <CompetitorCard key={c.id} competitor={c} />
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
