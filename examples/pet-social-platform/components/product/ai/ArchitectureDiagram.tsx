"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/locale-context";
import type { Text } from "@/lib/i18n";

type NodeId = "ai" | "content" | "social" | "local" | "data" | "profile" | "personalization" | "monetization";

const NOTES: Record<NodeId, { label: Text; note: Text }> = {
  ai: {
    label: { en: "AI", zh: "AI" },
    note: { en: "The intelligence layer: understands content, matches people, executes services. Not a chat window.", zh: "智能层：理解内容、匹配人、执行服务。不是一个聊天窗口。" },
  },
  content: {
    label: { en: "Content", zh: "内容" },
    note: { en: "Content Intelligence — every post understood at the pet, stage, place and emotion level before it is ranked.", zh: "内容理解：每条内容在被排序之前，先在宠物、阶段、地点与情绪的层面被理解。" },
  },
  social: {
    label: { en: "Social", zh: "社交" },
    note: { en: "Social Intelligence — pets first, then people; every match ships with an activity and a reason.", zh: "社交理解：先看宠物，再看人；每个匹配都附带一个活动和一句理由。" },
  },
  local: {
    label: { en: "Local", zh: "本地" },
    note: { en: "Local Service Intelligence — a sentence becomes a filtered, explained, booked service.", zh: "本地服务理解：一句话变成一个经过筛选、解释并完成预订的服务。" },
  },
  data: {
    label: { en: "Data", zh: "数据" },
    note: { en: "Every surface writes back: entities, interactions, bookings and outcomes feed one store.", zh: "每个界面都回写数据：实体、互动、预订与结果汇入同一个存储。" },
  },
  profile: {
    label: { en: "User & Pet Profile", zh: "用户与宠物档案" },
    note: { en: "The Pet Knowledge Graph — the memory the AI layer reasons over across surfaces.", zh: "宠物知识图谱：AI 层跨界面推理时所依赖的记忆。" },
  },
  personalization: {
    label: { en: "Personalization", zh: "个性化" },
    note: { en: "Relevance in feed, matches and services derived from one profile, not three.", zh: "信息流、匹配与服务的相关性来自同一份档案，而不是三份。" },
  },
  monetization: {
    label: { en: "Monetization", zh: "商业化" },
    note: { en: "Service take-rate, commerce and precise offers — without ad-style targeting.", zh: "服务抽成、电商与精准优惠，无需广告式定向。" },
  },
};

const BRANCH_SUB: Record<"content" | "social" | "local", Text> = {
  content: { en: "understanding", zh: "理解" },
  social: { en: "matching", zh: "匹配" },
  local: { en: "execution", zh: "执行" },
};

const BRANCHES: NodeId[] = ["content", "social", "local"];
const STACK: NodeId[] = ["data", "profile", "personalization", "monetization"];

