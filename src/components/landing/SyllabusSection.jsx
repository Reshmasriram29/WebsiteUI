import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Brain, Sparkles, Database, Workflow, Rocket } from "lucide-react";

const weeks = [
  {
    num: 1,
    icon: Code2,
    title: "Python for Data Science & AI",
    color: "#0066FF",
    topics: ["Variables, data types, lists, tuples, dictionaries", "If-else, for loops, while loops", "Functions and lambda functions", "NumPy basics", "Pandas basics", "CSV loading and DataFrame operations"],
    practice: "Load a CSV file and perform basic DataFrame operations.",
  },
  {
    num: 2,
    icon: Brain,
    title: "Machine Learning Basics & ML Workflow",
    color: "#8B5CF6",
    topics: ["Problem definition & data sourcing", "Data cleaning & EDA", "Feature engineering", "Model selection, training & evaluation", "Deployment overview"],
    practice: "Build your first ML model using scikit-learn (Linear/Logistic Regression).",
  },
  {
    num: 3,
    icon: Sparkles,
    title: "GenAI Foundations & LLM Working Procedure",
    color: "#10B981",
    topics: ["Introduction to GenAI & LLMs: GPT, Llama, Claude, Gemini", "Tokenization, context window, embeddings", "Prompt engineering: role, zero-shot, few-shot", "Calling LLM APIs: OpenAI, Groq, Gemini"],
    practice: "Build a simple LLM-powered Q&A chatbot.",
  },
  {
    num: 4,
    icon: Database,
    title: "RAG: Retrieval Augmented Generation",
    color: "#0066FF",
    topics: ["What is RAG and why it's needed", "Reducing hallucination", "Chunking and embeddings", "Vector DBs: Chroma, Pinecone, FAISS", "RAG pipeline: ingest → chunk → embed → store → retrieve → generate"],
    practice: "Build a PDF/text-based RAG chatbot using ChromaDB and OpenAI.",
  },
  {
    num: 5,
    icon: Workflow,
    title: "AI Automation with n8n",
    color: "#8B5CF6",
    topics: ["Introduction to AI automation", "What is n8n: nodes, triggers, workflows", "Integrating LLMs with n8n", "AI email reply assistant", "Content generation automation"],
    practice: "Create one end-to-end automation using n8n + LLM.",
  },
  {
    num: 6,
    icon: Rocket,
    title: "Final Project, Deployment & GitHub Packaging",
    color: "#10B981",
    topics: ["Choose capstone: RAG chatbot / n8n automation / ML prediction", "Add UI with Streamlit or Gradio", "Organize project with proper GitHub structure", "Write README with overview, setup, and demo", "Deploy on Streamlit Cloud, Hugging Face, or Render"],
    practice: "One complete AI/ML/GenAI project ready for placement portfolio.",
  },
];

export default function SyllabusSection() {
  const [openWeek, setOpenWeek] = useState(0);

  return (
    <section id="syllabus" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8B5CF6] text-sm font-semibold uppercase tracking-wider">6-Week Program</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            The <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] bg-clip-text text-transparent">Build Path</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A structured journey from Python fundamentals to a deployed AI system.
          </p>
        </motion.div>

        <div className="space-y-3">
          {weeks.map((week, i) => {
            const isOpen = openWeek === i;
            return (
              <motion.div
                key={week.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* Circuit line */}
                {i < weeks.length - 1 && (
                  <div className="absolute left-[23px] top-[60px] bottom-[-12px] w-px bg-gradient-to-b from-white/10 to-transparent" />
                )}

                <button
                  onClick={() => setOpenWeek(isOpen ? -1 : i)}
                  className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left ${
                    isOpen
                      ? "bg-white/[0.05] border-white/10"
                      : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${week.color}15` }}
                  >
                    <week.icon className="w-5 h-5" style={{ color: week.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: week.color }}>
                      Week {week.num}
                    </span>
                    <h3 className="text-white font-semibold text-base sm:text-lg truncate">{week.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 py-5 ml-[28px] border-l border-white/5">
                        <div className="space-y-2 mb-5">
                          {week.topics.map((topic) => (
                            <div key={topic} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: week.color }} />
                              <span className="text-slate-300 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <span className="text-xs font-bold uppercase text-[#10B981] mt-0.5">Practice:</span>
                          <span className="text-sm text-slate-300">{week.practice}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}