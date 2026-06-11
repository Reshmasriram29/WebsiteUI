import React from "react";
import { Zap, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Syllabus", href: "#syllabus" },
  { label: "Projects", href: "#projects" },
  { label: "Mentor", href: "#mentor" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(to bottom, transparent, #030712)" }}>
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#24F2C7]/20 to-transparent" />

      {/* Aurora glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#24F2C7]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#A855F7]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#24F2C7] to-[#A855F7] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#050816]" />
              </div>
              <span className="text-white font-semibold text-lg font-body">Build Your AI System</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 font-body">
              A live project-based AI program to build real AI systems, not just learn theory. From Python to deployed AI — in 6 weeks.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/reshmawithai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-[#24F2C7] hover:border-[#24F2C7]/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917010611695"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-[#A855F7] hover:border-[#A855F7]/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-body text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-white/40 hover:text-[#24F2C7] text-sm transition-colors group font-body"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 font-body text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/917010611695"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-[#24F2C7] text-sm transition-colors font-body"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                +91 7010611695
              </a>
              <a
                href="https://www.linkedin.com/in/reshmawithai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-[#A855F7] text-sm transition-colors font-body"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                Reshma Sriraman
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-body">
            © {new Date().getFullYear()} Build Your AI System by Reshma Sriraman. All rights reserved.
          </p>
          <p className="text-xs font-body" style={{ color: "rgba(36,242,199,0.3)" }}>
            Designed for builders, by builders.
          </p>
        </div>
      </div>
    </footer>
  );
}