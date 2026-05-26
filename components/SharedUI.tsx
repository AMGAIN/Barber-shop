import { Scissors, Star } from "lucide-react";

export const GoldDivider = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a227]/60" />
    <Scissors size={14} className="text-[#c9a227] rotate-45" />
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a227]/60" />
  </div>
);

export const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-6 h-px bg-[#c9a227]" />
    <span
      className="text-[#c9a227] text-xs tracking-[0.25em] uppercase"
      style={{ fontFamily: "DM Mono, monospace" }}
    >
      {children}
    </span>
  </div>
);

export const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={12}
        className={s <= Math.floor(rating) ? "text-[#c9a227] fill-[#c9a227]" : "text-[#3a3a3a]"}
      />
    ))}
  </div>
);

export const Badge = ({
  children,
  variant = "default",
}: {
  children: string;
  variant?: "default" | "success" | "warning" | "danger" | "gold";
}) => {
  const styles = {
    default: "bg-[#232323] text-[#8a8578]",
    success: "bg-green-900/40 text-green-400",
    warning: "bg-amber-900/40 text-amber-400",
    danger: "bg-red-900/40 text-red-400",
    gold: "bg-[#c9a227]/15 text-[#c9a227]",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${styles[variant]}`}
      style={{ fontFamily: "DM Mono, monospace" }}
    >
      {children}
    </span>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
