"use client";

import { identityDimensions } from "@/data/social";
import { useT } from "@/lib/locale-context";

/**
 * Six identity dimensions converging into one social graph node.
 * Authored SVG for the connectors; HTML for the labels so type stays crisp.
 */
export function IdentityGraph() {
  const t = useT();
  const left = identityDimensions.slice(0, 3);
  const right = identityDimensions.slice(3);

  return (
    <div className="relative">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-4 sm:gap-x-10 items-center">
        {/* left column */}
        <ol className="flex flex-col gap-6">
          {left.map((d) => (
            <li key={d.label.en} className="text-right border-t border-line-2 pt-2">
              <div className="text-[15px] font-medium">{t(d.label)}</div>
              <div className="t-annotation">{t(d.note)}</div>
            </li>
          ))}
        </ol>

        {/* connectors + core */}
        <div className="relative w-[120px] sm:w-[200px] h-[240px]">
          <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
            {[40, 120, 200].map((y) => (
              <path
                key={`l${y}`}
                d={`M0 ${y} C 60 ${y}, 60 120, 100 120`}
                fill="none"
                stroke="#cfcbbf"
                strokeWidth="1"
              />
            ))}
            {[40, 120, 200].map((y) => (
              <path
                key={`r${y}`}
                d={`M200 ${y} C 140 ${y}, 140 120, 100 120`}
                fill="none"
                stroke="#cfcbbf"
                strokeWidth="1"
              />
            ))}
            <circle cx="100" cy="120" r="34" fill="#e6ecdd" stroke="#3e6e2e" strokeWidth="1" />
            <circle cx="100" cy="120" r="3" fill="#3e6e2e" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center translate-y-[46px]">
              <div className="t-label-ink">{t({ en: "Social graph", zh: "社交图谱" })}</div>
            </div>
          </div>
        </div>

        {/* right column */}
        <ol className="flex flex-col gap-6">
          {right.map((d) => (
            <li key={d.label.en} className="border-t border-line-2 pt-2">
              <div className="text-[15px] font-medium">{t(d.label)}</div>
              <div className="t-annotation">{t(d.note)}</div>
            </li>
          ))}
        </ol>
      </div>
      <p className="t-annotation mt-6 max-w-[52ch]">
        {t({
          en: "The pet is the key that makes the other five dimensions specific. Two owners in the same city with the same interests are a weak match; two adult goldens who walk at 07:30 on Saturdays are a plan.",
          zh: "宠物是让其他五个维度变得具体的钥匙。同城、兴趣相同的两位主人只是弱匹配；两只周六 07:30 遛弯的成年金毛，才是一个计划。",
        })}
      </p>
    </div>
  );
}
