"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Clock, LayoutDashboard, Scissors, Settings, TrendingUp, Users, X } from "lucide-react";
import { Badge, StarRating } from "./SharedUI";
import type { AdminAppointment, Barber, Service } from "./types";

import Appointment from "./adminComponents/Appointment";
import Services from "./adminComponents/Services";
import Overview from "./adminComponents/Overview";
import Barbers from "./adminComponents/Barbers";
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
          <Overview appointments={appointments} barbers={barbers} statuses={statuses}/>
        )}

        {activeTab === "appointments" && (
          <Appointment appointments={appointments} statuses={statuses} setStatuses={setStatuses}/>
        )}

        {activeTab === "services" && (
          <div>
            <Services services={services}/>
          </div>
        )}

        {activeTab === "barbers" && (
          <Barbers barbers={barbers}/>
        )}
      </main>
    </div>
  );
}

// ─── Page: Profile ────────────────────────────────────────────────────────────