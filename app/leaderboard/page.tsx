import Image from "next/image";
import { Crown } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";
import { LeaderboardRow } from "@/components/LeaderboardRow";
import { CoinIcon } from "@/components/Logo";
import { leaderboard } from "@/lib/mock-data";

export default function LeaderboardPage() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-[760px]">
        {/* Hero */}
        <div className="relative flex flex-col items-center pb-2 pt-6 text-center">
          {/* Floating decorations */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <Image
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=faces"
              alt=""
              width={44}
              height={44}
              className="absolute left-[14%] top-[42%] h-11 w-11 rounded-full object-cover shadow-soft"
              unoptimized
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
              alt=""
              width={44}
              height={44}
              className="absolute right-[14%] top-[52%] h-11 w-11 rounded-full object-cover shadow-soft"
              unoptimized
            />
            <div className="absolute left-[20%] top-[58%] flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient shadow-btn">
              <CoinIcon size={22} />
            </div>
            <div className="absolute right-[22%] top-[30%] flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient shadow-btn">
              <CoinIcon size={22} />
            </div>
          </div>

          {/* Badge */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-b from-brand-400 to-brand-600 shadow-btn">
            <Crown size={34} className="text-white" fill="currentColor" />
            <span className="absolute -bottom-2 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand shadow-card">
              Top
            </span>
          </div>

          <h1 className="relative mt-6 text-2xl font-bold text-ink">
            Meet The Top Earners on mCash
          </h1>
          <p className="relative mt-1.5 text-sm text-ink-muted">
            Discover the highest earners in the mCash community
          </p>
        </div>

        {/* List */}
        <div className="mt-8 space-y-2.5">
          {leaderboard.map((entry) => (
            <LeaderboardRow key={entry.rank} entry={entry} />
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
