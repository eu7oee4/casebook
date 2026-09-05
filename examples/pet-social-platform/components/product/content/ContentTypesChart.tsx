"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chart, axisProps, gridProps } from "@/components/charts/theme";
import { ChartTip } from "@/components/ui/Tooltip";
import { contentTypes } from "@/data/content";
import { useT } from "@/lib/locale-context";

type Row = { id: string; type: string; intent: string; signal: string; share: number };

export function ContentTypesChart() {
  const t = useT();
  const data: Row[] = [...contentTypes]
    .sort((a, b) => b.share - a.share)
    .map((c) => ({ id: c.id, type: t(c.type), intent: t(c.intent), signal: t(c.signal), share: c.share }));
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 0 }} barCategoryGap={10}>
        <CartesianGrid {...gridProps} horizontal={false} vertical />
        <XAxis type="number" domain={[0, 40]} tickFormatter={(v) => `${v}%`} {...axisProps} axisLine={false} ticks={[0, 10, 20, 30, 40]} />
        <YAxis
          type="category"
          dataKey="type"
          width={96}
          {...axisProps}
          axisLine={false}
          tick={{ fill: chart.ink2, fontSize: 12, fontFamily: "var(--font-sans)" }}
        />
        <Tooltip
          cursor={{ fill: chart.wash }}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const row = payload[0].payload as Row;
            return (
              <ChartTip
                title={row.type}
                rows={[
                  { label: t({ en: "Share of posts", zh: "帖子占比" }), value: `${row.share}%`, color: chart.accent },
                  { label: t({ en: "Signal", zh: "信号" }), value: row.signal },
                ]}
              />
            );
          }}
        />
        <Bar dataKey="share" fill={chart.accent} maxBarSize={22} radius={[0, 4, 4, 0]} isAnimationActive={false}>
          <LabelList
            dataKey="share"
            position="right"
            formatter={(v: unknown) => `${v}%`}
            style={{ fill: chart.ink2, fontSize: 11, fontFamily: "var(--font-mono)" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
