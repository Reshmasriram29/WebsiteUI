import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Zap, X } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function LeadCaptureModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    role: "",
    wants_to_build: false,
  });

  useEffect(() => {
    const seen = localStorage.getItem("lead_captured");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email) return;
    setLoading(true);
    await base44.entities.Lead.create({ ...form, source: "popup" });
    localStorage.setItem("lead_captured", "true");
    setSubmitted(true);
    setLoading(false);
    setTimeout(() => setOpen(false), 2000);
  };

  const handleWhatsApp = () => {
    localStorage.setItem("lead_captured", "true");
    window.open("https://wa.me/917010611695?text=Hi%20Reshma!%20I'm%20interested%20in%20the%20Build%20Your%20AI%20System%20program.", "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm bg-[#080d1a]/95 backdrop-blur-2xl border border-white/10 text-white p-0 overflow-hidden">
        {/* Green glass top glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/15 via-[#0a0f1e]/80 to-[#8B5CF6]/15 pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#10B981]/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-[60px] pointer-events-none" />
        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/60 to-transparent" />

        <div className="relative p-5">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-14 h-14 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-3 border border-[#10B981]/30">
                <Zap className="w-7 h-7 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold mb-2">You're In!</h3>
              <p className="text-slate-400 text-sm">Welcome to the Build Your AI System program.</p>
            </motion.div>
          ) : (
            <>
              <DialogHeader className="mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-medium text-[#10B981] uppercase tracking-wider">Live Program · Limited Seats</span>
                </div>
                <DialogTitle className="text-xl font-bold text-white leading-tight">
                  Build Real <span className="bg-gradient-to-r from-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">AI Systems</span>
                </DialogTitle>
                <p className="text-slate-400 text-xs mt-1">Join India's most hands-on AI program.</p>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label className="text-slate-300 text-xs">Full Name</Label>
                  <Input
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    placeholder="Your full name"
                    className="bg-[#10B981]/5 border-[#10B981]/20 text-white placeholder:text-slate-500 mt-1 h-9 text-sm focus:border-[#10B981]"
                    required
                  />
                </div>
                <div>
                  <Label className="text-slate-300 text-xs">Email Address</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="bg-[#10B981]/5 border-[#10B981]/20 text-white placeholder:text-slate-500 mt-1 h-9 text-sm focus:border-[#10B981]"
                    required
                  />
                </div>
                <div>
                  <Label className="text-slate-300 text-xs">Phone Number</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-[#8B5CF6]/5 border-[#8B5CF6]/20 text-white placeholder:text-slate-500 mt-1 h-9 text-sm focus:border-[#8B5CF6]"
                  />
                </div>
                <div className="flex items-center gap-2 py-0.5">
                  <Checkbox
                    checked={form.wants_to_build}
                    onCheckedChange={(c) => setForm({ ...form, wants_to_build: c })}
                    className="border-white/20 data-[state=checked]:bg-[#10B981] data-[state=checked]:border-[#10B981]"
                  />
                  <span className="text-xs text-slate-300">I want to build real AI systems</span>
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-10 bg-gradient-to-r from-[#10B981] to-[#059669] hover:opacity-90 text-white font-semibold text-sm rounded-xl shimmer-btn border border-[#10B981]/30"
                  >
                    <Zap className="w-3.5 h-3.5 mr-2" />
                    {loading ? "Joining..." : "Join the Program"}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full h-10 border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#c4b5fd] hover:bg-[#8B5CF6]/20 font-semibold text-sm rounded-xl"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2" />
                    Talk on WhatsApp
                  </Button>
                </div>
                <p className="text-xs text-slate-600 text-center">
                  We respect your privacy.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}