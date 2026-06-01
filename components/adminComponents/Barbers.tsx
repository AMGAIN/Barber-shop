import React from 'react'
import { StarRating } from '../SharedUI'
import type {  Barber  } from "../types";

interface barberProps{
  barbers: Barber[];
}

const Barbers = ({barbers}: barberProps) => {
    return (
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
    )
}

export default Barbers