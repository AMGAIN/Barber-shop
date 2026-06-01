"use client"
import React from 'react'
import {Settings, X} from 'lucide-react'
import type { AdminAppointment, Barber, Service } from "../types";

interface AdminDashboardProps {
  services: Service[];
}
const Services = ({ services }: AdminDashboardProps) => {
    return (
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
    )
}

export default Services