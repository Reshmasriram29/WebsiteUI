import React from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, FileText, Workflow, Rocket, Monitor, GitBranch, FolderOpen } from "lucide-react";

const projects = [
  { icon: Brain, title: "Your First ML Model", desc: "Build a prediction model with scikit-learn from scratch.", tag: "ML" },
  { icon: MessageSquare, title: "LLM Q&A Chatbot", desc: "Create an AI chatbot powered by GPT/Gemini APIs.", tag: "GenAI" },
  { icon: FileText, title: "PDF RAG Chatbot", desc: "Build a document chatbot with ChromaDB and embeddings.", tag: "RAG" },
  { icon: Workflow, title: "n8n AI Automation", desc: "Design end-to-end AI workflows for email and content.", tag: "Automation" },
  { icon: Rocket, title: "Capstone Project", desc: "Your complete AI system — ready for portfolio.", tag: "Capstone" },
  { icon: Monitor, title: "Streamlit UI", desc: "Add a clean web interface to your AI projects.", tag: "UI" },
  { icon: GitBranch, title: "GitHub Portfolio", desc: "Professional project structure with README and docs.", tag: "GitHub" },
  { icon: FolderOpen, title: "Deployment Ready", desc: "Deploy on Streamlit Cloud, Hugging Face, or Render.", tag: "Deploy" },
];

export default function CourseOverview() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-wider">Course Overview</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What You Will <span className="bg-gradient-to-r from-[#10B981] to-[#0066FF] bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            8 real projects across ML, GenAI, RAG, and AI automation — all deployment-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded-md">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-1.5">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}