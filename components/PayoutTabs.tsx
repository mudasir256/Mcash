"use client";

import { useState } from "react";
import { Banknote, Gift } from "lucide-react";
import { PayoutMethodCard } from "./PayoutMethodCard";

function UpiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4L3 20l8-8-5 8L18 4l-8 8 5-8z" fill="#F97316" />
      <path d="M9 4L6 20l8-8-5 8L21 4l-8 8 5-8z" fill="#22C55E" opacity="0.85" />
    </svg>
  );
}

function PaypalIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3h6.2c2.7 0 4.6 1.5 4.1 4.4-.5 3-2.7 4.4-5.4 4.4H9.9l-.9 5.2H6L7.5 3z"
        fill="#27346A"
      />
      <path
        d="M9.4 6h5.6c2.4 0 3.6 1.3 3.2 3.7-.5 2.7-2.4 4-4.9 4h-2.4l-.8 4.6H7.4L9.4 6z"
        fill="#2790C3"
      />
    </svg>
  );
}

const tabs = [
  { id: "bank", label: "Bank Transfer" },
  { id: "giftcards", label: "Shop Giftcards" },
] as const;

export function PayoutTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("bank");

  return (
    <div>
      <div className="inline-flex rounded-xl bg-surface p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
              active === tab.id
                ? "bg-brand text-white shadow-btn"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {active === "bank" ? (
          <>
            <PayoutMethodCard
              name="UPI"
              subtitle="Redeem start from ₹10"
              icon={<UpiIcon />}
            />
            <PayoutMethodCard
              name="Paypal"
              subtitle="Redeem start from ₹10"
              icon={<PaypalIcon />}
            />
          </>
        ) : (
          <>
            <PayoutMethodCard
              name="Amazon"
              subtitle="Redeem start from ₹100"
              icon={<Gift size={20} className="text-brand" />}
            />
            <PayoutMethodCard
              name="Flipkart"
              subtitle="Redeem start from ₹100"
              icon={<Banknote size={20} className="text-emerald-500" />}
            />
          </>
        )}
      </div>
    </div>
  );
}
