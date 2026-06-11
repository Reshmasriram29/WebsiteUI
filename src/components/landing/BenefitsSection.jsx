import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Rocket, Users, Briefcase, GitBranch, 
  Sparkles, Workflow, Database, Linkedin, Award 
} from "lucide-react";

const benefits = [
  { icon: BookOpen, text: "Beginner-friendly roadmap" },
  { icon: Rocket, text: "Real-time live projects" },
  { icon: Users, text: "Live mentor support" },
  { icon: Briefcase, text: "Portfolio-ready projects" },
  { icon: GitBranch, text: "GitHub-ready work" },
  { icon: Sparkles, text: "Build confidence with AI tools" },
  { icon: Workflow, text: "Learn AI automation" },
  { icon: Database, text: "Master RAG & LLM workflows" },
  { icon: Linkedin, text: "Build LinkedIn credibility" },
  { icon: Award, text: "Career & placement support" },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Everything You <span className="bg-gradient-to-r from-[#10B981] to-[#0066FF] bg-clip-text text-transparent">Gain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-3">
                <b.icon className="w-5 h-5 text-[#0066FF]" />
              </div>
              <span className="text-sm text-slate-300 font-medium leading-snug">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}