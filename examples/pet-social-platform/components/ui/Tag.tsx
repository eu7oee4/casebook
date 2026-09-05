import { cn } from "@/lib/utils";

export function Tag({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-[3px] text-[12px] leading-4 whitespace-nowrap",
        tone === "neutral" && "bg-wash text-ink-2",
        tone === "accent" && "bg-accent-wash text-accent-ink",
        tone === "outline" && "border border-line-2 text-ink-2",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "ink";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center t-mono rounded-sm px-1.5 py-[2px] uppercase tracking-[0.1em] text-[10.5px]",
        tone === "neutral" && "bg-wash text-ink-2",
        tone === "accent" && "bg-accent text-surface",
        tone === "ink" && "bg-ink text-surface",
        className
      )}
    >
      {children}
    </span>
  );
}
