"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Shield } from "lucide-react";
import { GoldDivider, SectionLabel } from "./SharedUI";



export function PaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState<string | null>(null);

  const paymentMethods = [
    { id: "esewa", name: "eSewa", icon: "🟢", color: "text-green-400", desc: "Digital wallet" },
    { id: "khalti", name: "Khalti", icon: "💜", color: "text-purple-400", desc: "Mobile banking" },
    { id: "cash", name: "Cash on Arrival", icon: "💵", color: "text-[#c9a227]", desc: "Pay at shop" },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="py-12 text-center">
          <SectionLabel>Checkout</SectionLabel>
          <h1
            className="text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Complete Payment
          </h1>
        </div>

        {/* Summary */}
        <div className="bg-[#161616] border border-[#c9a227]/15 rounded-2xl p-5 mb-6">
          <h3 className="text-sm font-medium text-[#8a8578] uppercase tracking-widest mb-4" style={{ fontFamily: "DM Mono, monospace" }}>
            Order Summary
          </h3>
          <div className="space-y-3 mb-4">
            {[
              { label: "Full Grooming", value: "$60" },
              { label: "Marcus Chen", value: "" },
              { label: "Fri, Jan 17 @ 10:30 AM", value: "" },
            ].map(({ label, value }, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-[#8a8578] text-sm">{label}</span>
                {value && <span className="text-[#f5f0e8] text-sm font-semibold">{value}</span>}
              </div>
            ))}
          </div>
          <GoldDivider />
          <div className="flex justify-between items-center mt-4">
            <span className="text-[#f5f0e8] font-semibold">Total Due</span>
            <span
              className="text-2xl font-bold text-[#c9a227]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Rs.600
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <h3 className="text-sm font-medium text-[#8a8578] uppercase tracking-widest mb-4" style={{ fontFamily: "DM Mono, monospace" }}>
          Payment Method
        </h3>
        <div className="space-y-3 mb-6">
          {paymentMethods.map((pm) => (
            <button
              key={pm.id}
              onClick={() => setMethod(pm.id)}
              className={`w-full bg-[#161616] rounded-xl p-4 border text-left transition-all duration-200 flex items-center justify-between ${
                method === pm.id
                  ? "border-[#c9a227] bg-[#1a1506]"
                  : "border-[#c9a227]/10 hover:border-[#c9a227]/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{pm.icon}</span>
                <div>
                  <p className={`font-semibold text-sm ${method === pm.id ? "text-[#f5f0e8]" : "text-[#f5f0e8]"}`}>
                    {pm.name}
                  </p>
                  <p className="text-[#8a8578] text-xs">{pm.desc}</p>
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  method === pm.id ? "border-[#c9a227] bg-[#c9a227]" : "border-[#3a3a3a]"
                }`}
              >
                {method === pm.id && <Check size={11} className="text-[#0d0d0d]" />}
              </div>
            </button>
          ))}
        </div>

        {/* Security Note */}
        <div className="flex items-center gap-2 mb-6 bg-[#161616] rounded-xl p-3 border border-[#c9a227]/8">
          <Shield size={14} className="text-[#c9a227] shrink-0" />
          <p className="text-[#8a8578] text-xs">
            Payments are processed securely. Your financial data is never stored.
          </p>
        </div>

        <button
          disabled={!method}
          onClick={() => router.replace("/payment/success")}
          className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
            method
              ? "bg-[#c9a227] text-[#0d0d0d] hover:bg-[#e8c547] shadow-lg shadow-[#c9a227]/20"
              : "bg-[#232323] text-[#3a3a3a] cursor-not-allowed"
          }`}
        >
          {method ? `Pay with ${paymentMethods.find((p) => p.id === method)?.name}` : "Select Payment Method"}
        </button>
      </div>
    </div>
  );
}

// ─── Page: Admin Dashboard ────────────────────────────────────────────────────
