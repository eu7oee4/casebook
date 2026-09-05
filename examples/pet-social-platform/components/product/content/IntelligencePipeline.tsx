"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, RotateCcw, ArrowRight, ArrowDown } from "lucide-react";
import { pipeline } from "@/data/content";
import { Tag } from "@/components/ui/Tag";
import { useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const ENTITY_STAGE = 2;

function parseEntities(example: string): Array<{ key: string; value: string }> {
  return example.split("·").map((s) => {
    const [key, ...rest] = s.trim().split(":");
    return { key: key.trim(), value: rest.join(":").trim() };
  });
}

export function IntelligencePipeline() {
  const t = useT();
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const [visited, setVisited] = useState<number[]>([0]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setRunning(false);
  }, []);

  useEffect(() => {
    if (!running) return;
    timer.current = setTimeout(() => {
      if (active >= pipeline.length - 1) {
        setRunning(false);
        return;
      }
      const n = active + 1;
      setActive(n);
      setVisited((v) => (v.includes(n) ? v : [...v, n]));
    }, 900);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [running, active]);

  const select = (i: number) => {
    stop();
    setActive(i);
    setVisited((v) => (v.includes(i) ? v : [...v, i]));
  };

  const run = () => {
    stop();
    setActive(0);
    setVisited([0]);
    setRunning(true);
  };

  const reset = () => {
    stop();
    setActive(0);
    setVisited([0]);
  };

  const stage = pipeline[active];
  const example = t(stage.example);

  return (
    <div className="border-t border-ink pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="t-label">{t({ en: "Worked example", zh: "实例演示" })}</div>
          <div className="text-[14px] mt-1 text-ink-2">
            {t({ en: "One post, traced from upload to service intent.", zh: "追踪一条帖子，从上传到服务意图。" })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={run}
            disabled={running}
            className={cn(
              "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 t-label transition-colors",
              running ? "border-line text-ink-3" : "border-ink text-ink hover:bg-ink hover:text-surface"
            )}
          >
            <Play size={11} strokeWidth={1.5} />{" "}
            {running ? t({ en: "Tracing…", zh: "追踪中…" }) : t({ en: "Trace the post", zh: "追踪这条帖子" })}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 t-label text-ink-2 hover:text-ink hover:border-line-2 transition-colors"
          >
            <RotateCcw size={11} strokeWidth={1.5} /> {t({ en: "Reset", zh: "重置" })}
          </button>
        </div>
      </div>

      <div className="mt-8 grid-12 gap-y-8">
        {/* Stages */}
        <ol className="col-span-12 lg:col-span-5 flex flex-col" role="tablist" aria-label={t({ en: "Pipeline stages", zh: "流水线阶段" })}>
          {pipeline.map((p, i) => {
            const isActive = i === active;
            const isVisited = visited.includes(i);
            return (
              <li key={p.id} className="flex flex-col">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(i)}
                  onMouseEnter={() => !running && select(i)}
                  className={cn(
                    "group grid grid-cols-[28px_1fr] gap-x-4 items-baseline text-left py-3 -mx-2 px-2 rounded-sm transition-colors",
                    isActive ? "bg-surface" : "hover:bg-surface/60"
                  )}
                >
                  <span className={cn("t-mono", isActive ? "text-accent" : isVisited ? "text-ink-2" : "text-ink-3")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className={cn("t-label block", isActive ? "text-accent-ink" : "text-ink-3")}>{t(p.stage)}</span>
                    <span className={cn("block text-[15px] leading-snug mt-1", isActive ? "text-ink font-medium" : isVisited ? "text-ink" : "text-ink-2")}>
                      {t(p.title)}
                    </span>
                  </span>
                </button>
                {i < pipeline.length - 1 && (
                  <span className="ml-[10px] flex h-5 items-center" aria-hidden>
                    <span className={cn("h-full w-px", visited.includes(i + 1) ? "bg-accent" : "bg-line-2")} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Panel */}
        <div className="col-span-12 lg:col-span-7">
          <div className="sticky top-6 border border-line bg-surface rounded-md">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="t-label">
                {t({ en: "Stage", zh: "阶段" })} {String(active + 1).padStart(2, "0")} · {t(stage.stage)}
              </span>
              <span className="t-mono text-ink-3 hidden sm:inline">post:bao-beach-0912</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="px-5 py-5"
              >
                <div className="t-h3">{t(stage.title)}</div>
                <p className="t-body-sm text-ink-2 mt-2 max-w-[52ch]">{t(stage.detail)}</p>

                <div className="mt-6 t-label">{t({ en: "Output", zh: "输出" })}</div>
                {active === ENTITY_STAGE ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {parseEntities(example).map((e) => (
                      <Tag key={e.key + e.value} tone="accent">
                        <span className="t-mono normal-case tracking-normal text-[11px] mr-1.5 opacity-70">{e.key}</span>
                        {e.value}
                      </Tag>
                    ))}
                  </div>
                ) : (
                  <pre className="mt-3 whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-ink border-l border-line-2 pl-4">
                    {example}
                  </pre>
                )}

                {active < pipeline.length - 1 && (
                  <button
                    type="button"
                    onClick={() => select(active + 1)}
                    className="mt-6 inline-flex items-center gap-1.5 t-label text-ink-2 hover:text-ink transition-colors"
                  >
                    {t({ en: "Next:", zh: "下一步：" })} {t(pipeline[active + 1].stage)}
                    <ArrowRight size={12} strokeWidth={1.5} className="hidden lg:inline" />
                    <ArrowDown size={12} strokeWidth={1.5} className="lg:hidden" />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
