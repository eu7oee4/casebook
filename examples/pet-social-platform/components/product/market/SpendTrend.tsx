"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { spendTrend } from "@/data/market";
import { chart, axisProps, gridProps } from "@/components/charts/theme";
import { ChartTip } from "@/components/ui/Tooltip";
import { useT } from "@/lib/locale-context";
import type { Text } from "@/lib/i18n";

const SERIES: ReadonlyArray<{ key: "services" | "health" | "food"; label: Text; color: string }> = [
  { key: "services", label: { en: "Services", zh: "服务" }, color: chart.series[0] },
  { key: "health", label: { en: "Health", zh: "健康" }, color: chart.series[1] },
  { key: "food", label: { en: "Food", zh: "食品" }, color: chart.series[2] },
];

// Y domain follows the data: pad to the nearest tick step so the lines fill the plot instead of
// hugging one edge (the old hard-coded [80, 260] assumed a much steeper hypothesis series).
const yValues = spendTrend.flatMap((d) => [d.food, d.services, d.health]);
const yLo = Math.floor((Math.min(...yValues) - 5) / 10) * 10;
const yHi = Math.ceil((Math.max(...yValues) + 5) / 10) * 10;
const yStep = yHi - yLo > 100 ? 50 : 10;
const yTicks: number[] = [];
for (let v = yLo; v <= yHi; v += yStep) yTicks.push(v);

// End-of-line labels collide when series finish near the same value (services and health both end
// at 110). Spread colliding labels apart in value space, recentred on the group, and convert the
// displacement to a pixel dy. Pixel scale is approximate (chart height 300 minus margins/axis).
const lastIdx = spendTrend.length - 1;
const PX_PER_UNIT = 254 / (yHi - yLo);
const MIN_GAP = 13 / PX_PER_UNIT;
const placed = SERIES.map((s) => ({ key: s.key, v: spendTrend[lastIdx][s.key], adj: 0, group: 0 }))
  .sort((a, b) => b.v - a.v)
  .map((f, i, arr) => {
    const prev = i > 0 ? arr[i - 1] : undefined;
    f.adj = prev && prev.adj - f.v < MIN_GAP ? prev.adj - MIN_GAP : f.v;
    f.group = prev ? (prev.adj - f.v < MIN_GAP ? prev.group : prev.group + 1) : 0;
    return f;
  });
for (let g = 0; g <= placed[placed.length - 1].group; g++) {
  const members = placed.filter((p) => p.group === g);
  const shift = members.reduce((s, m) => s + (m.v - m.adj), 0) / members.length;
  members.forEach((m) => (m.adj += shift));
}
const LABEL_DY = Object.fromEntries(placed.map((p) => [p.key, Math.round((p.v - p.adj) * PX_PER_UNIT)]));

type TipProps = {
  active?: boolean;
  payload?: Array<{ dataKey?: string | number; value?: number | string; color?: string }>;
  label?: string | number;
};

function Tip({ active, payload, label }: TipProps) {
  const t = useT();
  if (!active || !payload?.length) return null;
  const rows = SERIES.map((s) => {
    const p = payload.find((x) => x.dataKey === s.key);
    return { label: t(s.label), value: p ? String(p.value) : "—", color: s.color };
  });
  return <ChartTip title={String(label)} rows={rows} />;
}

export function SpendTrend() {
  const t = useT();
  const last = spendTrend.length - 1;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={spendTrend} margin={{ top: 12, right: 88, bottom: 4, left: -8 }}>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="year" {...axisProps} interval={0} />
        <YAxis {...axisProps} axisLine={false} domain={[yLo, yHi]} ticks={yTicks} width={40} />
        <Tooltip content={<Tip />} cursor={{ stroke: chart.axis, strokeWidth: 1 }} />
        {SERIES.map((s) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            stroke={s.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, stroke: chart.surface, strokeWidth: 2, fill: s.color }}
            isAnimationActive={false}
          >
            <LabelList
              dataKey={s.key}
              position="right"
              content={(props) => {
                const { x, y, index } = props as { x?: number; y?: number; index?: number };
                if (index !== last || x === undefined || y === undefined) return null;
                return (
                  <text
                    x={Number(x) + 10}
                    y={Number(y) + 4 + (LABEL_DY[s.key] ?? 0)}
                    fontSize={11}
                    fontFamily="var(--font-mono)"
                    fill={chart.ink2}
                  >
                    {t(s.label)} {spendTrend[last][s.key]}
                  </text>
                );
              }}
            />
          </Line>
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
