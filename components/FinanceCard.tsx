import { CheckCircle2 } from "lucide-react";
import { CoinIcon } from "./Logo";
import type { FinanceOffer } from "@/lib/mock-data";

export function FinanceCard({ offer }: { offer: FinanceOffer }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft">
      <div
        className={`relative flex aspect-[5/4] items-center justify-center bg-gradient-to-br ${offer.gradient}`}
      >
        <span className="text-2xl font-extrabold uppercase tracking-tight text-white/95">
          {offer.short}
        </span>
      </div>

      <div className="px-3 pb-3 pt-2.5">
        <h3 className="truncate text-sm font-semibold text-ink">{offer.name}</h3>
        <span className="mt-1 flex items-center gap-1 text-[11px] text-ink-muted">
          <CheckCircle2 size={12} className="text-brand" />
          {offer.category}
        </span>

        <div className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-line py-2 text-sm font-bold text-ink">
          <CoinIcon size={15} />
          {offer.reward}
        </div>
      </div>
    </div>
  );
}
