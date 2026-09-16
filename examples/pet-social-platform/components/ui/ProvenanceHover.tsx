"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { provenanceLabel, type Provenance } from "@/data/provenance";
import { useLocale } from "@/lib/locale-context";

const OPEN_DELAY = 450;
const CLOSE_GRACE = 150;
const CARD_WIDTH = 304; // w-76 equivalent; keep in sync with the card class below

const dotClass = (p: Provenance) =>
  p.confidence === "verified"
    ? "rounded-full bg-accent"
    : p.confidence === "contradicted"
      ? "rounded-full bg-series-2"
      : p.confidence === "estimate"
        ? "rounded-full bg-ink-3"
        : p.confidence === "design"
          ? "rounded-[1px] bg-ink-3"
          : "rounded-full border border-series-3 bg-transparent";

/**
 * Hover card showing where a number comes from: tier, source, link, retrieval date and the
 * researcher's note (kept in its original language by design). Opens after a short hover delay,
 * on keyboard focus, or on tap; the card is interactive so the source link can be clicked.
 * Rendered in a portal with fixed positioning so overflow containers cannot clip it.
 */
export function ProvenanceHover({
  provenance,
  children,
  className,
  cue = false,
}: {
  provenance: Provenance;
  children: React.ReactNode;
  className?: string;
  /** Adds a dotted-underline affordance on the wrapped content (for values and inline numbers). */
  cue?: boolean;
}) {
  const id = useId();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number; above: boolean }>({ top: 0, left: 0, above: false });
  const anchorRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const place = useCallback(() => {
    const a = anchorRef.current;
    if (!a) return;
    const r = a.getBoundingClientRect();
    const left = Math.max(12, Math.min(r.left, window.innerWidth - CARD_WIDTH - 12));
    const above = r.bottom > window.innerHeight - 200;
    setPos({ top: above ? r.top : r.bottom, left, above });
  }, []);

  const show = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    place();
    setOpen(true);
  }, [place]);

  const hide = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    setOpen(false);
  }, []);

  const onEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(show, OPEN_DELAY);
  };
  const onLeave = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_GRACE);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    const onScroll = () => setOpen(false);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (anchorRef.current?.contains(t) || cardRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, hide]);

  useEffect(
    () => () => {
      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  const zh = locale === "zh";
  const hypothesis = provenance.confidence === "hypothesis";
  const design = provenance.confidence === "design";

  return (
    <span
      ref={anchorRef}
      className={cn("relative inline-flex min-w-0 max-w-full", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={show}
      onBlur={(e) => {
        if (cardRef.current?.contains(e.relatedTarget as Node)) return;
        hide();
      }}
      onClick={() => (open ? hide() : show())}
      tabIndex={0}
      aria-describedby={open ? id : undefined}
    >
      <span className={cn("min-w-0", cue && "border-b border-dotted border-line-2 cursor-help")}>{children}</span>
      {open &&
        createPortal(
          <div
            ref={cardRef}
            role="tooltip"
            id={id}
            onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
            onMouseLeave={onLeave}
            style={{ position: "fixed", top: pos.top, left: pos.left, width: CARD_WIDTH }}
            className={cn(
              "z-50 rounded-md border border-line bg-surface p-3 shadow-[0_8px_24px_-12px_rgba(23,22,15,0.3)]",
              pos.above ? "-translate-y-full -mt-2" : "mt-2"
            )}
          >
            <div className="flex items-center gap-1.5 font-mono text-[11px] leading-[1.4] tracking-[0.06em] text-ink">
              <span className={cn("h-1.5 w-1.5 shrink-0", dotClass(provenance))} aria-hidden />
              <span className="min-w-0 break-words">{provenanceLabel(provenance, locale)}</span>
            </div>
            {hypothesis && (
              <p className="t-caption mt-2">
                {zh
                  ? "占位假设，用于搭建案例结构；不是市场事实，研究后或替换或明确保留。"
                  : "Placeholder hypothesis used to structure the case — not a market fact; research either replaces it or keeps it deliberately."}
              </p>
            )}
            {design && (
              <p className="t-caption mt-2">
                {zh
                  ? "产品设计本身，不是对世界的断言，因此没有出处可引 —— 它既不是「已核实」，也不是「编的数字」。"
                  : "The product's own design, not a claim about the world, so there is nothing to cite — neither verified nor an invented figure."}
              </p>
            )}
            {provenance.retrievedAt && (
              <div className="t-caption mt-2">
                {zh ? "获取于" : "Retrieved"} {provenance.retrievedAt}
              </div>
            )}
            {provenance.note && <p className="t-caption mt-2 border-t border-line pt-2">{provenance.note}</p>}
            {provenance.url && (
              <a
                href={provenance.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block font-mono text-[11px] tracking-[0.06em] text-ink-2 underline decoration-dotted underline-offset-2 hover:text-ink"
              >
                {zh ? "查看来源 ↗" : "View source ↗"}
              </a>
            )}
          </div>,
          document.body
        )}
    </span>
  );
}

/** Inline wrapper for a sourced number inside prose: dotted underline, hover card with the provenance. */
export function Sourced({
  provenance,
  children,
  className,
}: {
  provenance: Provenance;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ProvenanceHover provenance={provenance} cue className={className}>
      {children}
    </ProvenanceHover>
  );
}
