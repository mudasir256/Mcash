import Image from "next/image";
import { Flame, Sun, Bell } from "lucide-react";
import { BalancePill } from "./BalancePill";
import { currentUser } from "@/lib/mock-data";

export function Topbar({ showBalance = true }: { showBalance?: boolean }) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-line bg-white/90 px-9 backdrop-blur">
      {showBalance ? <BalancePill amount={currentUser.balance} /> : <span />}

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Streak"
          className="text-orange-500 transition-transform hover:scale-110"
        >
          <Flame size={20} className="fill-orange-500/20" />
        </button>
        <button
          type="button"
          aria-label="Toggle theme"
          className="text-ink-muted transition-colors hover:text-ink"
        >
          <Sun size={20} />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="relative text-ink-muted transition-colors hover:text-ink"
        >
          <Bell size={20} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="h-8 w-px bg-line" />

        <div className="flex items-center gap-3">
          <div className="text-right leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
              {currentUser.greeting}
            </p>
            <p className="text-sm font-semibold text-ink">{currentUser.name}</p>
          </div>
          <Image
            src={currentUser.avatar}
            alt={currentUser.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-100"
            unoptimized
          />
        </div>
      </div>
    </header>
  );
}
