"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { isActivePath, NAV_ITEMS } from "./navigation";
import mainLogo from "../public/mainLogo.png";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (href: string) => {
    router.push(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
          >
            <ImageWithFallback
              src={mainLogo.src}
              alt="Himalayan Hairline"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span
              className="text-lg font-bold tracking-tight text-[#f5f0e8]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Himalayan <span className="text-[#c9a227]">Hairline</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(pathname, item.href)
                    ? "text-[#c9a227] bg-[#c9a227]/10"
                    : "text-[#8a8578] hover:text-[#f5f0e8] hover:bg-[#161616]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-[#8a8578] hover:text-[#f5f0e8] hover:bg-[#161616] transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#c9a227] rounded-full" />
            </button>
            <button
              onClick={() => navigate("/booking")}
              className="px-4 py-2 bg-[#c9a227] text-[#0d0d0d] rounded-lg text-sm font-semibold hover:bg-[#e8c547] transition-colors"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#8a8578] hover:text-[#f5f0e8]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#c9a227]/10 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActivePath(pathname, item.href)
                  ? "text-[#c9a227] bg-[#c9a227]/10"
                  : "text-[#8a8578] hover:text-[#f5f0e8]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              navigate("/booking");
              setMenuOpen(false);
            }}
            className="w-full mt-3 px-4 py-3 bg-[#c9a227] text-[#0d0d0d] rounded-lg text-sm font-semibold"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
