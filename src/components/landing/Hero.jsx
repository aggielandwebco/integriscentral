import React from "react";
import { motion } from "framer-motion";

const FloatingCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`absolute rounded-xl border border-white/10 bg-[#161618]/60 backdrop-blur-xl shadow-2xl shadow-black/40 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[100px]"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Golden thread */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Building the Future of Business Software
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            The Modern Operating{" "}
            <br className="hidden sm:block" />
            System for{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-gold bg-clip-text text-transparent">
              Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Integris Systems is building a scalable software ecosystem combining CRM,
            operations, automation, analytics, AI tools, scheduling, and digital
            presence management into one unified platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#ecosystem"
              className="group px-7 py-3.5 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
            >
              Explore Ecosystem
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="px-7 py-3.5 text-sm font-medium border border-white/10 text-foreground rounded-xl hover:bg-white/5 transition-all hover:border-white/20"
            >
              View Platforms
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 text-sm font-medium text-gold border border-gold/20 rounded-xl hover:bg-gold/5 transition-all hover:border-gold/30"
            >
              Request Demo
            </a>
          </motion.div>
        </div>

        {/* Floating UI mockup cards */}
        <div className="relative mt-20 h-[280px] sm:h-[320px] hidden md:block">
          <FloatingCard className="top-0 left-[8%] w-56 p-4" delay={0.6}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-muted-foreground">Live Analytics</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-primary/20 rounded-full w-full" />
              <div className="h-2 bg-primary/30 rounded-full w-4/5" />
              <div className="h-2 bg-primary/15 rounded-full w-3/5" />
            </div>
            <div className="mt-3 text-2xl font-bold text-foreground">$142.8K</div>
            <div className="text-xs text-green-400">+23.4% this month</div>
          </FloatingCard>

          <FloatingCard className="top-6 right-[8%] w-52 p-4" delay={0.8}>
            <div className="text-xs text-muted-foreground mb-2">Active Users</div>
            <div className="flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-sm"
                />
              ))}
            </div>
            <div className="mt-2 text-lg font-semibold text-foreground">2,847</div>
          </FloatingCard>

          <FloatingCard className="bottom-0 left-[28%] w-64 p-4" delay={1}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground">Automation Pipeline</span>
              <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full">Running</span>
            </div>
            <div className="space-y-2.5">
              {["CRM Sync", "Email Campaign", "Report Gen"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-green-400" : i === 1 ? "bg-primary" : "bg-gold"}`} />
                  <span className="text-xs text-foreground/80">{item}</span>
                  <div className="flex-1" />
                  <span className="text-[10px] text-muted-foreground">{i === 0 ? "Done" : i === 1 ? "Active" : "Queued"}</span>
                </div>
              ))}
            </div>
          </FloatingCard>

          <FloatingCard className="bottom-4 right-[20%] w-48 p-4" delay={1.1}>
            <div className="text-xs text-muted-foreground mb-1">Ecosystem Health</div>
            <div className="relative w-20 h-20 mx-auto my-2">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#161618" strokeWidth="3" />
                <motion.circle
                  cx="18" cy="18" r="16" fill="none" stroke="#3B82F6" strokeWidth="3"
                  strokeDasharray="100.5" strokeDashoffset="100.5"
                  animate={{ strokeDashoffset: 8 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">98%</span>
            </div>
            <div className="text-center text-[10px] text-green-400">All Systems Operational</div>
          </FloatingCard>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}