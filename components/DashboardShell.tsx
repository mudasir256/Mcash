import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type DashboardShellProps = {
  children: React.ReactNode;
  showBalance?: boolean;
};

export function DashboardShell({
  children,
  showBalance = true,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="lg:pl-[260px]">
        <Topbar showBalance={showBalance} />
        <main className="px-9 py-9">{children}</main>
      </div>
    </div>
  );
}
