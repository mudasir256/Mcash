import Link from "next/link";
import { X, User, Lock } from "lucide-react";
import { LogoMark, GoogleIcon } from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#d4d4d4] p-4">
      <div className="relative w-full max-w-[470px] overflow-hidden rounded-[28px] bg-white px-10 py-9 shadow-[0_30px_80px_rgba(16,24,40,0.18)]">
        {/* Abstract watermark shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
          <LogoMarkWatermark className="absolute -left-10 -top-8 h-44 w-44 rotate-12" />
          <LogoMarkWatermark className="absolute -right-12 bottom-2 h-52 w-52 -rotate-12" />
        </div>

        {/* Close button */}
        <Link
          href="/"
          aria-label="Close"
          className="absolute right-5 top-5 text-ink-soft transition-colors hover:text-ink"
        >
          <X size={20} />
        </Link>

        <div className="relative flex flex-col items-center">
          <LogoMark size={48} />
          <h1 className="mt-4 text-2xl font-bold text-ink">Sign Up</h1>
          <p className="mt-1 text-sm text-ink-muted">Start Earning With mCash</p>

          <form className="mt-7 w-full space-y-3.5">
            <InputField icon={<User size={16} />} placeholder="Username" />
            <InputField
              icon={<Lock size={16} />}
              placeholder="Password"
              type="password"
            />

            <button
              type="submit"
              className="mt-1 w-full rounded-2xl bg-brand-gradient py-3.5 text-sm font-semibold text-white shadow-btn transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Login Now
            </button>
          </form>

          <div className="my-5 flex w-full items-center gap-3">
            <span className="h-px flex-1 bg-line" />
            <span className="text-xs text-ink-soft">Login with Others</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-line bg-white py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
          >
            <GoogleIcon size={18} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-white px-4 py-3.5 transition-colors focus-within:border-brand">
      <span className="text-ink">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
      />
    </div>
  );
}

function LogoMarkWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M13 34V17.5c0-1.2 1.45-1.8 2.3-.95l6.3 6.3c.66.66 1.74.66 2.4 0l6.3-6.3c.85-.85 2.3-.25 2.3.95V34"
        stroke="#5B5CFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
