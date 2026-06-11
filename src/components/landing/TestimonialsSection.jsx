import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Software Engineer",
    text: "This course helped me build my first AI project. The hands-on approach made everything click.",
    initials: "AS",
    color: "#24F2C7",
  },
  {
    name: "Priya Nair",
    role: "Data Analyst",
    text: "The RAG chatbot project gave me portfolio confidence. I landed interviews because of this project.",
    initials: "PN",
    color: "#A855F7",
  },
  {
    name: "Rahul Verma",
    role: "Student",
    text: "The LinkedIn branding support helped me post my work better. My profile views jumped 10x.",
    initials: "RV",
    color: "#43E7FF",
  },
  {
    name: "Sneha Kapoor",
    role: "Product Manager",
    text: "The mentors explained AI in a practical way. No unnecessary jargon — just clear, buildable systems.",
    initials: "SK",
    color: "#24F2C7",
  },
  {
    name: "Varun Mehta",
    role: "Freelancer",
    text: "I finally understood how to build end-to-end AI systems. The n8n automation module was a game-changer.",
    initials: "VM",
    color: "#A855F7",
  },
];

const metrics = [
  { value: "95%", label: "Completion Rate", color: "#24F2C7" },
  { value: "10x", label: "Productivity Gain", color: "#43E7FF" },
  { value: "300K+", label: "Builder Community", color: "#A855F7" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="aurora-2 absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/8 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#24F2C7]/6 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#A855F7] text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-body">
            Testimonials
          </span>
          <h2 className="font-heading font-medium text-white leading-tight mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            What Builders <span className="text-accent-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-5 max-w-2xl mx-auto mb-16"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center p-5 rounded-[24px] glass-card">
              <div className="font-heading font-medium mb-1" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: m.color }}>
                {m.value}
              </div>
              <div className="text-white/45 text-xs font-body">{m.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative p-7 rounded-[28px] glass-card hover:scale-[1.02] transition-all duration-300 overflow-hidden ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 20% 20%, ${t.color}10, transparent 60%)` }}
              />
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}40, transparent)` }} />

              <Quote className="w-6 h-6 mb-4 opacity-20" style={{ color: t.color }} />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 font-body">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-body"
                  style={{ background: `${t.color}15`, border: `1px solid ${t.color}30`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white font-body">{t.name}</div>
                  <div className="text-xs text-white/40 font-body">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}