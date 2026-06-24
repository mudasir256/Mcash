import Image from "next/image";
import { Trophy } from "lucide-react";
import { BalancePill } from "./BalancePill";
import type { LeaderboardEntry } from "@/lib/mock-data";

const medalStyles: Record<
  number,
  { rowBg: string; trophy: string; trophyBg: string }
> = {
  1: {
    rowBg: "bg-gradient-to-r from-amber-50 to-white border-amber-200/70",
    trophy: "text-amber-500",
    trophyBg: "bg-amber-100",
  },
  2: {
    rowBg: "bg-gradient-to-r from-slate-100 to-white border-slate-200",
    trophy: "text-slate-400",
    trophyBg: "bg-slate-200/70",
  },
  3: {
    rowBg: "bg-gradient-to-r from-orange-50 to-white border-orange-200/70",
    trophy: "text-orange-400",
    trophyBg: "bg-orange-100",
  },
};

export function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const medal = medalStyles[entry.rank];

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border px-4 py-3 shadow-card transition-shadow hover:shadow-soft ${
        medal ? medal.rowBg : "border-line bg-white"
      }`}
    >
      {medal ? (
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${medal.trophyBg}`}
        >
          <Trophy size={18} className={medal.trophy} />
        </div>
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-sm font-semibold text-ink-muted">
          {entry.rank}
        </div>
      )}

      <Image
        src={entry.avatar}
        alt={entry.name}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        unoptimized
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">{entry.name}</p>
        <p className="text-xs text-ink-soft">{entry.tasks} Tasks Completed</p>
      </div>

      <BalancePill amount={entry.amount} />
    </div>
  );
}
