import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Syllabus", href: "#syllabus" },
  { label: "Projects", href: "#projects" },
  { label: "Mentor", href: "#mentor" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#24F2C7] to-[#A855F7] flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#050816]" />
            </div>
            <span className="text-white font-semibold text-base hidden sm:block font-body">Build Your AI System</span>
            <span className="text-white font-semibold text-base sm:hidden font-body">BYAS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/917010611695?text=Hi%20Reshma!%20I'm%20interested%20in%20the%20AI%20program."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="text-[#24F2C7] hover:text-[#24F2C7] hover:bg-[#24F2C7]/10 font-body">
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
            </a>
            <a href="#pricing">
              <Button size="sm" className="bg-gradient-to-r from-[#24F2C7] to-[#43E7FF] text-[#050816] hover:opacity-90 font-bold rounded-xl font-body">
                Enroll Now
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050816]/98 backdrop-blur-2xl border-t border-white/[0.06] pb-6"
        >
          <div className="px-4 pt-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/60 hover:text-white py-2 text-base font-medium font-body"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a href="#pricing" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#24F2C7] to-[#43E7FF] text-[#050816] font-bold rounded-xl font-body">
                  Enroll Now
                </Button>
              </a>
              <a href="https://wa.me/917010611695" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-[#24F2C7]/20 text-[#24F2C7] hover:bg-[#24F2C7]/10 font-body">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}