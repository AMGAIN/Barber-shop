"use client"
import React from 'react'
import { useState } from 'react';
import type { AdminAppointment, Barber, Service } from "../types";
import { ChevronDown,  } from 'lucide-react'
import { Badge, StarRating } from "../SharedUI";

interface AppointmentProps {
    appointments: AdminAppointment[];
    statuses: Record<string, string>;
    setStatuses: React.Dispatch<React.SetStateAction<Record<string, string>>>;

}
  const statusBadge = (s: string) => {
    const map: Record<string, { variant: "success" | "warning" | "danger" | "default"; label: string }> = {
      confirmed: { variant: "success", label: "Confirmed" },
      pending: { variant: "warning", label: "Pending" },
      cancelled: { variant: "danger", label: "Cancelled" },
      completed: { variant: "default", label: "Completed" },
    };
    return <Badge variant={map[s]?.variant || "default"}>{map[s]?.label || s}</Badge>;
  };

const Appointment = ({ appointments, statuses, setStatuses }: AppointmentProps) => {

  return (
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
  )
}

export default Appointment