"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, ChevronRight, CreditCard, Scissors } from "lucide-react";
import { Badge, GoldDivider, SectionLabel, StarRating } from "./SharedUI";
import type { Barber, BookingState, Service } from "./types";

interface BookingPageProps {
  barbers: Barber[];
  services: Service[];
  timeSlots: string[];
  bookedSlots: string[];
}

export function BookingPage({ barbers, services, timeSlots, bookedSlots }: BookingPageProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [serviceGender, setServiceGender] = useState<"male" | "female">("male");
  const [booking, setBooking] = useState<BookingState>({
    barber: null,
    service: null,
    date: "",
    time: "",
  });

  const totalSteps = 4;

  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  const stepLabels = ["Barber", "Service", "Date & Time", "Confirm"];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-12 text-center">
          <SectionLabel>Reserve Your Slot</SectionLabel>
          <h1
            className="text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Book an Appointment
          </h1>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-0 mb-12">
          {stepLabels.map((label, i) => {
            const n = i + 1;
            const done = step > n;
            const active = step === n;
            return (
              <div key={n} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1.5 relative">
                  <button
                    onClick={() => done && setStep(n)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      done
                        ? "bg-[#c9a227] text-[#0d0d0d] cursor-pointer"
                        : active
                        ? "bg-[#c9a227] text-[#0d0d0d] ring-4 ring-[#c9a227]/20"
                        : "bg-[#232323] text-[#8a8578]"
                    }`}
                  >
                    {done ? <Check size={16} /> : n}
                  </button>
                  <span
                    className={`text-xs whitespace-nowrap ${
                      active ? "text-[#c9a227]" : done ? "text-[#8a8578]" : "text-[#3a3a3a]"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-px mx-2 mt-[-12px] transition-colors duration-300 ${
                      step > n ? "bg-[#c9a227]" : "bg-[#232323]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Step 1: Barber */}
        {step === 1 && (
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
                  className={`bg-[#161616] rounded-2xl overflow-hidden border text-left transition-all duration-300 hover:border-[#c9a227]/40 group ${
                    booking.barber?.id === barber.id
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
        )}

        {/* Step 2: Service */}
        {step === 2 && (
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
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                    serviceGender === "male"
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
                  className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                    serviceGender === "female"
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
                  className={`bg-[#161616] rounded-2xl p-5 border text-left transition-all duration-200 hover:border-[#c9a227]/40 ${
                    booking.service?.id === svc.id
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
        )}

        {/* Step 3: Date & Time */}
        {step === 3 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setStep(2)}
                className="text-[#8a8578] hover:text-[#c9a227] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <h2
                className="text-2xl font-semibold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Pick Date & Time
              </h2>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium text-[#8a8578] mb-4 uppercase tracking-wider" style={{ fontFamily: "DM Mono, monospace" }}>
                Select Date
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {getDates().map((d, i) => {
                  const iso = d.toISOString().split("T")[0];
                  const isSelected = booking.date === iso;
                  const isToday = i === 0;
                  return (
                    <button
                      key={iso}
                      onClick={() => setBooking({ ...booking, date: iso, time: "" })}
                      className={`shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                        isSelected
                          ? "bg-[#c9a227] border-[#c9a227] text-[#0d0d0d]"
                          : "bg-[#161616] border-[#c9a227]/10 text-[#8a8578] hover:border-[#c9a227]/30 hover:text-[#f5f0e8]"
                      }`}
                    >
                      <span className="text-xs font-medium">{formatDate(d).split(",")[0]}</span>
                      <span className="text-lg font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                        {d.getDate()}
                      </span>
                      <span className="text-xs">{d.toLocaleDateString("en-US", { month: "short" })}</span>
                      {isToday && !isSelected && (
                        <span className="text-[10px] text-[#c9a227]">Today</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {booking.date && (
              <div>
                <h3 className="text-sm font-medium text-[#8a8578] mb-4 uppercase tracking-wider" style={{ fontFamily: "DM Mono, monospace" }}>
                  Available Times
                </h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                  {timeSlots.map((slot) => {
                    const booked = bookedSlots.includes(slot);
                    const selected = booking.time === slot;
                    return (
                      <button
                        key={slot}
                        disabled={booked}
                        onClick={() => setBooking({ ...booking, time: slot })}
                        className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                          booked
                            ? "bg-[#1a1a1a] text-[#3a3a3a] cursor-not-allowed"
                            : selected
                            ? "bg-[#c9a227] text-[#0d0d0d]"
                            : "bg-[#161616] border border-[#c9a227]/10 text-[#8a8578] hover:border-[#c9a227]/30 hover:text-[#f5f0e8]"
                        }`}
                      >
                        {booked ? (
                          <span className="line-through">{slot}</span>
                        ) : (
                          slot
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[#8a8578] mt-3">
                  <span className="inline-block w-3 h-3 bg-[#1a1a1a] rounded mr-1 align-middle" />
                  Struck slots are already booked
                </p>
              </div>
            )}

            {booking.date && booking.time && (
              <button
                onClick={() => setStep(4)}
                className="mt-8 w-full py-4 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold text-base hover:bg-[#e8c547] transition-colors flex items-center justify-center gap-2"
              >
                Continue to Confirm <ChevronRight size={18} />
              </button>
            )}
          </div>
        )}

        {/* Step 4: Confirm */}
        {step === 4 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setStep(3)}
                className="text-[#8a8578] hover:text-[#c9a227] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <h2
                className="text-2xl font-semibold text-[#f5f0e8]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Confirm Booking
              </h2>
            </div>

            <div className="bg-[#161616] border border-[#c9a227]/20 rounded-2xl p-6 mb-6">
              <h3
                className="text-lg font-semibold text-[#f5f0e8] mb-5"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Booking Summary
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Barber",
                    value: booking.barber?.name,
                    sub: booking.barber?.title,
                  },
                  {
                    label: "Service",
                    value: booking.service?.name,
                    sub: booking.service?.category,
                  },
                  {
                    label: "Date",
                    value: booking.date
                      ? new Date(booking.date + "T00:00:00").toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "",
                    sub: null,
                  },
                  { label: "Time", value: booking.time, sub: null },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3 border-b border-[#c9a227]/8 last:border-0"
                  >
                    <span className="text-[#8a8578] text-sm">{label}</span>
                    <div className="text-right">
                      <span className="text-[#f5f0e8] text-sm font-medium">{value}</span>
                      {sub && <p className="text-[#8a8578] text-xs">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <GoldDivider />
              <div className="flex items-center justify-between mt-4">
                <span className="text-[#8a8578] font-medium">Total</span>
                <span
                  className="text-2xl font-bold text-[#c9a227]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {booking.service?.price}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => router.push("/payment")}
                className="w-full py-4 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold text-base hover:bg-[#e8c547] transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard size={18} />
                Pay Now — {booking.service?.price}
              </button>
              <button className="w-full py-4 bg-[#161616] border border-[#c9a227]/20 text-[#f5f0e8] rounded-xl font-medium text-base hover:border-[#c9a227]/40 transition-colors flex items-center justify-center gap-2">
                <Check size={18} className="text-[#c9a227]" />
                Confirm & Pay at Shop
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page: Payment ────────────────────────────────────────────────────────────
