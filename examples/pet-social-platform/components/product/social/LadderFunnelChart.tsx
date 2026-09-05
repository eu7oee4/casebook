"use client";

import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ladderFunnel } from "@/data/social";
import { chart, axisProps } from "@/components/charts/theme";
import { ChartTip } from "@/components/ui/Tooltip";
import { useT } from "@/lib/locale-context";

export function LadderFunnelChart() {
  const t = useT();
  const data = ladderFunnel.map((d) => ({ step: t(d.step), users: d.users }));
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 48, bottom: 0, left: 0 }} barSize={18}>
        <XAxis type="number" hide domain={[0, 100]} />
        <YAxis type="category" dataKey="step" width={92} {...axisProps} axisLine={false} />
        <Tooltip
          cursor={{ fill: chart.wash }}
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const p = payload[0].payload as { step: string; users: number };
            return (
              <ChartTip
                title={p.step}
                rows={[{ label: t({ en: "of users who liked", zh: "占点赞用户的比例" }), value: `${p.users}%`, color: chart.accent }]}
              />
            );
          }}
        />
        <Bar dataKey="users" fill={chart.accent} radius={[0, 4, 4, 0]} isAnimationActive={false}>
          <LabelList
            dataKey="users"
            position="right"
            formatter={(v) => `${v}%`}
            style={{ fill: chart.ink2, fontSize: 11, fontFamily: "var(--font-mono)" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
