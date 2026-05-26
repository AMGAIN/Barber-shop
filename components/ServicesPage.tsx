"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Scissors } from "lucide-react";
import { SectionLabel } from "./SharedUI";
import type { Service } from "./types";

interface ServicesPageProps {
  services: Service[];
}

export function ServicesPage({ services }: ServicesPageProps) {
  const router = useRouter();
  const [activeGender, setActiveGender] = useState<"male" | "female">("male");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Hair Services", "Colour", "Braids", "Cleansing", "Hair Treatment"];

  const filtered = services.filter((s) => {
    const genderMatch = s.gender === activeGender;
    const categoryMatch = activeCategory === "All" || s.category === activeCategory;
    return genderMatch && categoryMatch;
  });

  const groupedByCategory = categories
    .filter(cat => cat !== "All")
    .map(cat => ({
      category: cat,
      services: filtered.filter(s => s.category === cat)
    }))
    .filter(group => group.services.length > 0);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-16 text-center">
          <SectionLabel>Unisex Salon & Academy</SectionLabel>
          <h1
            className="text-5xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Services
          </h1>
          <p className="text-[#8a8578] mt-4 max-w-lg mx-auto">
            Professional grooming services for everyone. Expert care, premium results.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveGender("male")}
            className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
              activeGender === "male"
                ? "bg-[#c9a227] text-[#0d0d0d] shadow-lg shadow-[#c9a227]/20"
                : "bg-[#161616] border border-[#c9a227]/15 text-[#8a8578] hover:border-[#c9a227]/40 hover:text-[#f5f0e8]"
            }`}
          >
            Male
          </button>
          <button
            onClick={() => setActiveGender("female")}
            className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
              activeGender === "female"
                ? "bg-[#c9a227] text-[#0d0d0d] shadow-lg shadow-[#c9a227]/20"
                : "bg-[#161616] border border-[#c9a227]/15 text-[#8a8578] hover:border-[#c9a227]/40 hover:text-[#f5f0e8]"
            }`}
          >
            Female
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 mb-12 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#c9a227] text-[#0d0d0d]"
                  : "bg-[#161616] border border-[#c9a227]/15 text-[#8a8578] hover:border-[#c9a227]/40 hover:text-[#f5f0e8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services by Category */}
        {activeCategory === "All" ? (
          <div className="space-y-16">
            {groupedByCategory.map((group) => (
              <div key={group.category}>
                <h2
                  className="text-3xl font-bold text-[#f5f0e8] mb-8 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.services.map((svc) => (
                    <div
                      key={svc.id}
                      className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-6 hover:border-[#c9a227]/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                          <Scissors size={18} className="text-[#c9a227]" />
                        </div>
                      </div>

                      <h3
                        className="text-lg font-semibold text-[#f5f0e8] mb-4"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {svc.name}
                      </h3>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#c9a227]/10">
                        <span
                          className="text-xl font-bold text-[#c9a227]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {svc.price}
                        </span>
                        <button
                          onClick={() => router.push("/booking")}
                          className="px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227] hover:text-[#0d0d0d] transition-colors"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((svc) => (
              <div
                key={svc.id}
                className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-6 hover:border-[#c9a227]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                    <Scissors size={18} className="text-[#c9a227]" />
                  </div>
                </div>

                <h3
                  className="text-lg font-semibold text-[#f5f0e8] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {svc.name}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#c9a227]/10">
                  <span
                    className="text-xl font-bold text-[#c9a227]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {svc.price}
                  </span>
                  <button
                    onClick={() => router.push("/booking")}
                    className="px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227] hover:text-[#0d0d0d] transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page: Booking ────────────────────────────────────────────────────────────
