"use client";

import { MapPin, Star } from "lucide-react";
import type { Service } from "@/data/services";
import { Tag, Badge } from "@/components/ui/Tag";
import { useT } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

export function ServiceCard({ service: s, className }: { service: Service; className?: string }) {
  const t = useT();
  return (
    <article
      className={cn(
        "border-t pt-4 transition-colors",
        s.best ? "border-accent" : "border-line-2 hover:border-ink",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[15px] font-medium leading-6">{t(s.name)}</div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 t-caption">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} strokeWidth={1.5} /> {s.distanceKm} km
            </span>
            <span className="inline-flex items-center gap-1 tabular">
              <Star size={12} strokeWidth={1.5} /> {s.rating.toFixed(1)} · {s.reviews}
            </span>
            <span className="t-mono">{t(s.slot)}</span>
          </div>
        </div>
        {s.best && <Badge tone="accent">{t({ en: "Recommended", zh: "推荐" })}</Badge>}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="t-metric-sm tabular">¥{s.price}</span>
        <span className="t-caption">{t({ en: "bath · large breed", zh: "洗澡 · 大型犬" })}</span>
      </div>
      <p className="mt-3 text-[13.5px] leading-5 text-ink-2">{t(s.why)}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {s.tags.map((x) => (
          <Tag key={x.en} tone="outline">
            {t(x)}
          </Tag>
        ))}
      </div>
    </article>
  );
}
