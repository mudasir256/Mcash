"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ClipboardList,
  Wallet,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./Logo";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "All Offers", href: "/", icon: Home },
  { label: "My Tasks", href: "/my-tasks", icon: ClipboardList },
  { label: "Payout", href: "/payout", icon: Wallet },
  { label: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { label: "Refer & Earn", href: "/refer", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[260px] shrink-0 flex-col border-r border-line bg-white px-6 py-7 lg:flex">
      <div className="px-1">
        <Logo />
      </div>

      <p className="mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">
        Overview
      </p>

      <nav className="mt-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand"
                  : "text-ink-muted hover:bg-surface hover:text-ink"
              }`}
            >
              <Icon
                size={19}
                className={isActive ? "text-brand" : "text-ink-soft group-hover:text-ink"}
                strokeWidth={2}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
