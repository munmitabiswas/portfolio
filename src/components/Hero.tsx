"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium tracking-wider uppercase mb-6">
              Available for HRM Roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Elevating <span className="text-gradient">Human Capital</span> through Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto"
          >
            I am Munmita Biswas, an MBA student specializing in Human Resource Management. 
            Dedicated to building better workplace cultures and organizational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="group relative px-8 py-4 bg-primary text-navy font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Explore Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 glass text-foreground font-bold rounded-xl transition-all hover:bg-white/5">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
