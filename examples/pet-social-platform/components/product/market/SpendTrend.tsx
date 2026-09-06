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
                    y={Number(y) + 4}
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
