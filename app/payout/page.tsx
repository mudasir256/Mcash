import { TrendingUp, Clock } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";
import { BalancePill } from "@/components/BalancePill";
import { PayoutTabs } from "@/components/PayoutTabs";
import { TransactionTable } from "@/components/TransactionTable";
import { payoutSummary, transactions } from "@/lib/mock-data";

export default function PayoutPage() {
  return (
    <DashboardShell showBalance={false}>
      <div className="mx-auto max-w-[1080px] space-y-7">
        {/* Balance card */}
        <div className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-7 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Coin Value
            </p>
            <p className="mt-2 text-5xl font-extrabold tracking-tight text-ink">
              {payoutSummary.coinValue}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <TrendingUp size={15} className="text-emerald-500" />
                {payoutSummary.totalRedeem} Total Redeem
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-amber-500" />
                {payoutSummary.pending} Pending
              </span>
            </div>
          </div>

          <BalancePill amount={payoutSummary.coinBalance} variant="solid" />
        </div>

        {/* Tabs + payout methods */}
        <PayoutTabs />

        {/* Transaction history */}
        <TransactionTable transactions={transactions} />
      </div>
    </DashboardShell>
  );
}
