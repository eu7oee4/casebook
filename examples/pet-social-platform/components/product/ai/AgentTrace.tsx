"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale, useT } from "@/lib/locale-context";
import type { Str, Text } from "@/lib/i18n";

export type TraceStep = { step: Str; tool: string; result: Str };

export function AgentTrace({
  query,
  steps,
  intervalMs = 600,
}: {
  /** Bilingual query: the active locale is the main quote, the other language is shown small beneath. */
  query: Text;
  steps: TraceStep[];
  intervalMs?: number;
}) {
  const t = useT();
  const locale = useLocale();
  const mainQuery = query[locale];
  const otherQuery = locale === "zh" ? query.en : query.zh;
  const [current, setCurrent] = useState<number>(-1);
  const [running, setRunning] = useState(false);
  const done = current >= steps.length - 1;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      setCurrent((c) => {
        const next = c + 1;
        if (next >= steps.length - 1) setRunning(false);
        return Math.min(next, steps.length - 1);
      });
    }, intervalMs);
    return () => clearTimeout(t);
  }, [running, current, steps.length, intervalMs]);

  const run = () => {
    if (done) setCurrent(-1);
    setRunning(true);
  };
  const reset = () => {
    setRunning(false);
    setCurrent(-1);
  };

  return (
    <div className="grid-12 gap-y-8">
      {/* Left: query + steps */}
      <div className="col-span-12 lg:col-span-5">
        <div className="border-t border-ink pt-4">
          <div className="t-label">{t({ en: "User", zh: "用户" })}</div>
          <p className="t-statement mt-2">“{mainQuery}”</p>
          <p className="t-annotation mt-2">{otherQuery}</p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={run}
            disabled={running}
            className={cn(
              "inline-flex items-center gap-2 rounded-sm px-3 py-2 text-[13px] font-medium transition-colors",
              running ? "bg-wash text-ink-3" : "bg-ink text-surface hover:bg-accent"
            )}
          >
            <Play size={13} strokeWidth={1.75} />
            {running
              ? t({ en: "Running…", zh: "运行中…" })
              : done
                ? t({ en: "Run again", zh: "再运行一次" })
                : t({ en: "Run agent", zh: "运行 Agent" })}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-sm px-3 py-2 text-[13px] text-ink-2 hover:text-ink border border-line-2 hover:border-ink transition-colors"
          >
            <RotateCcw size={13} strokeWidth={1.75} />
            {t({ en: "Reset", zh: "重置" })}
          </button>
          <span className="t-label ml-auto tabular">
            {Math.max(current + 1, 0)} / {steps.length}
          </span>
        </div>

        <ol className="mt-6 border-t border-line">
          {steps.map((s, i) => {
            const state = i < current ? "done" : i === current ? "current" : "todo";
            return (
              <li key={s.tool + i} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => {
                    setRunning(false);
                    setCurrent(i);
                  }}
                  aria-current={state === "current" ? "step" : undefined}
                  className={cn(
                    "w-full grid grid-cols-[20px_28px_1fr_auto] items-center gap-3 py-2.5 text-left transition-colors group",
                    state === "todo" ? "text-ink-3 hover:text-ink" : "text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "h-[9px] w-[9px] rounded-full border flex items-center justify-center transition-colors",
                      state === "done" && "bg-ink border-ink",
                      state === "current" && "bg-accent border-accent",
                      state === "todo" && "border-line-2 group-hover:border-ink"
                    )}
                    aria-hidden
                  />
                  <span className={cn("t-mono", state === "current" ? "text-accent" : "text-ink-3")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("text-[14px]", state === "current" && "font-medium")}>{t(s.step)}</span>
                  <span className="t-mono text-ink-3 hidden sm:block">{s.tool}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Right: trace panel */}
      <div className="col-span-12 lg:col-span-7">
        <div className="rounded-md border border-line bg-surface min-h-[420px] flex flex-col">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <span className="t-label">{t({ en: "Agent trace", zh: "Agent 追踪" })} · pet-care-agent</span>
            <span className="inline-flex items-center gap-2 t-label">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  running ? "bg-accent animate-pulse" : done ? "bg-ink" : "bg-line-2"
                )}
              />
              {running
                ? t({ en: "running", zh: "运行中" })
                : done
                  ? t({ en: "completed", zh: "已完成" })
                  : current >= 0
                    ? t({ en: "paused", zh: "已暂停" })
                    : t({ en: "idle", zh: "空闲" })}
            </span>
          </div>
          <div className="px-4 py-4 font-mono text-[12.5px] leading-[1.7] flex-1">
            <div className="text-ink-3">
              <span className="text-accent">›</span> {t({ en: "user", zh: "用户" })}: {mainQuery}
            </div>
            <AnimatePresence initial={false}>
              {steps.slice(0, current + 1).map((s, i) => (
                <motion.div
                  key={s.tool + i}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cn("mt-3 grid grid-cols-[18px_1fr] gap-x-2", i === current && "text-ink")}
                >
                  <span className={cn("mt-[5px] flex items-start", i < current ? "text-ink-3" : "text-accent")}>
                    {i < current ? <Check size={12} strokeWidth={2} /> : <span className="h-[7px] w-[7px] rounded-full bg-accent mt-[3px]" />}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className={cn(i < current ? "text-ink-2" : "text-ink")}>{t(s.step)}</span>
                      <span className="text-ink-3">
                        {t({ en: "call", zh: "调用" })} <span className="text-ink-2">{s.tool}()</span>
                      </span>
                    </div>
                    <div className="text-ink-2 pl-3 border-l border-line mt-0.5">→ {t(s.result)}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {current < 0 && (
              <div className="mt-6 text-ink-3">
                {t({ en: "Press", zh: "点击" })} <span className="text-ink">{t({ en: "Run agent", zh: "运行 Agent" })}</span>{" "}
                {t({ en: "or select a step to inspect the trace.", zh: "或选择任一步骤查看追踪。" })}
              </div>
            )}
            {done && !running && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 pt-3 border-t border-line text-ink"
              >
                <span className="text-accent">✓</span>{" "}
                {t({ en: "Task complete · 9 steps · 6 tools · 1 confirmation", zh: "任务完成 · 9 步 · 6 个工具 · 1 次确认" })}
              </motion.div>
            )}
          </div>
        </div>
        <p className="t-annotation mt-3 max-w-[60ch]">
          {t({
            en: "Mock trace. Every tool is an existing product capability (search, filter, rank, book) exposed to the agent; the only step that needs the user is the one with a side effect.",
            zh: "模拟追踪。每个工具都是暴露给 Agent 的现有产品能力（搜索、筛选、排序、预订）；唯一需要用户参与的一步，是那个有副作用的操作。",
          })}
        </p>
      </div>
    </div>
  );
}
