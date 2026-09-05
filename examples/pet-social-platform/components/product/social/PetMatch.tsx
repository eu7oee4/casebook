"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, MapPin, RotateCcw } from "lucide-react";
import { matchCandidates, matchQuery, matchSignals, type MatchCandidate } from "@/data/social";
import { Tag } from "@/components/ui/Tag";
import { useLocale, useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const STEP_MS = 180;

export function PetMatch() {
  const t = useT();
  const locale = useLocale();
  const [run, setRun] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [proposed, setProposed] = useState<string | null>(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= matchSignals.length) clearInterval(timer);
    }, STEP_MS);
    return () => clearInterval(timer);
  }, [run]);

  const rerun = () => {
    setRevealed(0);
    setProposed(null);
    setRun((r) => r + 1);
  };

  const signalsDone = revealed >= matchSignals.length;

  return (
    <div className="grid-12 gap-y-10">
      {/* Left — query + signals */}
      <div className="col-span-12 lg:col-span-5">
        <div className="t-label">{t({ en: "User query", zh: "用户请求" })}</div>
        <p className="t-statement mt-3">“{t(matchQuery)}”</p>
        <p className="t-annotation mt-2">{locale === "zh" ? matchQuery.en : matchQuery.zh}</p>

        <div className="mt-8 flex items-baseline justify-between">
          <div className="t-label">{t({ en: "AI identifies", zh: "AI 识别出" })}</div>
          <button
            type="button"
            onClick={rerun}
            className="t-label inline-flex items-center gap-1.5 text-ink hover:text-accent-ink transition-colors"
          >
            <RotateCcw size={12} strokeWidth={1.5} /> {t({ en: "Re-run", zh: "重新运行" })}
          </button>
        </div>
        <dl className="mt-3 border-t border-ink">
          {matchSignals.map((s, i) => {
            const on = i < revealed;
            return (
              <div
                key={s.key.en}
                className={cn(
                  "grid grid-cols-[120px_1fr] gap-4 py-2.5 border-b border-line transition-opacity duration-300",
                  on ? "opacity-100" : "opacity-25"
                )}
              >
                <dt className="t-label pt-[3px]">{t(s.key)}</dt>
                <dd className="text-[14px] leading-6">
                  <AnimatePresence mode="wait">
                    {on ? (
                      <motion.span
                        key={`${run}-${s.key.en}`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="block"
                      >
                        {t(s.value)}
                      </motion.span>
                    ) : (
                      <span className="block h-6 w-2/3 border-b border-dotted border-line-2" aria-hidden />
                    )}
                  </AnimatePresence>
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="t-annotation mt-4 max-w-[40ch]">
          {t({
            en: "Signals come from the pet profile, posting behaviour and past activity — not from a form the user fills in.",
            zh: "这些信号来自宠物档案、发帖行为和历史活动，而不是用户填写的表单。",
          })}
        </p>
      </div>

      {/* Right — candidates */}
      <div className="col-span-12 lg:col-span-7">
        <div className="flex items-baseline justify-between">
          <div className="t-label">{t({ en: "Recommended", zh: "推荐" })}</div>
          <div className="t-annotation">
            {t({ en: "3 of 41 candidates within 3 km · ranked on compatibility", zh: "3 公里内 41 位候选中的 3 位 · 按相容性排序" })}
          </div>
        </div>
        <motion.ol
          className="mt-3 border-t border-ink"
          initial="hidden"
          animate={signalsDone ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {matchCandidates.map((c) => (
            <motion.li
              key={`${run}-${c.id}`}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <MatchCard
                candidate={c}
                proposed={proposed === c.id}
                onPropose={() => setProposed(proposed === c.id ? null : c.id)}
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}

function MatchCard({
  candidate: c,
  proposed,
  onPropose,
}: {
  candidate: MatchCandidate;
  proposed: boolean;
  onPropose: () => void;
}) {
  const t = useT();
  return (
    <article
      className={cn(
        "group border-b border-line py-6 transition-colors",
        proposed ? "border-b-ink" : "hover:border-b-ink"
      )}
    >
      <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[112px_1fr_auto] gap-x-6 gap-y-4">
        {/* score */}
        <div>
          <div className="t-metric-sm tabular">{c.score}%</div>
          <div className="t-label mt-1">{t({ en: "Match", zh: "匹配度" })}</div>
        </div>

        {/* body */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="t-h3">{c.pet}</span>
            <span className="t-caption">{t(c.breed)}</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 t-caption">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} strokeWidth={1.5} /> {c.distanceKm} km · {t(c.owner)}
            </span>
            <span className="t-mono">{t(c.schedule)}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.commonInterests.map((x) => (
              <Tag key={x.en} tone="outline">
                {t(x)}
              </Tag>
            ))}
            <Tag tone="accent">{t(c.compatibleActivity)}</Tag>
          </div>
          <div className="mt-4 grid grid-cols-[88px_1fr] gap-4">
            <div className="t-label pt-[2px]">{t({ en: "Why matched", zh: "匹配原因" })}</div>
            <ul className="space-y-0.5 text-[13.5px] leading-5 text-ink-2">
              {c.why.map((w) => (
                <li key={w.en} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    —
                  </span>
                  {t(w)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* action */}
        <div className="col-start-2 sm:col-start-3 sm:self-start">
          <button
            type="button"
            onClick={onPropose}
            aria-pressed={proposed}
            className={cn(
              "t-label inline-flex items-center gap-1.5 rounded-sm border px-3 py-2 transition-colors",
              proposed
                ? "border-accent bg-accent text-surface"
                : "border-line-2 text-ink hover:border-ink"
            )}
          >
            {proposed ? (
              <>
                <Check size={12} strokeWidth={1.75} /> {t({ en: "Proposed", zh: "已发起" })}
              </>
            ) : (
              t({ en: "Propose", zh: "发起邀约" })
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {proposed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-md border border-line bg-surface p-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center">
              <div>
                <div className="t-label">{t({ en: "Proposal sent", zh: "邀约已发送" })}</div>
                <p className="text-[14px] leading-6 mt-1">
                  {t(c.compatibleActivity)} · {t(c.schedule)} ·{" "}
                  {t({ en: "meeting point suggested at the midpoint between you.", zh: "建议在两人之间的中点集合。" })}
                </p>
                <p className="t-annotation mt-1">
                  {t({
                    en: "The first message is a plan, not a greeting. The other owner accepts, adjusts the time, or declines.",
                    zh: "第一条消息是一个计划，而不是一句问候。对方可以接受、调整时间或拒绝。",
                  })}
                </p>
              </div>
              <div className="t-mono text-ink-3">{t({ en: "mock · no message sent", zh: "模拟 · 未发送消息" })}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
