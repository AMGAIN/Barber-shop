'use client'
import React, { useState } from 'react'
import { Check, ChevronLeft, ChevronRight, CreditCard, Scissors } from "lucide-react";
import type { Barber, BookingState, Service } from "../types";
import { Badge, GoldDivider, SectionLabel, StarRating } from "../SharedUI";

const Services = () => {
    const [step, setStep] = useState(1);
    const [serviceGender, setServiceGender] = useState<"male" | "female">("male");
    const [booking, setBooking] = useState<BookingState>({
        barber: null,
        service: null,
        date: "",
        time: "",
    });
    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={() => setStep(1)}
                    className="text-[#8a8578] hover:text-[#c9a227] transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <h2
                    className="text-2xl font-semibold text-[#f5f0e8]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                >
                    Select a Service
                </h2>
            </div>
            <div className="mb-6">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <button
                        onClick={() => {
                            setServiceGender("male");
                            if (booking.service && booking.service.gender !== "male") {
                                setBooking({ ...booking, service: null });
                            }
                        }}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${serviceGender === "male"
                                ? "bg-[#c9a227] text-[#0d0d0d]"
                                : "bg-[#161616] border border-[#c9a227]/15 text-[#8a8578] hover:border-[#c9a227]/40 hover:text-[#f5f0e8]"
                            }`}
                    >
                        Male Services
                    </button>
                    <button
                        onClick={() => {
                            setServiceGender("female");
                            if (booking.service && booking.service.gender !== "female") {
                                setBooking({ ...booking, service: null });
                            }
                        }}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${serviceGender === "female"
                                ? "bg-[#c9a227] text-[#0d0d0d]"
                                : "bg-[#161616] border border-[#c9a227]/15 text-[#8a8578] hover:border-[#c9a227]/40 hover:text-[#f5f0e8]"
                            }`}
                    >
                        Female Services
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.filter(s => s.gender === serviceGender).slice(0, 12).map((svc) => (
                    <button
                        key={svc.id}
                        onClick={() => {
                            setBooking({ ...booking, service: svc });
                            setStep(3);
                        }}
                        className={`bg-[#161616] rounded-2xl p-5 border text-left transition-all duration-200 hover:border-[#c9a227]/40 ${booking.service?.id === svc.id
                                ? "border-[#c9a227]"
                                : "border-[#c9a227]/10"
                            }`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                                    <Scissors size={16} className="text-[#c9a227]" />
                                </div>
                                <div>
                                    <h3
                                        className="text-base font-semibold text-[#f5f0e8]"
                                        style={{ fontFamily: "Playfair Display, serif" }}
                                    >
                                        {svc.name}
                                    </h3>
                                    <Badge variant="gold">{svc.category}</Badge>
                                </div>
                            </div>
                            {booking.service?.id === svc.id && (
                                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center">
                                    <Check size={12} className="text-[#0d0d0d]" />
                                </div>
                            )}
                        </div>
                        <span
                            className="text-lg font-bold text-[#c9a227]"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            {svc.price}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Services