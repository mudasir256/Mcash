import Image from "next/image";
import { CheckCircle2, ListChecks } from "lucide-react";
import { CoinIcon } from "./Logo";
import type { PromoOffer } from "@/lib/mock-data";

export function OfferCard({ offer }: { offer: PromoOffer }) {
  return (
    <div className="group flex w-full flex-col rounded-2xl border border-line bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="px-1.5 pt-3.5">
        <h3 className="text-[15px] font-semibold text-ink">{offer.title}</h3>

        <div className="mt-2 flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs text-ink-muted">
            <CheckCircle2 size={14} className="text-brand" />
            {offer.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-ink-muted">
            <ListChecks size={14} className="text-ink-soft" />
            {offer.tasks} tasks
          </span>
        </div>

        <div className="my-3 h-px w-full bg-line" />

        <div className="flex items-end justify-between pb-1.5">
          <div>
            <p className="text-xs text-ink-soft">per install</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-ink">
              <CoinIcon size={16} />
              {offer.perInstall}
            </p>
          </div>
          <button
            type="button"
            className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}
