"use client";

import {
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Competitor, Tier } from "@/data/competitors";
import { chart, axisProps } from "@/components/charts/theme";
import { ChartTip } from "@/components/ui/Tooltip";
import { useT } from "@/lib/locale-context";
import type { Text } from "@/lib/i18n";

export const TIER_COLOR: Record<Tier, string> = {
  direct: chart.accent,
  industry: chart.series[2],
  benchmark: chart.series[1],
};
export const TIER_LABEL: Record<Tier, Text> = {
  direct: { en: "Direct · pet social", zh: "直接竞品 · 宠物社交" },
  industry: { en: "Pet industry", zh: "宠物行业" },
  benchmark: { en: "Benchmark", zh: "跨界参考" },
};
/** Short badge form of the tier label. */
export const TIER_SHORT: Record<Tier, Text> = {
  direct: { en: "Direct", zh: "直接竞品" },
  industry: { en: "Pet industry", zh: "宠物行业" },
  benchmark: { en: "Benchmark", zh: "跨界参考" },
};

/** Vertical nudge for labels that would otherwise collide (px), keyed by competitor id. */
const LABEL_DY: Record<string, number> = {
  meituan: 13,
};

type TipProps = { active?: boolean; payload?: Array<{ payload: Competitor }> };

function Tip({ active, payload }: TipProps) {
  const t = useT();
  if (!active || !payload?.length) return null;
  const c = payload[0].payload;
  return (
    <ChartTip
      title={t(TIER_LABEL[c.tier])}
      rows={[
        { label: t(c.name), value: "", color: TIER_COLOR[c.tier] },
        { label: t({ en: "Content → Service", zh: "内容 → 服务" }), value: String(c.x) },
        { label: t({ en: "Utility → Social", zh: "工具 → 社交" }), value: String(c.y) },
      ]}
    />
  );
}

export function CompetitorMap({
  competitors,
  activeTier,
}: {
  competitors: Competitor[];
  activeTier: Tier | "all";
}) {
  const t = useT();
  const isActive = (c: Competitor) => activeTier === "all" || c.tier === activeTier;
  return (
    <div className="relative h-full w-full">
      <span className="t-label pointer-events-none absolute left-[60px] top-[34px] hidden sm:block">
        {t({ en: "Social · content", zh: "社交 · 内容" })}
      </span>
      <span className="t-label pointer-events-none absolute right-[36px] top-[34px] text-right text-accent-ink">
        <span className="hidden md:inline">{t({ en: "High service × high social — ", zh: "高服务 × 高社交 — " })}</span>
        {t({ en: "unoccupied", zh: "无人占据" })}
      </span>
      <span className="t-label pointer-events-none absolute left-[60px] bottom-[66px] hidden sm:block">
        {t({ en: "Individual · content", zh: "个人 · 内容" })}
      </span>
      <span className="t-label pointer-events-none absolute right-[36px] bottom-[66px] text-right hidden sm:block">
        {t({ en: "Individual · service", zh: "个人 · 服务" })}
      </span>
      <span className="t-label pointer-events-none absolute left-[2px] top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
        {t({ en: "Utility → Social", zh: "工具 → 社交" })}
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 28, right: 28, bottom: 28, left: 8 }}>
          <XAxis
            type="number"
            dataKey="x"
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            tickFormatter={(v) =>
              v === 0 ? t({ en: "Content", zh: "内容" }) : v === 100 ? t({ en: "Service", zh: "服务" }) : ""
            }
            {...axisProps}
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            tickFormatter={() => ""}
            {...axisProps}
            width={44}
          />
          <ReferenceLine x={50} stroke={chart.axis} strokeWidth={1} />
          <ReferenceLine y={50} stroke={chart.axis} strokeWidth={1} />
          <Tooltip content={<Tip />} cursor={false} />
          <Scatter data={competitors} isAnimationActive={false}>
            {competitors.map((c) => (
              <Cell
                key={c.id}
                fill={isActive(c) ? TIER_COLOR[c.tier] : chart.neutral}
                fillOpacity={isActive(c) ? 1 : 0.45}
                stroke={chart.surface}
                strokeWidth={2}
                r={isActive(c) ? 7 : 5}
                style={{ transition: "fill 240ms, r 240ms" }}
              />
            ))}
            <LabelList
              dataKey="id"
              content={(props) => {
                const { x, y, index } = props as { x?: number; y?: number; index?: number };
                if (x === undefined || y === undefined || index === undefined) return null;
                const c = competitors[index];
                const right = c.x < 72;
                const active = isActive(c);
                return (
                  <text
                    x={Number(x) + (right ? 12 : -12)}
                    y={Number(y) + (LABEL_DY[c.id] ?? 4)}
                    textAnchor={right ? "start" : "end"}
                    fontSize={11.5}
                    fontFamily="var(--font-sans)"
                    fill={active ? chart.ink : chart.ink3}
                    fillOpacity={active ? 1 : 0.7}
                    style={{ transition: "fill 240ms" }}
                  >
                    {t(c.name)}
                  </text>
                );
              }}
            />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
