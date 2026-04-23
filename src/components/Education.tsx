"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "MBA in Human Resource Management",
    institution: "Pursuing",
    description: "Specializing in organizational behavior, talent acquisition, and strategic HRM.",
    icon: GraduationCap,
    color: "text-primary",
  },
  {
    title: "Graduation",
    institution: "Sonapur College",
    description: "Completed undergraduate studies with a focus on business fundamentals.",
    icon: BookOpen,
    color: "text-accent",
  },
  {
    title: "Higher Education",
    institution: "Kendriya Vidyalaya",
    description: "Strong academic foundation from one of India's premier educational chains.",
    icon: School,
    color: "text-secondary",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Educational Journey
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl hover:border-primary/30 transition-colors group"
            >
              <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-primary font-medium mb-4">{item.institution}</p>
              <p className="text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
