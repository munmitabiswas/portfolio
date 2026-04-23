"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, BrainCircuit, FileText, CheckCircle2 } from "lucide-react";

const skills = [
  {
    name: "Advanced Excel",
    icon: FileSpreadsheet,
    level: "Expert",
    details: ["Data Analysis", "VLOOKUP & Pivot Tables", "Financial Modeling"],
  },
  {
    name: "Basic AI Knowledge",
    icon: BrainCircuit,
    level: "Intermediate",
    details: ["Prompt Engineering", "AI for HR Analytics", "Workflow Automation"],
  },
  {
    name: "MS Word & Documentation",
    icon: FileText,
    level: "Expert",
    details: ["Report Writing", "Business Correspondence", "HR Policy Drafting"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              Core <span className="text-primary">Competencies</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-lg"
            >
              Combining traditional business tools with modern AI capabilities to drive 
              efficiency in Human Resource Management.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 glass rounded-2xl border-primary/20"
          >
            <span className="text-primary font-bold">3+ Core Domains</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent hover:from-primary/20 transition-all duration-500"
            >
              <div className="bg-navy p-8 rounded-[1.9rem] h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                    <span className="text-xs text-secondary uppercase tracking-widest">{skill.level}</span>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {skill.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary group-hover:text-foreground transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
