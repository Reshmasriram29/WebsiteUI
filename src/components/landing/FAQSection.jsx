import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this course beginner friendly?",
    a: "Yes, it starts from Python basics and moves step-by-step into AI systems. No prior ML or AI experience needed.",
  },
  {
    q: "Will I build real projects?",
    a: "Absolutely. Every major module includes hands-on practice and you'll complete a final capstone project that's deployment-ready.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "Basic curiosity is enough. The program starts from fundamentals — variables, loops, functions — and builds up to complete AI systems.",
  },
  {
    q: "Will I get help with LinkedIn branding?",
    a: "Yes, the program includes guidance on LinkedIn positioning, posting project content, and building your credibility as an AI builder.",
  },
  {
    q: "Is there mentor support?",
    a: "Yes, learners get direct guidance from Reshma Sriraman and mentors from the 300K+ AI builder community.",
  },
  {
    q: "How do I enroll?",
    a: "Fill the popup form when you first visit, click the Enroll Now button to pay via Razorpay, or chat with Reshma directly on WhatsApp.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0066FF]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#0066FF] text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Common <span className="bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] px-5 data-[state=open]:bg-white/[0.04] data-[state=open]:border-white/10 transition-all"
              >
                <AccordionTrigger className="text-white font-semibold text-left hover:no-underline py-5 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}