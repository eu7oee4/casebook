"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Play, RotateCcw } from "lucide-react";
import type { WorkflowStep, Service } from "@/data/services";
import type { Str } from "@/lib/i18n";
import { useT } from "@/lib/locale-context";
import { Tag } from "@/components/ui/Tag";
import { ServiceCard } from "./ServiceCard";
import { cn } from "@/lib/utils";

export type BookingInfo = {
  merchant: Str;
  service: Str;
  pet: Str;
  time: Str;
  price: Str;
  notes: Str;
  status: Str;
};

type Props = {
  query: Str;
  queryNote?: Str;
  context: Array<{ label: Str; value: Str }>;
  steps: WorkflowStep[];
  services: Service[];
  booking: BookingInfo;
  autoMs?: number;
};

/** Interactive agent workflow: click steps or run it; each step reveals its mock output. */
export function AgentWorkflow({ query, queryNote, context, steps, services, booking, autoMs = 700 }: Props) {
  const t = useT();
  const [active, setActive] = useState<number>(-1);
  const [done, setDone] = useState<number>(-1); // highest completed index
  const [running, setRunning] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!running) return;
    const next = active + 1;
    timer.current = setTimeout(() => {
      if (next >= steps.length) {
        setRunning(false);
        return;
      }
      setActive(next);
      setDone((d) => Math.max(d, next));
    }, active === -1 ? 200 : autoMs);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [running, active, steps.length, autoMs]);

  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    setRunning(false);
    setActive(-1);
    setDone(-1);
    setConfirmed(false);
  };

  const run = () => {
    reset();
    setRunning(true);
  };

  const select = (i: number) => {
    if (timer.current) clearTimeout(timer.current);
    setRunning(false);
    setActive(i);
    setDone((d) => Math.max(d, i));
  };

  const step = active >= 0 ? steps[active] : null;

  return (
    <div>
      {/* Input */}
      <div className="grid-12 gap-y-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="t-label">{t({ en: "User input", zh: "用户输入" })}</div>
          <p className="t-statement mt-3">“{t(query)}”</p>
          {queryNote && <p className="t-annotation mt-2">{t(queryNote)}</p>}
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="t-label">{t({ en: "Context the agent reads", zh: "Agent 读取的上下文" })}</div>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            {context.map((c) => (
              <div key={typeof c.label === "string" ? c.label : c.label.en} className="border-t border-line pt-2">
                <dt className="t-label">{t(c.label)}</dt>
                <dd className="text-[13.5px] leading-5 mt-0.5">{t(c.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-5">
        <div className="t-label-ink">{t({ en: "Agent workflow", zh: "Agent 工作流" })}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={run}
            disabled={running}
            className={cn(
              "t-label inline-flex items-center gap-1.5 rounded-sm border px-3 py-2 transition-colors",
              running ? "border-line text-ink-3" : "border-accent bg-accent text-surface hover:bg-accent-ink"
            )}
          >
            <Play size={12} strokeWidth={1.75} />{" "}
            {running ? t({ en: "Running", zh: "运行中" }) : t({ en: "Run workflow", zh: "运行工作流" })}
          </button>
          <button
            type="button"
            onClick={reset}
            className="t-label inline-flex items-center gap-1.5 rounded-sm border border-line-2 px-3 py-2 text-ink hover:border-ink transition-colors"
          >
            <RotateCcw size={12} strokeWidth={1.5} /> {t({ en: "Reset", zh: "重置" })}
          </button>
        </div>
      </div>

      {/* Stepper */}
      <ol className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
        {steps.map((s, i) => {
          const isActive = i === active;
          const isDone = i <= done && !isActive;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => select(i)}
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "w-full text-left border-t pt-3 transition-colors group",
                  isActive ? "border-accent" : isDone ? "border-ink" : "border-line-2 hover:border-ink"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("t-mono", isActive ? "text-accent" : "text-ink-3")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {isDone && <Check size={12} strokeWidth={1.75} className="text-ink" />}
                  {isActive && running && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
                  )}
                </div>
                <div className={cn("mt-1.5 text-[14px] font-medium leading-5", isActive ? "text-accent-ink" : "text-ink")}>
                  {t(s.label)}
                </div>
                <div className="t-annotation mt-0.5 hidden sm:block">{t(s.description)}</div>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Output panel */}
      <div className="mt-8 min-h-[220px] border border-line rounded-md bg-surface">
        <AnimatePresence mode="wait">
          {step ? (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="t-mono text-accent">{String(active + 1).padStart(2, "0")}</span>
                  <span className="t-label-ink">{t(step.output.title)}</span>
                </div>
                <span className="t-annotation">
                  {t(step.verb)} · {t({ en: "mock output", zh: "模拟输出" })}
                </span>
              </div>
              <div className="mt-5">
                <StepOutput
                  step={step}
                  services={services}
                  booking={booking}
                  confirmed={confirmed}
                  onConfirm={() => setConfirmed(true)}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-7 flex flex-col items-start justify-center min-h-[220px]"
            >
              <div className="t-label">{t({ en: "Waiting", zh: "等待中" })}</div>
              <p className="t-body-sm text-ink-2 mt-2 max-w-[48ch]">
                {t({
                  en: "Select a step to inspect what the agent produces at that point, or run the whole workflow to watch a sentence become a booking.",
                  zh: "点选任一步骤查看 Agent 在该节点的产出，或运行整个工作流，看一句话如何变成一次预订。",
                })}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function StepOutput({
  step,
  services,
  booking,
  confirmed,
  onConfirm,
}: {
  step: WorkflowStep;
  services: Service[];
  booking: BookingInfo;
  confirmed: boolean;
  onConfirm: () => void;
}) {
  const t = useT();
  const o = step.output;
  switch (o.kind) {
    case "pairs":
      return (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {o.pairs?.map((p, i) => (
            <motion.div
              key={p.key.en}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="grid grid-cols-[112px_1fr] gap-4 py-2.5 border-b border-line"
            >
              <dt className="t-label pt-[3px]">{t(p.key)}</dt>
              <dd className="text-[14px] leading-6">{t(p.value)}</dd>
            </motion.div>
          ))}
        </dl>
      );
    case "count":
      return (
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="t-metric">{o.count}</span>
          <span className="t-body-sm text-ink-2 max-w-[40ch]">{o.countLabel && t(o.countLabel)}</span>
        </div>
      );
    case "list":
      return (
        <div>
          <div className="flex flex-wrap gap-2">
            {o.items?.map((it, i) => (
              <motion.span
                key={it.en}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Tag tone="outline" className="!text-[13px] !py-1.5 !px-2.5">
                  {t(it)}
                </Tag>
              </motion.span>
            ))}
          </div>
          <p className="t-annotation mt-4">
            {t({
              en: "12 → 5 candidates. Hard constraints (distance, price, slot) are applied before soft preferences (rating, handling).",
              zh: "12 → 5 家候选。先应用硬约束（距离、价格、时段），再应用软偏好（评分、护理方式）。",
            })}
          </p>
        </div>
      );
    case "services":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </div>
      );
    case "booking":
      return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
          <dl className="divide-y divide-line border-t border-ink">
            {(
              [
                [{ en: "Merchant", zh: "商家" }, booking.merchant],
                [{ en: "Service", zh: "服务" }, booking.service],
                [{ en: "Pet", zh: "宠物" }, booking.pet],
                [{ en: "Time", zh: "时间" }, booking.time],
                [{ en: "Price", zh: "价格" }, booking.price],
                [{ en: "Notes", zh: "备注" }, booking.notes],
              ] as Array<[{ en: string; zh: string }, Str]>
            ).map(([k, v]) => (
              <div key={k.en} className="grid grid-cols-[112px_1fr] gap-4 py-2.5">
                <dt className="t-label pt-[3px]">{t(k)}</dt>
                <dd className="text-[14px] leading-6">{t(v)}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:w-[260px] lg:pt-2">
            <AnimatePresence mode="wait">
              {confirmed ? (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-t border-accent pt-3"
                >
                  <div className="inline-flex items-center gap-1.5 t-label-ink text-accent-ink">
                    <Check size={12} strokeWidth={1.75} /> {t({ en: "Booked", zh: "已预订" })}
                  </div>
                  <p className="text-[14px] leading-6 mt-2">
                    {t({ en: "Saturday 09:30 at", zh: "周六 09:30 ·" })} {t(booking.merchant).split(" · ")[0]}
                    {t({ en: ".", zh: "。" })}
                  </p>
                  <p className="t-annotation mt-2">
                    {t({
                      en: "Pet profile and vaccination record shared with the merchant. Reminder set for Friday evening. The outcome feeds back into ranking.",
                      zh: "宠物档案与疫苗记录已同步给商家。已设置周五晚提醒。本次结果会回流到排序模型。",
                    })}
                  </p>
                </motion.div>
              ) : (
                <motion.div key="hold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-line-2 pt-3">
                  <div className="t-label">{t(booking.status)}</div>
                  <button
                    type="button"
                    onClick={onConfirm}
                    className="mt-3 t-label inline-flex items-center gap-1.5 rounded-sm border border-accent bg-accent text-surface px-3 py-2 hover:bg-accent-ink transition-colors"
                  >
                    {t({ en: "Confirm booking", zh: "确认预订" })}
                  </button>
                  <p className="t-annotation mt-3">
                    {t({
                      en: "Side effects always wait for the user. The agent holds the slot; the user commits.",
                      zh: "有副作用的操作永远等待用户。Agent 锁定时段，用户做最终决定。",
                    })}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      );
    default:
      return <p className="t-body-sm">{o.text && t(o.text)}</p>;
  }
}
