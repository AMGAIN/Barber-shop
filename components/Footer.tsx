"use client";

import { useRouter } from "next/navigation";
import { Clock, MapPin, Phone } from "lucide-react";
import { GoldDivider } from "./SharedUI";

const footerLinks = [
  { label: "home", href: "/" },
  { label: "services", href: "/services" },
  { label: "booking", href: "/booking" },
] as const;

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a227]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* <ImageWithFallback
                src={mainLogo}
                alt="Himalayan Hairline"
                className="w-11 h-11 rounded-full object-cover"
              /> */}
              <span
                className="text-xl font-bold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Himalayan <span className="text-[#c9a227]">Hairline</span>
              </span>
            </div>
            <p className="text-[#8a8578] text-sm leading-relaxed max-w-xs">
              Unisex salon and professional academy. Where tradition meets precision in the heart of Kathmandu.
            </p>
            {/* <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-[#161616] border border-[#c9a227]/10 flex items-center justify-center text-[#8a8578] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="text-[#f5f0e8] text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => router.push(link.href)}
                    className="text-[#8a8578] text-sm hover:text-[#c9a227] capitalize transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f0e8] text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#c9a227] mt-0.5 shrink-0" />
                <span className="text-[#8a8578] text-sm">Ganeshthan, Gongabu, Tokha,<br />Nepal 44600</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#c9a227] shrink-0" />
                <span className="text-[#8a8578] text-sm">+977 982-0262220</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={14} className="text-[#c9a227] shrink-0" />
                <span className="text-[#8a8578] text-sm">9:00 AM – 7:00 PM daily</span>
              </li>
            </ul>
          </div>
        </div>

        <GoldDivider />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-6 text-[#8a8578] text-xs">
          <span>© 2025 Himalayan Hairline. All rights reserved.</span>
          <span className="text-[#c9a227]/60">Crafting excellence since the peaks</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page: Home ───────────────────────────────────────────────────────────────
