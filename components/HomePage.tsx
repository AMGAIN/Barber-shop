"use client";

import { useRouter } from "next/navigation";
import { ChevronRight, Clock, MapPin, Phone, Scissors } from "lucide-react";
import { Badge, SectionLabel, StarRating } from "./SharedUI";
import type { Barber, Service, Testimonial } from "./types";
import Image, { type StaticImageData } from "next/image";
import pillor from "../public/Pillor-decoration.png"
interface HomePageProps {
  barbers: Barber[];
  services: Service[];
  testimonials: Testimonial[];
  galleryImgs: (string | StaticImageData)[];
}

export function HomePage({ barbers, services, testimonials, galleryImgs }: HomePageProps) {
  const router = useRouter();
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&h=1000&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/85 to-[#0d0d0d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          <div className="max-w-2xl">
            <SectionLabel>Est. 2012 — Unisex Salon & Academy</SectionLabel>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#f5f0e8] mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Art of
              <br />
              <span className="text-[#c9a227] italic">Sharp</span> Looks
            </h1>
            <p className="text-[#8a8578] text-lg text-justify leading-relaxed mb-10 max-w-lg">
              Unisex salon and professional academy. From precision cuts to advanced training — where style meets skill. Walk in looking good, leave looking exceptional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/booking")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold text-lg hover:bg-[#e8c547] transition-all duration-200 shadow-lg shadow-[#c9a227]/20"
              >
                Book Appointment
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => router.push("/services")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#c9a227]/30 text-[#f5f0e8] rounded-xl font-medium text-lg hover:border-[#c9a227]/60 hover:bg-[#c9a227]/5 transition-all duration-200"
              >
                View Services
              </button>
            </div>

            <div className="flex items-center gap-8 mt-14">
              {[
                { n: "2,400+", label: "Happy Clients" },
                { n: "4.9★", label: "Average Rating" },
                { n: "3", label: "Expert Barbers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold text-[#c9a227]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {stat.n}
                  </div>
                  <div className="text-xs text-[#8a8578] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>What We Offer</SectionLabel>
            <h2
              className="text-4xl font-bold text-[#f5f0e8]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Services
            </h2>
          </div>
          <button
            onClick={() => router.push("/services")}
            className="flex items-center gap-2 text-[#c9a227] text-sm font-medium hover:gap-3 transition-all"
          >
            View all services <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Hair Services", services: services.filter(s => s.category === "Hair Services" && s.gender === "male").slice(0, 2) },
            { title: "Colour", services: services.filter(s => s.category === "Colour" && s.gender === "male").slice(0, 2) },
            { title: "Hair Treatment", services: services.filter(s => s.category === "Hair Treatment" && s.gender === "female").slice(0, 2) }
          ].map((group, idx) => (
            <div
              key={idx}
              className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-6 hover:border-[#c9a227]/30 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                  <Scissors size={18} className="text-[#c9a227]" />
                </div>
                <Badge variant="gold">{group.title}</Badge>
              </div>
              <h3
                className="text-xl font-semibold text-[#f5f0e8] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {group.title}
              </h3>
              <div className="space-y-3 mb-5">
                {group.services.map((svc) => (
                  <div key={svc.id} className="flex items-center justify-between text-sm">
                    <span className="text-[#8a8578]">{svc.name}</span>
                    <span className="text-[#c9a227] font-semibold">{svc.price}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/services")}
                className="w-full text-sm text-[#c9a227] font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all"
              >
                View All <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Barbers */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>The Crew</SectionLabel>
            <h2
              className="text-4xl font-bold text-[#f5f0e8]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Meet Your Barbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {barbers.map((barber, idx) => (
              <div
                key={idx}
                className="bg-[#161616] rounded-2xl overflow-hidden border border-[#c9a227]/10 hover:border-[#c9a227]/30 transition-all duration-300 group"
              >
                <div className="relative h-64 bg-[#1a1a1a] overflow-hidden">
                  <img
                    src={barber.img}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                    <StarRating rating={barber.rating} />
                    <span className="text-[#c9a227] text-sm font-semibold">{barber.rating}</span>
                    <span className="text-[#8a8578] text-xs">({barber.reviews})</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-lg font-semibold text-[#f5f0e8]"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {barber.name}
                      </h3>
                      <p className="text-[#8a8578] text-sm">{barber.title}</p>
                    </div>
                    <Badge variant="default">{barber.experience}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {barber.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-[#c9a227]/8 border border-[#c9a227]/15 rounded-md text-[#c9a227] text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push("/booking")}
                    className="w-full py-2.5 bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#c9a227] rounded-xl text-sm font-medium hover:bg-[#c9a227] hover:text-[#0d0d0d] transition-all duration-200"
                  >
                    Book with {barber.name.split(" ")[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel>Client Reviews</SectionLabel>
          <h2
            className="text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#161616] border border-[#c9a227]/10 rounded-2xl p-6 hover:border-[#c9a227]/25 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <StarRating rating={t.rating} />
                <span className="text-[#8a8578] text-xs">{t.date}</span>
              </div>
              <p className="text-[#f5f0e8] text-sm leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover bg-[#232323]"
                />
                <div>
                  <p className="text-[#f5f0e8] text-sm font-medium">{t.name}</p>
                  <p className="text-[#8a8578] text-xs">Verified client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Our Work</SectionLabel>
            <h2
              className="text-4xl font-bold text-[#f5f0e8]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Gallery
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImgs.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#161616] group"
              >
                <Image
  src={img}
  alt={`Gallery ${i + 1}`}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
/>
                <div className="absolute inset-0 bg-[#0d0d0d]/0 group-hover:bg-[#0d0d0d]/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1506] via-[#161616] to-[#0f0f0f] border border-[#c9a227]/20 p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a22720_0%,_transparent_70%)]" />
          <div className="relative">
            <SectionLabel>Ready?</SectionLabel>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Book Your Next Cut
            </h2>
            <p className="text-[#8a8578] mb-8 max-w-md mx-auto">
              Reserve your slot in under 60 seconds. Choose your barber, pick your time, and you&apos;re done.
            </p>
            <button
              onClick={() => router.push("/booking")}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold text-lg hover:bg-[#e8c547] transition-all duration-200 shadow-lg shadow-[#c9a227]/30"
            >
              Book Appointment <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Find Us</SectionLabel>
              <h2
                className="text-3xl font-bold text-[#f5f0e8] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Visit the Shop
              </h2>
              <div className="space-y-4">
                {[
                  { Icon: MapPin, text: "Ganeshthan, Gongabu, Tokha, Nepal 44600" },
                  { Icon: Phone, text: "+977 982-0262220" },
                  { Icon: Clock, text: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 5:00 PM" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#c9a227]" />
                    </div>
                    <p className="text-[#8a8578] text-sm leading-relaxed whitespace-pre-line">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64 rounded-2xl bg-[#161616] border border-[#c9a227]/10 overflow-hidden relative">
              <Image
                src={pillor}
                alt="Barber shop interior"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#c9a227] text-[#0d0d0d] px-4 py-2 rounded-full font-semibold text-sm">
                  📍 Ganeshthan, Gongabu, Tokha
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Page: Services ───────────────────────────────────────────────────────────
