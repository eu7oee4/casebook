"use client";

import { useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { AnimatePresence, motion } from "motion/react";
import { ChartCard } from "@/components/ui/ChartCard";
import { ChartTip } from "@/components/ui/Tooltip";
import { Badge } from "@/components/ui/Tag";
import { Spec } from "@/components/ui/InsightCard";
import { chart, axisProps } from "@/components/charts/theme";
import type { Opportunity } from "@/data/insights";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/locale-context";

const COLOR: Record<Opportunity["priority"], string> = {
  P0: chart.accent,
  P1: chart.ink,
  P2: chart.neutral,
};

type ShapeProps = { cx?: number; cy?: number; payload?: Opportunity };

export function OpportunityMatrix({ items }: { items: Opportunity[] }) {
  const t = useT();
  const [selectedId, setSelectedId] = useState<string>(items[0]?.id);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const selected = items.find((o) => o.id === selectedId) ?? items[0];

  const renderShape = (props: unknown) => {
    const { cx = 0, cy = 0, payload } = props as ShapeProps;
    if (!payload) return <g />;
    const active = payload.id === selectedId || payload.id === hoverId;
    const color = COLOR[payload.priority];
    const labelRight = payload.complexity < 70;
    return (
      <g
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedId(payload.id)}
        onMouseEnter={() => setHoverId(payload.id)}
        onMouseLeave={() => setHoverId(null)}
        tabIndex={0}
        role="button"
        aria-label={`${t(payload.name)}, ${payload.priority}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setSelectedId(payload.id);
        }}
      >
        <circle cx={cx} cy={cy} r={16} fill="transparent" />
        {active && <circle cx={cx} cy={cy} r={10} fill={color} opacity={0.15} />}
        <circle cx={cx} cy={cy} r={active ? 6 : 5} fill={color} stroke={chart.surface} strokeWidth={2} />
        <text
          x={labelRight ? cx + 11 : cx - 11}
          y={cy + 4}
          textAnchor={labelRight ? "start" : "end"}
          fontSize={12}
          fontFamily="var(--font-sans)"
          fill={active ? chart.ink : chart.ink2}
          fontWeight={active ? 500 : 400}
        >
          {t(payload.name)}
        </text>
      </g>
    );
  };

  return (
    <div className="grid-12 gap-y-8">
      <div className="col-span-12 lg:col-span-8">
        <ChartCard
          title={t({ en: "Opportunity matrix", zh: "机会矩阵" })}
          question={t({
            en: "Which AI capabilities deliver the most user value for the least implementation complexity?",
            zh: "哪些 AI 能力能以最低的实现复杂度带来最高的用户价值？",
          })}
          legend={[
            { label: "P0", color: COLOR.P0 },
            { label: "P1", color: COLOR.P1 },
            { label: "P2", color: COLOR.P2 },
          ]}
          caption={t({
            en: "Positions are research judgements, not measurements. Top-left is the build-first quadrant; top-right is high value that must be sequenced.",
            zh: "位置是研究判断，不是测量值。左上是优先建设象限；右上是高价值但需要排序的部分。",
          })}
        >
          <div className="relative h-[420px]">
            {/* quadrant annotations */}
            <span className="absolute left-14 top-[30px] t-label pointer-events-none">{t({ en: "Quick wins", zh: "速赢" })}</span>
            <span className="absolute right-6 top-[30px] t-label pointer-events-none">{t({ en: "Strategic bets", zh: "战略押注" })}</span>
            <span className="absolute left-14 bottom-[62px] t-label pointer-events-none">{t({ en: "Fill-ins", zh: "补充项" })}</span>
            <span className="absolute right-6 bottom-[62px] t-label pointer-events-none">{t({ en: "Defer", zh: "延后" })}</span>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 24, right: 24, bottom: 24, left: 8 }}>
                <XAxis
                  type="number"
                  dataKey="complexity"
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  {...axisProps}
                  label={{
                    value: t({ en: "Implementation complexity →", zh: "实现复杂度 →" }),
                    position: "insideBottomRight",
                    offset: -14,
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    fill: chart.ink3,
                  }}
                />
                <YAxis
                  type="number"
                  dataKey="value"
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  {...axisProps}
                  width={40}
                  label={{
                    value: t({ en: "User value →", zh: "用户价值 →" }),
                    angle: -90,
                    position: "insideLeft",
                    offset: 12,
                    fontSize: 11,
                    fontFamily: "var(--font-mono)",
                    fill: chart.ink3,
                  }}
                />
                <ReferenceLine x={50} stroke={chart.grid} />
                <ReferenceLine y={50} stroke={chart.grid} />
                <Tooltip
                  cursor={false}
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    const o = payload[0].payload as Opportunity;
                    return (
                      <ChartTip
                        title={t(o.name)}
                        rows={[
                          { label: t({ en: "User value", zh: "用户价值" }), value: String(o.value) },
                          { label: t({ en: "Complexity", zh: "复杂度" }), value: String(o.complexity) },
                          { label: t({ en: "Priority", zh: "优先级" }), value: o.priority, color: COLOR[o.priority] },
                        ]}
                      />
                    );
                  }}
                />
                <Scatter data={items} shape={renderShape} isAnimationActive={false} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="border-t border-line pt-4 lg:sticky lg:top-8">
          <div className="t-label">{t({ en: "Selected opportunity", zh: "已选机会" })}</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22 }}
            >
              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="t-h3">{t(selected.name)}</h3>
                <Badge tone={selected.priority === "P0" ? "accent" : selected.priority === "P1" ? "ink" : "neutral"}>
                  {selected.priority}
                </Badge>
              </div>
              <div className="mt-4 flex gap-8">
                <div>
                  <div className="t-label">{t({ en: "Value", zh: "价值" })}</div>
                  <div className="t-metric-sm mt-1">{selected.value}</div>
                </div>
                <div>
                  <div className="t-label">{t({ en: "Complexity", zh: "复杂度" })}</div>
                  <div className="t-metric-sm mt-1">{selected.complexity}</div>
                </div>
              </div>
              <Spec
                className="mt-5"
                dense
                rows={[
                  { label: t({ en: "Rationale", zh: "理由" }), value: t(selected.rationale) },
                  ...(selected.dependsOn ? [{ label: t({ en: "Depends on", zh: "依赖" }), value: t(selected.dependsOn) }] : []),
                  { label: t({ en: "First milestone", zh: "首个里程碑" }), value: t(selected.firstMilestone) },
                ]}
              />
            </motion.div>
          </AnimatePresence>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {items.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(o.id)}
                  className={cn(
                    "rounded-sm border px-2 py-1 text-[12px] transition-colors",
                    o.id === selectedId ? "border-ink text-ink" : "border-line-2 text-ink-2 hover:border-ink hover:text-ink"
                  )}
                >
                  {t(o.name)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
