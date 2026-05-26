"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle, Check } from "lucide-react";

type PaymentStatusPageProps = {
  status: "success" | "failure";
};

export function PaymentStatusPage({ status }: PaymentStatusPageProps) {
  const router = useRouter();
  const success = status === "success";
  const Icon = success ? Check : AlertTriangle;

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border ${
            success
              ? "bg-green-900/30 border-green-500/30"
              : "bg-red-900/30 border-red-500/30"
          }`}
        >
          <Icon size={36} className={success ? "text-green-400" : "text-red-400"} />
        </div>
        <h2
          className="text-3xl font-bold text-[#f5f0e8] mb-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {success ? "Booking Confirmed!" : "Payment Failed"}
        </h2>
        <p className="text-[#8a8578] mb-2">
          {success ? "Payment successful." : "We could not complete your payment."}
        </p>
        <p className="text-[#8a8578] text-sm mb-8">
          {success
            ? "A confirmation has been sent to your phone. We look forward to seeing you."
            : "Your booking has not been confirmed yet. Please try again or choose another payment method."}
        </p>

        {success && (
          <div className="bg-[#161616] border border-green-500/20 rounded-2xl p-4 mb-8 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#8a8578]">Booking ID</span>
              <span className="text-[#c9a227] font-mono">BB-20250112</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8a8578]">Barber</span>
              <span className="text-[#f5f0e8]">Marcus Chen</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8a8578]">Service</span>
              <span className="text-[#f5f0e8]">Full Grooming</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8a8578]">Amount Paid</span>
              <span className="text-[#c9a227] font-semibold">Rs.60</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {!success && (
            <button
              onClick={() => router.replace("/payment")}
              className="px-8 py-3 bg-[#c9a227] text-[#0d0d0d] rounded-xl font-semibold hover:bg-[#e8c547] transition-colors"
            >
              Try Again
            </button>
          )}
          <button
            onClick={() => router.push("/")}
            className={`px-8 py-3 rounded-xl font-semibold transition-colors ${
              success
                ? "bg-[#c9a227] text-[#0d0d0d] hover:bg-[#e8c547]"
                : "bg-[#161616] border border-[#c9a227]/20 text-[#f5f0e8] hover:border-[#c9a227]/40"
            }`}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
