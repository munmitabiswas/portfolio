"use client";

import { motion } from "framer-motion";
import { Mail, Link2, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl font-bold mb-8"
            >
              Let&apos;s Build the <br />
              <span className="text-primary text-gradient">Future of Work</span>
            </motion.h2>
            <p className="text-secondary text-lg max-w-md mb-10">
              Open for HR internships, collaborations, and discussions on organizational development.
            </p>
            <div className="flex gap-6">
              {[Link2, Globe, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#EAB308" }}
                  className="p-4 glass rounded-2xl text-secondary transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-primary/10">
            <h3 className="text-2xl font-bold mb-8 font-serif">Quick Inquiry</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Your Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Munmita Biswas" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Your Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="hello@example.com" />
              </div>
              <button className="w-full py-4 bg-primary text-navy font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-secondary text-sm">
            © 2026 Munmita Biswas. Crafted with passion & AI.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-secondary hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest"
          >
            Back to Top 
            <div className="p-2 rounded-full border border-white/10 group-hover:border-primary transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
