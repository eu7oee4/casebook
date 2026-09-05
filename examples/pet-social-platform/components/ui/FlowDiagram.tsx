import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FlowNode = { label: string; note?: string; emphasis?: boolean };

/** A sequence of nodes joined by arrows. Horizontal on wide screens, vertical on narrow. */
export function FlowDiagram({
  nodes,
  direction = "auto",
  className,
  size = "md",
}: {
  nodes: FlowNode[];
  direction?: "auto" | "vertical" | "horizontal";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const horizontal = direction === "horizontal";
  const vertical = direction === "vertical";
  const textClass = size === "lg" ? "t-statement" : size === "md" ? "text-[15px] font-medium" : "text-[13px] font-medium";
  return (
    <ol
      className={cn(
        "flex gap-2",
        vertical
          ? "flex-col items-start"
          : horizontal
            ? "flex-row items-center flex-wrap"
            : "flex-col items-start lg:flex-row lg:items-center lg:flex-wrap",
        className
      )}
    >
      {nodes.map((n, i) => (
        <li key={n.label} className={cn("flex gap-2", vertical ? "flex-col items-start" : "items-center", !vertical && !horizontal && "flex-col items-start lg:flex-row lg:items-center")}>
          <div className="min-w-0">
            <div className={cn(textClass, n.emphasis ? "text-accent-ink" : "text-ink")}>{n.label}</div>
            {n.note && <div className="t-annotation mt-0.5">{n.note}</div>}
          </div>
          {i < nodes.length - 1 && (
            <span className="text-ink-3 shrink-0" aria-hidden>
              {vertical ? (
                <ArrowDown size={14} strokeWidth={1.25} />
              ) : horizontal ? (
                <ArrowRight size={14} strokeWidth={1.25} />
              ) : (
                <>
                  <ArrowDown size={14} strokeWidth={1.25} className="lg:hidden" />
                  <ArrowRight size={14} strokeWidth={1.25} className="hidden lg:block" />
                </>
              )}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Big vertical thesis chain — used for "Content → … → Ecosystem" moments. */
export function ThesisChain({ nodes, className }: { nodes: FlowNode[]; className?: string }) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {nodes.map((n, i) => (
        <li key={n.label} className="flex items-baseline gap-5 py-2.5 border-b border-line last:border-b-0">
          <span className="t-mono text-ink-3 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span className={cn("t-statement", n.emphasis && "text-accent-ink")}>{n.label}</span>
          {n.note && <span className="t-annotation ml-auto text-right max-w-[22ch] hidden sm:block">{n.note}</span>}
        </li>
      ))}
    </ol>
  );
}
