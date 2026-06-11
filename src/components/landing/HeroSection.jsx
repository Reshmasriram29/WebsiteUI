import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, BookOpen, Rocket, Users, Briefcase, Linkedin, Shield, Play } from "lucide-react";
import NeuralNetwork from "@/components/landing/NeuralNetwork";

const trustBadges = [
  { icon: Rocket, label: "Live Projects" },
  { icon: Users, label: "300K+ Community" },
  { icon: Briefcase, label: "Portfolio Ready" },
  { icon: Linkedin, label: "LinkedIn Branding" },
  { icon: Play, label: "Beginner Friendly" },
  { icon: Shield, label: "Secure Payment" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-1 absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#A855F7]/12 rounded-full blur-[140px]" />
        <div className="aurora-2 absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#24F2C7]/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#43E7FF]/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-[#24F2C7]/20 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#24F2C7] animate-pulse" />
              <span className="text-sm text-[#24F2C7] font-medium tracking-wide">Now Enrolling · Batch Starting Soon</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-heading font-medium leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(52px, 7vw, 96px)" }}
            >
              <span className="text-white">Build Real</span>
              <br />
              <span className="text-accent-gradient">AI Systems.</span>
              <br />
              <span className="text-white/50 font-heading" style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}>
                Not Just Learn AI.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              A beginner-friendly, live project-based AI program. Learn Python, ML, GenAI, RAG, AI automation, deployment, and LinkedIn branding — hands-on.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a href="#pricing">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-[#24F2C7] to-[#43E7FF] text-[#050816] font-bold text-base hover:opacity-90 glow-emerald rounded-2xl font-body">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#syllabus">
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/10 text-white hover:bg-white/5 font-semibold text-base rounded-2xl backdrop-blur-sm font-body">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Syllabus
                </Button>
              </a>
              <a
                href="https://wa.me/917010611695?text=Hi%20Reshma!%20I'm%20interested%20in%20the%20AI%20program."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="h-14 px-6 text-[#24F2C7] hover:bg-[#24F2C7]/10 font-semibold text-base font-body">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card transition-all duration-300"
                >
                  <badge.icon className="w-3.5 h-3.5 text-[#24F2C7]" />
                  <span className="text-xs text-white/70 font-medium font-body">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Neural Network visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex-shrink-0 w-full lg:w-[480px] h-auto lg:h-[480px] flex justify-center lg:justify-end"
          >
            <NeuralNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}