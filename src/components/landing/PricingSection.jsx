import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, CreditCard, ArrowRight, MessageCircle } from "lucide-react";

const features = [
  "6 weeks of live sessions",
  "8+ hands-on projects",
  "Mentor support from Reshma",
  "GitHub portfolio project",
  "LinkedIn branding guidance",
  "Deployment-ready capstone",
  "Community access (300K+ builders)",
  "Certificate of completion",
];

export default function PricingSection() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleRazorpay = () => {
    // TODO: Replace with actual Razorpay key and order API
    // const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXX";
    
    // For now, show a message directing to WhatsApp
    window.open(
      "https://wa.me/917010611695?text=Hi%20Reshma!%20I'd%20like%20to%20enroll%20in%20the%20Build%20Your%20AI%20System%20program.",
      "_blank"
    );

    /*
    // Razorpay Integration Code (uncomment when ready):
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 499900, // Amount in paise (₹4,999)
      currency: "INR",
      name: "Build Your AI System",
      description: "Live AI Program - 6 Weeks",
      handler: function (response) {
        setPaymentStatus("success");
        // Save payment to database
        // response.razorpay_payment_id
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: { color: "#0066FF" },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.on("payment.failed", () => setPaymentStatus("failed"));
    razorpay.open();
    */
  };

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#24F2C7]/5 rounded-full blur-[140px]" />
      <div className="aurora-1 absolute top-0 right-0 w-[400px] h-[400px] bg-[#A855F7]/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#24F2C7] text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-body">Investment</span>
          <h2 className="font-heading font-medium text-white leading-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Start Building <span className="text-accent-gradient">Today</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-[36px] bg-gradient-to-br from-[#24F2C7]/8 via-[#0A0F1F]/60 to-[#A855F7]/8 border border-[#24F2C7]/20 backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(36,242,199,0.08),0_0_160px_rgba(168,85,247,0.06)]">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#24F2C7]/60 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent" />
            <div className="absolute -top-20 left-1/4 w-40 h-40 bg-[#24F2C7]/15 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 right-1/4 w-40 h-40 bg-[#A855F7]/15 rounded-full blur-[60px]" />

            <div className="relative p-8 sm:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24F2C7]/10 border border-[#24F2C7]/20 mb-4">
                  <Zap className="w-3 h-3 text-[#24F2C7]" />
                  <span className="text-xs font-bold text-[#24F2C7] uppercase tracking-wider font-body">Launch Price</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Build Your AI System</h3>
                <p className="text-slate-400 text-sm">Live Program · 6 Weeks · Limited Seats</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl text-slate-500 line-through">₹69,999</span>
                  <span className="text-5xl sm:text-6xl font-black text-white">
                    ₹29,999
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-2">One-time payment · No hidden charges</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#24F2C7]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#24F2C7]" />
                    </div>
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {paymentStatus === "success" ? (
                <div className="text-center py-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <Check className="w-8 h-8 text-[#10B981] mx-auto mb-2" />
                  <p className="text-[#10B981] font-bold">Payment Successful!</p>
                  <p className="text-slate-400 text-sm">Welcome to the program.</p>
                </div>
              ) : paymentStatus === "failed" ? (
                <div className="text-center py-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                  <p className="text-red-400 font-bold">Payment Failed</p>
                  <p className="text-slate-400 text-sm">Please try again or contact us on WhatsApp.</p>
                </div>
              ) : null}

              <Button
                onClick={handleRazorpay}
                className="w-full h-14 bg-gradient-to-r from-[#24F2C7] to-[#43E7FF] hover:opacity-90 text-[#050816] font-bold text-base rounded-2xl glow-emerald font-body"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay Securely with Razorpay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <a
                href="https://wa.me/917010611695?text=Hi%20Reshma!%20I%20have%20questions%20about%20the%20payment."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3"
              >
                <Button variant="ghost" className="w-full h-11 text-white/40 hover:text-[#A855F7] hover:bg-[#A855F7]/5 font-body">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Have questions? Chat on WhatsApp
                </Button>
              </a>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/[0.06]">
                <Shield className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-500">Secured by Razorpay · UPI · Cards · NetBanking</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}