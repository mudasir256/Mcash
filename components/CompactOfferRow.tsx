import { ArrowRight, Gamepad2 } from "lucide-react";
import type { CompactOffer } from "@/lib/mock-data";

export function CompactOfferRow({ offer }: { offer: CompactOffer }) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-3 rounded-2xl border border-line bg-white p-3 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${offer.color}`}
      >
        <Gamepad2 size={20} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-ink">
            {offer.name}
          </h3>
          {offer.badge ? (
            <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand">
              {offer.badge}
            </span>
          ) : null}
        </div>
        <p className="truncate text-xs text-ink-muted">{offer.description}</p>
      </div>

      <ArrowRight
        size={18}
        className="shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
      />
    </button>
  );
}
