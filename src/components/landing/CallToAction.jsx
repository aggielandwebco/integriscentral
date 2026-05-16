import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#101114] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-[#111214]/90 p-10 shadow-2xl shadow-black/20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-4">Ready for a stronger presence?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Partner with a creative digital team that makes your business feel premium and unstoppable.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
                Start a project with Integris Creative and get a website, brand system, and digital strategy designed for enterprise-ready growth.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:items-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/25 transition hover:bg-primary/90"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/20 hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
