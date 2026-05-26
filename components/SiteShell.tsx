"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";
import { Navbar } from "./Navbar";
import { isAdminPath } from "./navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className="min-h-screen bg-[#0d0d0d] text-foreground pb-16 md:pb-0"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      <Navbar />
      <main className="min-h-screen bg-[linear-gradient(180deg,#0d0d0d_0%,#0a0a0a_48%,#101010_100%)]">
        {children}
      </main>
      {!isAdminPath(pathname) && <Footer />}
      <MobileNav />
    </div>
  );
}
