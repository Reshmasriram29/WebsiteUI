import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, MessageCircle, Users, BookOpen, Award, Zap } from "lucide-react";

const stats = [
  { num: "300K+", label: "Community Members", icon: Users, color: "#24F2C7" },
  { num: "50+", label: "AI Projects Shipped", icon: BookOpen, color: "#43E7FF" },
  { num: "6+", label: "Years in AI/Tech", icon: Award, color: "#A855F7" },
];

export default function MentorSection() {
  return (
    <section id="mentor" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="aurora-1 absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#A855F7]/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#24F2C7]/6 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#A855F7] text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-body">
            Your Mentor
          </span>
          <h2 className="font-heading font-medium text-white leading-tight" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Learn from <span className="text-accent-gradient">Reshma Sriraman</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-[36px] glass-card overflow-hidden p-1">
            {/* Inner glow border */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#24F2C7]/50 to-transparent" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#24F2C7]/8 rounded-full blur-[80px]" />

            <div className="relative p-8 sm:p-12 flex flex-col md:flex-row gap-10 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#24F2C7]/30 to-[#A855F7]/30 blur-xl" />
                  <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#24F2C7]/15 to-[#A855F7]/15 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <span className="text-5xl sm:text-6xl font-black text-accent-gradient font-heading">RS</span>
                  </div>
                  {/* Online badge */}
                  <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#24F2C7]/15 border border-[#24F2C7]/30 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#24F2C7] animate-pulse" />
                    <span className="text-[10px] font-medium text-[#24F2C7] font-body">Live</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Zap className="w-3.5 h-3.5 text-[#24F2C7]" />
                  <span className="text-xs font-medium text-[#24F2C7] uppercase tracking-wider font-body">AI Mentor & Builder</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 font-body">Reshma Sriraman</h3>
                <p className="text-white/55 leading-relaxed mb-8 font-body text-sm sm:text-base">
                  Reshma helps learners move from AI curiosity to real AI execution by building practical systems, projects, automations, and a strong LinkedIn presence. With a community of 300K+ builders, she brings real-world mentorship to every session.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-3.5 rounded-2xl font-body"
                      style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}
                    >
                      <div className="text-lg sm:text-xl font-bold font-body" style={{ color: s.color }}>{s.num}</div>
                      <div className="text-xs text-white/40 mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://www.linkedin.com/in/reshmawithai/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full sm:w-auto h-11 bg-gradient-to-r from-[#24F2C7] to-[#43E7FF] text-[#050816] font-bold hover:opacity-90 rounded-xl font-body">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                  <a href="https://wa.me/917010611695?text=Hi%20Reshma!%20I'd%20love%20to%20learn%20more%20about%20the%20AI%20program." target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full sm:w-auto h-11 border-[#A855F7]/30 text-[#A855F7] hover:bg-[#A855F7]/10 font-semibold rounded-xl font-body">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Speak on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}