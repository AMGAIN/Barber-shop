"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Award, Calendar, CreditCard, User } from "lucide-react";
import { Badge } from "./SharedUI";
import type { UserBooking } from "./types";

interface ProfilePageProps {
  bookings: UserBooking[];
}

export function ProfilePage({ bookings }: ProfilePageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"history" | "upcoming" | "settings">("upcoming");

  const upcoming = bookings.filter((b) => b.status === "confirmed");
  const history = bookings.filter((b) => b.status !== "confirmed");

  const statusBadge = (s: string) => {
    const map: Record<string, { variant: "success" | "warning" | "danger" | "default"; label: string }> = {
      confirmed: { variant: "success", label: "Confirmed" },
      completed: { variant: "default", label: "Completed" },
      cancelled: { variant: "danger", label: "Cancelled" },
    };
    return <Badge variant={map[s]?.variant || "default"}>{map[s]?.label || s}</Badge>;
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Profile Header */}
        <div className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-6 mb-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#c9a227]/20 border border-[#c9a227]/30 flex items-center justify-center">
            <User size={28} className="text-[#c9a227]" />
          </div>
          <div className="flex-1">
            <h1
              className="text-xl font-bold text-[#f5f0e8]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Alex Reyes
            </h1>
            <p className="text-[#8a8578] text-sm">alex.reyes@example.com · +977 9812345678</p>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="gold">Loyal Client</Badge>
              <span className="text-[#8a8578] text-xs">Member since Jan 2024</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1">
            <span
              className="text-2xl font-bold text-[#c9a227]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              4
            </span>
            <span className="text-[#8a8578] text-xs">Total Visits</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Total Spent", value: "$175", icon: CreditCard },
            { label: "Fav Barber", value: "Marcus", icon: Award },
            { label: "Next Visit", value: "Jan 17", icon: Calendar },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-[#161616] border border-[#c9a227]/10 rounded-xl p-4 text-center"
            >
              <Icon size={16} className="text-[#c9a227] mx-auto mb-2" />
              <p
                className="text-[#f5f0e8] font-bold text-lg"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value}
              </p>
              <p className="text-[#8a8578] text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["upcoming", "history", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "bg-[#c9a227] text-[#0d0d0d]"
                  : "bg-[#161616] text-[#8a8578] hover:text-[#f5f0e8] border border-[#c9a227]/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "upcoming" && (
          <div className="space-y-4">
            {upcoming.length === 0 ? (
              <div className="text-center py-16 text-[#8a8578]">
                <Calendar size={40} className="mx-auto mb-3 opacity-40" />
                <p>No upcoming appointments</p>
                <button
                  onClick={() => router.push("/booking")}
                  className="mt-4 px-5 py-2.5 bg-[#c9a227] text-[#0d0d0d] rounded-xl text-sm font-semibold hover:bg-[#e8c547] transition-colors"
                >
                  Book Now
                </button>
              </div>
            ) : (
              upcoming.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#161616] border border-[#c9a227]/15 rounded-2xl p-5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="text-xs text-[#c9a227] font-medium"
                        style={{ fontFamily: "DM Mono, monospace" }}
                      >
                        {b.id}
                      </span>
                      <h3
                        className="text-[#f5f0e8] font-semibold mt-0.5"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {b.service}
                      </h3>
                    </div>
                    {statusBadge(b.status)}
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Barber", value: b.barber },
                      { label: "Date", value: b.date },
                      { label: "Time", value: b.time },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xs text-[#8a8578] mb-0.5">{label}</p>
                        <p className="text-[#f5f0e8] text-sm font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#232323]">
                    <span className="text-[#c9a227] font-semibold">${b.price}</span>
                    <button className="px-4 py-1.5 bg-red-900/30 border border-red-500/20 text-red-400 rounded-lg text-xs font-medium hover:bg-red-900/50 transition-colors">
                      Cancel Booking
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-3">
            {history.map((b) => (
              <div
                key={b.id}
                className="bg-[#161616] border border-[#c9a227]/8 rounded-xl p-4 flex items-center justify-between hover:border-[#c9a227]/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs text-[#c9a227]"
                      style={{ fontFamily: "DM Mono, monospace" }}
                    >
                      {b.id}
                    </span>
                    {statusBadge(b.status)}
                  </div>
                  <p className="text-[#f5f0e8] text-sm font-medium">{b.service}</p>
                  <p className="text-[#8a8578] text-xs">{b.barber} · {b.date}</p>
                </div>
                <div className="text-right">
                  <p
                    className="text-[#c9a227] font-semibold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    ${b.price}
                  </p>
                  {b.status === "completed" && (
                    <button
                      onClick={() => router.push("/booking")}
                      className="text-xs text-[#8a8578] hover:text-[#c9a227] mt-1 transition-colors"
                    >
                      Rebook
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-4">
            {[
              { label: "Full Name", value: "Alex Reyes", type: "text" },
              { label: "Email", value: "alex.reyes@example.com", type: "email" },
              { label: "Phone", value: "+977 9812345678", type: "tel" },
            ].map(({ label, value, type }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-[#8a8578] mb-2">{label}</label>
                <input
                  type={type}
                  defaultValue={value}
                  className="w-full bg-[#161616] border border-[#c9a227]/15 rounded-xl px-4 py-3 text-[#f5f0e8] text-sm outline-none focus:border-[#c9a227]/40 transition-colors"
                />
              </div>
            ))}
            <button className="mt-2 w-full py-3 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold text-sm hover:bg-[#e8c547] transition-colors">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Mobile Bottom Nav ────────────────────────────────────────────────────────
