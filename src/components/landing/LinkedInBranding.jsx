import React from "react";
import { motion } from "framer-motion";
import { Linkedin, TrendingUp, FileText, Eye, Award, Share2 } from "lucide-react";

const items = [
  { icon: TrendingUp, text: "Improve LinkedIn profile positioning" },
  { icon: FileText, text: "Post project-based content" },
  { icon: Award, text: "Build credibility as an AI builder" },
  { icon: Share2, text: "Showcase GitHub projects" },
  { icon: Eye, text: "Create a portfolio story" },
  { icon: Linkedin, text: "Communicate technical work clearly" },
];

export default function LinkedInBranding() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 border border-white/[0.08] p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/15 flex items-center justify-center mx-auto mb-5">
              <Linkedin className="w-7 h-7 text-[#0066FF]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Build Your AI Skills <span className="text-[#0066FF]">+</span> Your AI Personal Brand
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              This program also helps you establish yourself as a credible AI builder on LinkedIn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <item.icon className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}