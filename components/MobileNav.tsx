"use client";

import { usePathname, useRouter } from "next/navigation";
import { Calendar, LayoutDashboard, Scissors, User, Zap } from "lucide-react";
import { isActivePath } from "./navigation";

export function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  const items = [
    { href: "/", icon: Zap, label: "Home" },
    { href: "/services", icon: Scissors, label: "Services" },
    { href: "/booking", icon: Calendar, label: "Book" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/admin", icon: LayoutDashboard, label: "Admin" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#c9a227]/10 px-2 pb-safe">
      <div className="flex items-center justify-around py-2">
        {items.map(({ href, icon: Icon, label }) => (
          <button
            key={href}
            onClick={() => router.push(href)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActivePath(pathname, href) ? "text-[#c9a227]" : "text-[#8a8578]"
            }`}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{label}</span>
            {isActivePath(pathname, href) && (
              <div className="w-1 h-1 bg-[#c9a227] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
