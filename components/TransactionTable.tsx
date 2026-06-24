import { ChevronRight } from "lucide-react";
import type { Transaction } from "@/lib/mock-data";

function StatusBadge({ status }: { status: Transaction["status"] }) {
  const isCompleted = status === "COMPLETED";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${
        isCompleted
          ? "bg-emerald-50 text-emerald-600"
          : "bg-amber-50 text-amber-600"
      }`}
    >
      {status}
    </span>
  );
}

export function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-ink">Transaction History</h2>
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-600"
        >
          View all
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
              <th className="pb-3 pr-4 font-semibold">Type</th>
              <th className="pb-3 pr-4 font-semibold">Status</th>
              <th className="pb-3 pr-4 font-semibold">Amount</th>
              <th className="pb-3 pr-4 font-semibold">Method / Source</th>
              <th className="pb-3 pr-4 font-semibold">Date</th>
              <th className="pb-3 font-semibold">Reference</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t border-line text-sm">
                <td className="py-4 pr-4 font-semibold text-ink">{tx.type}</td>
                <td className="py-4 pr-4">
                  <StatusBadge status={tx.status} />
                </td>
                <td
                  className={`py-4 pr-4 font-semibold ${
                    tx.positive ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {tx.amount}
                </td>
                <td className="py-4 pr-4 text-ink-muted">{tx.source}</td>
                <td className="py-4 pr-4 text-ink-muted">{tx.date}</td>
                <td className="py-4 text-ink-soft">{tx.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
