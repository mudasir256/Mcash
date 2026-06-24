import { DashboardShell } from "@/components/DashboardShell";
import { OfferCard } from "@/components/OfferCard";
import { FinanceCard } from "@/components/FinanceCard";
import { CompactOfferRow } from "@/components/CompactOfferRow";
import {
  promoOffers,
  financeOffers,
  compactOffers,
} from "@/lib/mock-data";

export default function AllOffersPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-[1240px] space-y-10">
        {/* Specially Picked for You */}
        <section>
          <h1 className="text-xl font-bold text-ink">Specially Picked for You</h1>
          <p className="mt-1 text-sm text-ink-soft">
            Most Enjoyable Offers, Highest Rewards
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {promoOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-brand" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
          </div>
        </section>

        {/* Explore top finance offers — grid of cards */}
        <section>
          <h2 className="text-xl font-bold text-ink">
            Explore top finance offers
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {financeOffers.map((offer) => (
              <FinanceCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        {/* Explore top finance offers — compact rows */}
        <section>
          <h2 className="text-xl font-bold text-ink">
            Explore top finance offers
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {compactOffers.map((offer) => (
              <CompactOfferRow key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
