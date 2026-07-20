import React from 'react'
import type { AdminAppointment, Barber, Service } from "../types";
import { Badge, StarRating } from "../SharedUI";

interface OverviewProps {
    appointments: AdminAppointment[];
    barbers: Barber[];
    statuses: Record<string, string>;
}
import { Calendar, Clock, Users, TrendingUp } from 'lucide-react';
const cards = [
    { label: "Total Bookings", value: "2,419", icon: Calendar, delta: "+12%" },
    { label: "Today's Appointments", value: "6", icon: Clock, delta: "+2" },
    { label: "Active Clients", value: "348", icon: Users, delta: "+8%" },
    { label: "Revenue (Month)", value: "$4,860", icon: TrendingUp, delta: "+18%" },
];

  const statusBadge = (s: string) => {
    const map: Record<string, { variant: "success" | "warning" | "danger" | "default"; label: string }> = {
      confirmed: { variant: "success", label: "Confirmed" },
      pending: { variant: "warning", label: "Pending" },
      cancelled: { variant: "danger", label: "Cancelled" },
      completed: { variant: "default", label: "Completed" },
    };
    return <Badge variant={map[s]?.variant || "default"}>{map[s]?.label || s}</Badge>;
  };

const Overview = ({ appointments, barbers, statuses }: OverviewProps) => {
    return (
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
                                {statusBadge(statuses?.[appt.id] ?? "pending")}
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
                        {barbers.map((b, idx) => {
                            const count = appointments.filter((a) => a.barber === b.name).length;
                            const pct = Math.round((count / 6) * 100);
                            return (
                                <div key={idx}>
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
    )
}

export default Overview