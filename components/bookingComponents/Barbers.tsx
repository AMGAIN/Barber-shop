'use client'
import React, { useState } from 'react'
import type { Barber, BookingState, Service } from "../types";
import { Check, ChevronLeft, ChevronRight, CreditCard, Scissors } from "lucide-react";
import { Badge, GoldDivider, SectionLabel, StarRating } from "../SharedUI";

const barbers = [
  {
    id: 1,
    name: "James Carter",
    title: "Senior Barber",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    id: 2,
    name: "Michael Brooks",
    title: "Fade & Beard Specialist",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    title: "Classic Cuts Expert",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
  },
];

interface BookingPageProps {
  barbers: Barber[];
  services: Service[];
  timeSlots: string[];
  bookedSlots: string[];
}

const Barbers = () => {
      const [step, setStep] = useState(1);
      const [booking, setBooking] = useState<BookingState>({
        barber: null,
        service: null,
        date: "",
        time: "",
      });
    return (
        <div>
            <h2
                className="text-2xl font-semibold text-[#f5f0e8] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
            >
                Choose Your Barber
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {barbers.map((barber, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setBooking({ ...booking, barber });
                            setStep(2);
                        }}
                        className={`bg-[#161616] rounded-2xl overflow-hidden border text-left transition-all duration-300 hover:border-[#c9a227]/40 group ${booking.barber?.id === barber.id
                                ? "border-[#c9a227]"
                                : "border-[#c9a227]/10"
                            }`}
                    >
                        <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
                            <img
                                src={barber.img}
                                alt={barber.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/90 via-transparent" />
                            {booking.barber?.id === barber.id && (
                                <div className="absolute top-3 right-3 w-7 h-7 bg-[#c9a227] rounded-full flex items-center justify-center">
                                    <Check size={14} className="text-[#0d0d0d]" />
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3
                                className="text-base font-semibold text-[#f5f0e8]"
                                style={{ fontFamily: "Playfair Display, serif" }}
                            >
                                {barber.name}
                            </h3>
                            <p className="text-[#8a8578] text-xs mb-2">{barber.title}</p>
                            <div className="flex items-center gap-1.5">
                                <StarRating rating={barber.rating} />
                                <span className="text-[#c9a227] text-xs">{barber.rating}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Barbers