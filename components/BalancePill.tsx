import { CoinIcon } from "./Logo";

type BalancePillProps = {
  amount: string;
  variant?: "soft" | "solid";
  className?: string;
};

export function BalancePill({
  amount,
  variant = "soft",
  className = "",
}: BalancePillProps) {
  if (variant === "solid") {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-base font-semibold text-white shadow-btn ${className}`}
      >
        <CoinIcon size={18} />
        {amount}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-ink ${className}`}
    >
      <CoinIcon size={16} />
      {amount}
    </div>
  );
}