export function ArchitectureDiagram({ className }: { className?: string }) {
  const [active, setActive] = useState<NodeId | null>(null);
  const t = useT();

  const branchActive = (id: NodeId) => active === id || active === "ai";
  const spineActive = active !== null && !BRANCHES.includes(active) && active !== "ai";
  const isBranch = active !== null && BRANCHES.includes(active);

  const nodeProps = (id: NodeId) => ({
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(id),
    onBlur: () => setActive(null),
    tabIndex: 0,
    "aria-describedby": "arch-note",
  });

  const lineCls = (on: boolean) => cn("transition-colors duration-200", on ? "bg-accent" : "bg-line-2");

  return (
    <div className={cn("grid-12 gap-y-10", className)}>
      <div className="col-span-12 lg:col-span-8">
        {/* Desktop / tablet diagram */}
        <div className="hidden sm:block select-none">
          {/* AI */}
          <div className="flex justify-center">
            <button
              type="button"
              {...nodeProps("ai")}
              className={cn(
                "t-label-ink px-8 py-4 rounded-sm border transition-colors",
                active === "ai" || active === null
                  ? "bg-accent text-surface border-accent"
                  : "bg-accent-wash text-accent-ink border-accent-soft"
              )}
            >
              <span className="font-display normal-case tracking-normal text-[1.75rem] leading-none">AI</span>
              <span className="block mt-1.5 text-[10px] opacity-80">{t({ en: "Intelligence layer", zh: "智能层" })}</span>
            </button>
          </div>
          {/* Fan-out connectors */}
          <div className="grid grid-cols-3 h-14">
            <div className="relative">
              <div className={cn("absolute right-0 top-1/2 h-px w-1/2", lineCls(branchActive("content")))} />
              <div className={cn("absolute left-1/2 top-1/2 bottom-0 w-px", lineCls(branchActive("content")))} />
            </div>
            <div className="relative">
              <div className={cn("absolute left-1/2 top-0 h-1/2 w-px -translate-x-px", lineCls(active === "ai" || isBranch))} />
              <div className={cn("absolute inset-x-0 top-1/2 h-px", lineCls(active === "ai" || active === "content" || active === "local"))} />
              <div className={cn("absolute left-1/2 top-1/2 bottom-0 w-px -translate-x-px", lineCls(branchActive("social")))} />
            </div>
            <div className="relative">
              <div className={cn("absolute left-0 top-1/2 h-px w-1/2", lineCls(branchActive("local")))} />
              <div className={cn("absolute left-1/2 top-1/2 bottom-0 w-px", lineCls(branchActive("local")))} />
            </div>
          </div>
          {/* Branches */}
          <div className="grid grid-cols-3 gap-4">
            {BRANCHES.map((id) => (
              <button
                key={id}
                type="button"
                {...nodeProps(id)}
                className={cn(
                  "border rounded-sm py-4 text-center transition-colors bg-surface",
                  active === id ? "border-accent text-accent-ink" : "border-line-2 text-ink hover:border-ink"
                )}
              >
                <span className="t-h3">{t(NOTES[id].label)}</span>
                <span className="t-label block mt-1">{t(BRANCH_SUB[id as "content" | "social" | "local"])}</span>
              </button>
            ))}
          </div>
          {/* Fan-in connectors */}
          <div className="grid grid-cols-3 h-14">
            <div className="relative">
              <div className={cn("absolute left-1/2 top-0 h-1/2 w-px", lineCls(active === "content" || spineActive))} />
              <div className={cn("absolute right-0 top-1/2 h-px w-1/2", lineCls(active === "content" || spineActive))} />
            </div>
            <div className="relative">
              <div className={cn("absolute left-1/2 top-0 h-1/2 w-px -translate-x-px", lineCls(active === "social" || spineActive))} />
              <div className={cn("absolute inset-x-0 top-1/2 h-px", lineCls(active === "content" || active === "local" || spineActive))} />
              <div className={cn("absolute left-1/2 top-1/2 bottom-0 w-px -translate-x-px", lineCls(isBranch || spineActive))} />
            </div>
            <div className="relative">
              <div className={cn("absolute left-1/2 top-0 h-1/2 w-px", lineCls(active === "local" || spineActive))} />
              <div className={cn("absolute left-0 top-1/2 h-px w-1/2", lineCls(active === "local" || spineActive))} />
            </div>
          </div>
          {/* Stack */}
          <div className="flex flex-col items-center">
            {STACK.map((id, i) => (
              <div key={id} className="flex flex-col items-center w-full">
                <button
                  type="button"
                  {...nodeProps(id)}
                  className={cn(
                    "w-[min(100%,360px)] border rounded-sm py-3 text-center transition-colors bg-surface",
                    active === id ? "border-accent text-accent-ink" : "border-line-2 text-ink hover:border-ink",
                    id === "monetization" && "border-ink"
                  )}
                >
                  <span className="text-[15px] font-medium">{t(NOTES[id].label)}</span>
                </button>
                {i < STACK.length - 1 && (
                  <div className="relative h-10 w-px">
                    <div className={cn("absolute inset-0", lineCls(isBranch || spineActive))} />
                    <span
                      className={cn(
                        "absolute -bottom-[3px] left-1/2 -translate-x-1/2 border-l border-b h-[7px] w-[7px] rotate-[-45deg] transition-colors",
                        isBranch || spineActive ? "border-accent" : "border-line-2"
                      )}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Narrow-screen stacked diagram */}
        <ol className="sm:hidden flex flex-col items-stretch">
          {(["ai", ...BRANCHES, ...STACK] as NodeId[]).map((id, i, arr) => (
            <li key={id} className="flex flex-col items-center">
              <button
                type="button"
                {...nodeProps(id)}
                className={cn(
                  "w-full border rounded-sm py-3 text-center transition-colors",
                  id === "ai" ? "bg-accent text-surface border-accent" : "bg-surface border-line-2",
                  active === id && id !== "ai" && "border-accent text-accent-ink"
                )}
              >
                <span className="text-[15px] font-medium">{t(NOTES[id].label)}</span>
              </button>
              {i < arr.length - 1 && <div className="h-6 w-px bg-line-2" />}
            </li>
          ))}
        </ol>
      </div>

      <aside className="col-span-12 lg:col-span-4 lg:pl-4">
        <div className="t-label">{t({ en: "Reading the architecture", zh: "如何读这张架构图" })}</div>
        <p className="t-body-sm text-ink-2 mt-3">
          {t({
            en: "One intelligence layer sits above three product surfaces. Each surface writes back to a single data store, which becomes the user and pet profile the whole product personalises against. Monetization is downstream of understanding, never a separate track.",
            zh: "一个智能层位于三个产品界面之上。每个界面都回写到同一个数据存储，它成为整个产品据以个性化的用户与宠物档案。商业化是理解的下游，而不是一条独立的线。",
          })}
        </p>
        <div className="mt-8 border-t border-line pt-4 min-h-[96px]" id="arch-note" aria-live="polite">
          <div className="t-label">{active ? t(NOTES[active].label) : t({ en: "Hover a node", zh: "悬停任一节点" })}</div>
          <p className="t-body-sm text-ink mt-2">
            {active
              ? t(NOTES[active].note)
              : t({ en: "Each node explains its role; branches highlight the path from AI to data.", zh: "每个节点解释自己的角色；分支高亮从 AI 到数据的路径。" })}
          </p>
        </div>
      </aside>
    </div>
  );
}
