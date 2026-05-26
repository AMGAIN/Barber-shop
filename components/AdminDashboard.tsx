"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Clock, LayoutDashboard, Scissors, Settings, TrendingUp, Users, X } from "lucide-react";
import { Badge, StarRating } from "./SharedUI";
import type { AdminAppointment, Barber, Service } from "./types";

interface AdminDashboardProps {
  appointments: AdminAppointment[];
  barbers: Barber[];
  services: Service[];
}

export function AdminDashboard({ appointments, barbers, services }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "appointments" | "services" | "barbers">("overview");
  const [statuses, setStatuses] = useState<Record<string, string>>(
    Object.fromEntries(appointments.map((a) => [a.id, a.status]))
  );

  const statusBadge = (s: string) => {
    const map: Record<string, { variant: "success" | "warning" | "danger" | "default"; label: string }> = {
      confirmed: { variant: "success", label: "Confirmed" },
      pending: { variant: "warning", label: "Pending" },
      cancelled: { variant: "danger", label: "Cancelled" },
      completed: { variant: "default", label: "Completed" },
    };
    return <Badge variant={map[s]?.variant || "default"}>{map[s]?.label || s}</Badge>;
  };

  const cards = [
    { label: "Total Bookings", value: "2,419", icon: Calendar, delta: "+12%" },
    { label: "Today's Appointments", value: "6", icon: Clock, delta: "+2" },
    { label: "Active Clients", value: "348", icon: Users, delta: "+8%" },
    { label: "Revenue (Month)", value: "$4,860", icon: TrendingUp, delta: "+18%" },
  ];

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-[#0a0a0a] border-r border-[#c9a227]/10 pt-8 pb-6 fixed top-16 bottom-0 left-0 z-40">
        <div className="px-5 mb-8">
          <p className="text-xs text-[#8a8578] uppercase tracking-widest" style={{ fontFamily: "DM Mono, monospace" }}>
            Admin Panel
          </p>
        </div>
        {[
          { label: "Overview", key: "overview", icon: LayoutDashboard },
          { label: "Appointments", key: "appointments", icon: Calendar },
          { label: "Services", key: "services", icon: Scissors },
          { label: "Barbers", key: "barbers", icon: Users },
        ].map(({ label, key, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as typeof activeTab)}
            className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-200 border-l-2 ${
              activeTab === key
                ? "text-[#c9a227] border-[#c9a227] bg-[#c9a227]/5"
                : "text-[#8a8578] border-transparent hover:text-[#f5f0e8] hover:bg-[#161616]"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
        <div className="mt-auto px-5">
          <button className="flex items-center gap-3 text-sm text-[#8a8578] hover:text-[#f5f0e8] transition-colors py-2">
            <Settings size={16} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-60 p-6">
        {/* Mobile Tabs */}
        <div className="lg:hidden flex gap-2 mb-6 overflow-x-auto pb-1">
          {["overview", "appointments", "services", "barbers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "bg-[#c9a227] text-[#0d0d0d]"
                  : "bg-[#161616] text-[#8a8578] hover:text-[#f5f0e8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div className="mb-8">
              <h1
                className="text-2xl font-bold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Dashboard Overview
              </h1>
              <p className="text-[#8a8578] text-sm mt-1">Friday, January 17, 2025</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cards.map(({ label, value, icon: Icon, delta }) => (
                <div
                  key={label}
                  className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-5 hover:border-[#c9a227]/25 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                      <Icon size={16} className="text-[#c9a227]" />
                    </div>
                    <span className="text-xs text-green-400 bg-green-900/30 px-2 py-0.5 rounded-full">
                      {delta}
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-[#f5f0e8] mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {value}
                  </div>
                  <p className="text-[#8a8578] text-xs">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <div className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-5">
                <h3
                  className="text-base font-semibold text-[#f5f0e8] mb-5"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Today&apos;s Schedule
                </h3>
                <div className="space-y-3">
                  {appointments.slice(0, 4).map((appt) => (
                    <div
                      key={appt.id}
                      className="flex items-center justify-between py-2.5 border-b border-[#232323] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-center w-14">
                          <span
                            className="text-xs font-medium text-[#c9a227]"
                            style={{ fontFamily: "DM Mono, monospace" }}
                          >
                            {appt.time}
                          </span>
                        </div>
                        <div>
                          <p className="text-[#f5f0e8] text-sm font-medium">{appt.client}</p>
                          <p className="text-[#8a8578] text-xs">{appt.service}</p>
                        </div>
                      </div>
                      {statusBadge(statuses[appt.id])}
                    </div>
                  ))}
                </div>
              </div>

              {/* Barber Workload */}
              <div className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-5">
                <h3
                  className="text-base font-semibold text-[#f5f0e8] mb-5"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Barber Workload Today
                </h3>
                <div className="space-y-5">
                  {barbers.map((b) => {
                    const count = appointments.filter((a) => a.barber === b.name).length;
                    const pct = Math.round((count / 6) * 100);
                    return (
                      <div key={b.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={b.img}
                              alt={b.name}
                              className="w-7 h-7 rounded-full object-cover bg-[#232323]"
                            />
                            <span className="text-[#f5f0e8] text-sm">{b.name}</span>
                          </div>
                          <span
                            className="text-[#c9a227] text-xs"
                            style={{ fontFamily: "DM Mono, monospace" }}
                          >
                            {count} appts
                          </span>
                        </div>
                        <div className="h-1.5 bg-[#232323] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#c9a227] to-[#e8c547] rounded-full transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "appointments" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1
                  className="text-2xl font-bold text-[#f5f0e8]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Appointments
                </h1>
                <p className="text-[#8a8578] text-sm mt-1">Manage and update booking status</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8a8578] text-sm">Today</span>
                <ChevronDown size={14} className="text-[#8a8578]" />
              </div>
            </div>

            <div className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#232323]">
                      {["ID", "Client", "Barber", "Service", "Time", "Status", "Action"].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left text-xs font-medium text-[#8a8578] uppercase tracking-wider"
                          style={{ fontFamily: "DM Mono, monospace" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appt) => (
                      <tr
                        key={appt.id}
                        className="border-b border-[#1e1e1e] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <td className="px-4 py-3.5">
                          <span
                            className="text-[#c9a227] text-xs font-medium"
                            style={{ fontFamily: "DM Mono, monospace" }}
                          >
                            {appt.id}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-[#f5f0e8] text-sm">{appt.client}</td>
                        <td className="px-4 py-3.5 text-[#8a8578] text-sm">{appt.barber}</td>
                        <td className="px-4 py-3.5 text-[#8a8578] text-sm">{appt.service}</td>
                        <td className="px-4 py-3.5 text-[#8a8578] text-sm font-mono">{appt.time}</td>
                        <td className="px-4 py-3.5">{statusBadge(statuses[appt.id])}</td>
                        <td className="px-4 py-3.5">
                          <select
                            value={statuses[appt.id]}
                            onChange={(e) => setStatuses({ ...statuses, [appt.id]: e.target.value })}
                            className="bg-[#232323] border border-[#c9a227]/15 text-[#f5f0e8] text-xs rounded-lg px-2 py-1.5 outline-none focus:border-[#c9a227]/40"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1
                className="text-2xl font-bold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Manage Services
              </h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0d0d0d] rounded-xl text-sm font-semibold hover:bg-[#e8c547] transition-colors">
                + Add Service
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-5 flex items-start justify-between hover:border-[#c9a227]/25 transition-colors"
                >
                  <div>
                    {/* <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#f5f0e8] font-semibold text-sm">{svc.name}</h3>
                      <Badge variant="gold">{svc.category}</Badge>
                    </div>
                    <p className="text-[#8a8578] text-xs mb-3">{svc.description}</p>
                    <div className="flex items-center gap-4 text-xs text-[#8a8578]">
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-[#c9a227]" /> {svc.duration}
                      </span>
                      <span className="text-[#c9a227] font-semibold">${svc.price}</span>
                    </div> */}
                  </div>
                  <div className="flex gap-2 ml-4 shrink-0">
                    <button className="w-8 h-8 rounded-lg bg-[#232323] flex items-center justify-center text-[#8a8578] hover:text-[#c9a227] transition-colors">
                      <Settings size={13} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#232323] flex items-center justify-center text-[#8a8578] hover:text-red-400 transition-colors">
                      <X size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "barbers" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1
                className="text-2xl font-bold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Barber Profiles
              </h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0d0d0d] rounded-xl text-sm font-semibold hover:bg-[#e8c547] transition-colors">
                + Add Barber
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {barbers.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl overflow-hidden hover:border-[#c9a227]/25 transition-colors"
                >
                  <div className="relative h-40 bg-[#1a1a1a]">
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent" />
                  </div>
                  <div className="p-4">
                    <h3
                      className="text-[#f5f0e8] font-semibold"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {b.name}
                    </h3>
                    <p className="text-[#8a8578] text-xs mb-2">{b.title} · {b.experience}</p>
                    <div className="flex items-center gap-1.5 mb-4">
                      <StarRating rating={b.rating} />
                      <span className="text-[#c9a227] text-xs">{b.rating} ({b.reviews})</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-[#232323] text-[#8a8578] rounded-lg text-xs hover:text-[#c9a227] transition-colors">
                        Edit Profile
                      </button>
                      <button className="flex-1 py-2 bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#c9a227] rounded-lg text-xs hover:bg-[#c9a227]/20 transition-colors">
                        View Schedule
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Page: Profile ────────────────────────────────────────────────────────────
