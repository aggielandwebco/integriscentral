import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Palette,
  Sparkles,
} from "lucide-react";

const mockupStats = [
  { label: "Trust score", value: "94%" },
  { label: "Mobile ready", value: "A+" },
  { label: "Launch path", value: "5 steps" },
];

function FloatingMockups() {
  return (
    <div className="relative mx-auto mt-16 h-[430px] max-w-[620px] lg:mt-0">
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-1.5, 1, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute left-2 top-10 w-[76%] overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="ml-3 h-2 w-28 rounded-full bg-white/12" />
        </div>
        <div className="p-5">
          <div className="mb-5 h-28 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/25 via-white/[0.08] to-gold/10" />
          <div className="grid grid-cols-3 gap-3">
            {mockupStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.045] p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [3, -1, 3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="glass-panel absolute right-0 top-0 w-[46%] rounded-2xl p-4 shadow-gold"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold text-foreground">Brand System</span>
          </div>
          <span className="h-2 w-2 rounded-full bg-gold" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["#5B8CFF", "#C7A86B", "#F8FAFC", "#111827"].map((color) => (
            <div
              key={color}
              className="aspect-square rounded-lg border border-white/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded-full bg-white/15" />
          <div className="h-2 w-2/3 rounded-full bg-white/10" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0], rotate: [-4, -1, -4] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="glass-panel absolute bottom-8 left-10 w-[52%] rounded-2xl p-4"
      >
        <div className="mb-4 flex items-center gap-2">
          <LayoutTemplate className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Conversion Map</span>
        </div>
        <div className="space-y-3">
          {["Hero clarity", "Proof points", "CTA flow"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [2, 5, 2] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        className="glass-panel absolute bottom-0 right-10 w-[38%] rounded-2xl p-4"
      >
        <Sparkles className="mb-4 h-5 w-5 text-gold" />
        <p className="text-sm font-semibold leading-5 text-foreground">Polished digital presence, ready to scale.</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
      <motion.div
        style={{ y: backgroundY }}
        className="creative-aurora absolute inset-x-0 top-0 -z-20 h-[760px] opacity-90"
      />
      <div className="creative-grid absolute inset-0 -z-10 opacity-50" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Integris Creative
          </span>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Creative Digital Infrastructure for Modern Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Integris Creative builds websites, branding systems, and digital experiences that help businesses look professional, earn trust, and grow online.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.055] px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white/[0.09]"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["Web design", "Premium UI systems"],
              ["Branding", "Identity that feels sharp"],
              ["Presence", "Strategy beyond the site"],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <FloatingMockups />
      </div>
    </section>
  );
}
