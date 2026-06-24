import { ChevronRight } from "lucide-react";

type PayoutMethodCardProps = {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
};

export function PayoutMethodCard({
  name,
  subtitle,
  icon,
}: PayoutMethodCardProps) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-3.5 rounded-2xl border border-line bg-white p-4 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-ink-muted">{subtitle}</p>
      </div>
      <ChevronRight
        size={18}
        className="text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
      />
    </button>
  );
}
