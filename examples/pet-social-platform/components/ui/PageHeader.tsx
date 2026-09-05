import { cn } from "@/lib/utils";

export function PageHeader({
  index,
  kicker,
  title,
  subtitle,
  lede,
  aside,
  className,
}: {
  index: string;
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  lede?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("pt-10 lg:pt-14 pb-10 lg:pb-14 border-b border-line", className)}>
      <div className="flex items-baseline gap-4">
        <span className="t-mono text-accent">{index}</span>
        {kicker && <span className="t-label">{kicker}</span>}
      </div>
      <div className="mt-6 grid-12 gap-y-8">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="t-h1">{title}</h1>
          {subtitle && <p className="t-statement mt-4 text-ink-2">{subtitle}</p>}
        </div>
        <div className="col-span-12 lg:col-span-4 lg:pt-3">
          {lede && <p className="t-body text-ink-2 max-w-[38ch]">{lede}</p>}
          {aside}
        </div>
      </div>
    </header>
  );
}
