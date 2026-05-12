import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading.jsx";
import { Layers, Cpu, BarChart3, Globe } from "lucide-react";

const stats = [
  { value: "4", label: "Integrated Platforms" },
  { value: "50+", label: "Core Features" },
  { value: "∞", label: "Scalability" },
  { value: "24/7", label: "Cloud Infrastructure" },
];

const capabilities = [
  { icon: Layers, title: "Modular Architecture", desc: "Build your tech stack from interconnected modules that grow with your business." },
  { icon: Cpu, title: "AI-Powered Automation", desc: "Intelligent workflows that learn, adapt, and optimize your operations autonomously." },
  { icon: BarChart3, title: "Unified Analytics", desc: "Real-time insights across every platform, all in one centralized dashboard." },
  { icon: Globe, title: "Digital Presence", desc: "Manage your websites, branding, and online reputation from a single control center." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about">
      <SectionHeading
        tag="About Integris"
        title="A Business Operating Ecosystem"
        description="Integris is not just software — it's a centralized, modular operating ecosystem designed to unify every facet of how modern businesses run, scale, and grow."
      />

      {/* Stats row */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-white/5 bg-[#161618]/40 backdrop-blur-sm"
          >
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Capability cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="group p-6 rounded-2xl border border-white/5 bg-[#161618]/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:bg-[#161618]/60"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-[#161618]/30 backdrop-blur-sm text-center">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          From managing customers, scheduling, and operations to analytics, employees, AI automation, 
          websites, reputation management, and communications — Integris brings everything into{" "}
          <span className="text-foreground font-medium">one unified platform</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}