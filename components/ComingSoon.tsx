import { DashboardShell } from "./DashboardShell";

export function ComingSoon({ title }: { title: string }) {
  return (
    <DashboardShell>
      <div className="mx-auto flex max-w-[760px] flex-col items-center justify-center py-32 text-center">
        <h1 className="text-2xl font-bold text-ink">{title}</h1>
        <p className="mt-2 text-sm text-ink-muted">
          This section is coming soon. Check back later!
        </p>
      </div>
    </DashboardShell>
  );
}
