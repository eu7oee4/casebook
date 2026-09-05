"use client";

import {
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";
import { valueMatrix, type ValueKind, type ValuePoint } from "@/data/market";
import { chart, axisProps } from "@/components/charts/theme";
import { ChartTip } from "@/components/ui/Tooltip";
import { useT } from "@/lib/locale-context";
import type { Text } from "@/lib/i18n";

export const KIND: Record<ValueKind, { label: Text; color: string }> = {
  service: { label: { en: "Service", zh: "服务" }, color: chart.ink },
  content: { label: { en: "Content", zh: "内容" }, color: chart.accent },
  social: { label: { en: "Social", zh: "社交" }, color: chart.series[1] },
  local: { label: { en: "Local", zh: "本地" }, color: chart.series[2] },
};

type TipProps = { active?: boolean; payload?: Array<{ payload: ValuePoint }> };

function Tip({ active, payload }: TipProps) {
  const t = useT();
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <ChartTip
      title={t(p.name)}
      rows={[
        { label: t({ en: "Functional", zh: "功能价值" }), value: String(p.x) },
        { label: t({ en: "Emotional", zh: "情感价值" }), value: String(p.y) },
        { label: t({ en: "Kind", zh: "类型" }), value: t(KIND[p.kind].label), color: KIND[p.kind].color },
      ]}
    />
  );
}

const QUADRANTS: Array<{ text: Text; cls: string }> = [
  { text: { en: "Emotional only", zh: "仅情感价值" }, cls: "left-[52px] top-[6px]" },
  { text: { en: "Both · the loop", zh: "两者兼具 · 闭环所在" }, cls: "right-[36px] top-[6px] text-right" },
  { text: { en: "Neither", zh: "两者皆弱" }, cls: "left-[52px] bottom-[52px]" },
  { text: { en: "Functional only", zh: "仅功能价值" }, cls: "right-[36px] bottom-[52px] text-right" },
];

export function ValueMatrix() {
  const t = useT();
  return (
    <div className="relative h-full w-full">
      {QUADRANTS.map((q) => (
        <span key={q.text.en} className={`t-label pointer-events-none absolute ${q.cls}`}>
          {t(q.text)}
        </span>
      ))}
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 24, right: 32, bottom: 24, left: 8 }}>
          <CartesianGrid stroke={chart.grid} strokeWidth={1} horizontal={false} vertical={false} />
          <XAxis
            type="number"
            dataKey="x"
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            {...axisProps}
            label={{
              value: t({ en: "Functional value →", zh: "功能价值 →" }),
              position: "insideBottomRight",
              offset: -14,
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              fill: chart.ink3,
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={[0, 100]}
            ticks={[0, 50, 100]}
            {...axisProps}
            width={36}
            label={{
              value: t({ en: "Emotional value →", zh: "情感价值 →" }),
              angle: -90,
              position: "insideLeft",
              offset: 0,
              fontSize: 11,
              fontFamily: "var(--font-mono)",
              fill: chart.ink3,
            }}
          />
          <ReferenceLine x={50} stroke={chart.axis} strokeWidth={1} />
          <ReferenceLine y={50} stroke={chart.axis} strokeWidth={1} />
          <Tooltip content={<Tip />} cursor={false} />
          <Scatter data={valueMatrix} isAnimationActive={false}>
            {valueMatrix.map((p) => (
              <Cell key={p.id} fill={KIND[p.kind].color} stroke={chart.surface} strokeWidth={2} r={4 + p.size * 2} />
            ))}
            <LabelList
              dataKey="id"
              content={(props) => {
                const { x, y, index } = props as { x?: number; y?: number; index?: number };
                if (x === undefined || y === undefined || index === undefined) return null;
                const p = valueMatrix[index];
                const right = p.x < 70;
                return (
                  <text
                    x={Number(x) + (right ? 12 : -12)}
                    y={Number(y) + 4}
                    textAnchor={right ? "start" : "end"}
                    fontSize={11.5}
                    fill={chart.ink2}
                    fontFamily="var(--font-sans)"
                  >
                    {t(p.name)}
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
