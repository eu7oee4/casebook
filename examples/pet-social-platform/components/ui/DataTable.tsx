import { cn } from "@/lib/utils";

export type Column<T> = {
  key: string;
  header: React.ReactNode;
  cell: (row: T) => React.ReactNode;
  width?: string;
  align?: "left" | "right";
};

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  className,
  dense,
}: {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  className?: string;
  dense?: boolean;
}) {
  return (
    <div className={cn("overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0", className)}>
      <table className="w-full min-w-[640px] border-collapse text-[13.5px]">
        <thead>
          <tr className="border-b border-ink">
            {columns.map((c) => (
              <th
                key={c.key}
                scope="col"
                style={c.width ? { width: c.width } : undefined}
                className={cn("t-label py-3 pr-6 font-normal", c.align === "right" ? "text-right" : "text-left")}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={rowKey(r)} className="border-b border-line align-top hover:bg-surface transition-colors">
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={cn(
                    "pr-6 leading-[1.55] text-ink",
                    dense ? "py-2.5" : "py-4",
                    c.align === "right" ? "text-right tabular" : "text-left"
                  )}
                >
                  {c.cell(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
