import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Users, GitBranch, Linkedin, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Not Theory-Only",
    desc: "Every session ends with something you built. Code, deploy, repeat.",
    color: "#24F2C7",
    glow: "rgba(36,242,199,0.12)",
  },
  {
    icon: Layers,
    title: "End-to-End Systems",
    desc: "From data pipeline to deployed UI — build complete AI applications.",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: Users,
    title: "Mentorship from Reshma",
    desc: "Direct guidance from an AI builder who has helped 300K+ learners.",
    color: "#43E7FF",
    glow: "rgba(67,231,255,0.12)",
  },
  {
    icon: GitBranch,
    title: "GitHub-Ready Projects",
    desc: "Create deployable, well-structured projects for your portfolio.",
    color: "#24F2C7",
    glow: "rgba(36,242,199,0.12)",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Personal Branding",
    desc: "Build your public profile as an AI builder with strategic positioning.",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: Lightbulb,
    title: "300K+ Builder Network",
    desc: "Join an active community of AI enthusiasts and builders from India.",
    color: "#43E7FF",
    glow: "rgba(67,231,255,0.12)",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="aurora-2 absolute top-0 right-0 w-[600px] h-[600px] bg-[#A855F7]/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#24F2C7]/6 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#24F2C7] text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-body">
            Why This Program
          </span>
          <h2 className="font-heading font-medium text-white leading-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            Not Your Average <span className="text-accent-gradient">AI Course</span>
          </h2>
          <p className="font-body text-white/55 max-w-2xl mx-auto text-lg leading-relaxed">
            We bridge the gap between knowing AI and building AI systems that work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-7 rounded-[28px] glass-card hover:scale-[1.02] transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${card.glow}, transparent 70%)` }}
              />
              {/* Top border accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative"
                style={{ background: `${card.color}12`, border: `1px solid ${card.color}20` }}
              >
                <card.icon className="w-5 h-5" style={{ color: card.color }} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5 font-body">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-body">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}