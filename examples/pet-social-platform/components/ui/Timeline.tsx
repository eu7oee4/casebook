import { cn } from "@/lib/utils";

export type TimelineStep = {
  label: string;
  title: string;
  body?: React.ReactNode;
};

export function Timeline({ steps, className }: { steps: TimelineStep[]; className?: string }) {
  return (
    <ol className={cn("relative border-l border-line ml-1", className)}>
      {steps.map((s, i) => (
        <li key={s.label} className="relative pl-7 pb-8 last:pb-0">
          <span
            className={cn(
              "absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full border bg-bg",
              i === 0 ? "border-accent bg-accent" : "border-line-2"
            )}
          />
          <div className="t-label mb-1">{s.label}</div>
          <div className="text-[15px] font-medium">{s.title}</div>
          {s.body && <div className="t-body-sm text-ink-2 mt-1 max-w-[52ch]">{s.body}</div>}
        </li>
      ))}
    </ol>
  );
}
