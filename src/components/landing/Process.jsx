import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const steps = [
  { title: "Discover", label: "Research, goals, and the right website approach." },
  { title: "Design", label: "Refined brand systems, visual direction, and polished layouts." },
  { title: "Build", label: "Fast, accessible websites built to perform across devices." },
  { title: "Launch", label: "A confident rollout supported by QA, optimization, and handoff." },
  { title: "Support", label: "Ongoing updates, monitoring, and evolution for long-term success." },
];

export default function Process() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        tag="Process"
        title="A clear timeline from discovery to launch and beyond."
        description="Each phase is designed to keep your launch moving forward with clarity, quality, and measurable impact."
        align="left"
      />

      <div className="relative mx-auto grid gap-6 lg:max-w-6xl lg:grid-cols-5">
        <div className="absolute inset-x-0 top-10 hidden h-px bg-white/10 lg:block" />
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative rounded-[2rem] border border-white/10 bg-[#111214]/80 p-8 text-center shadow-xl shadow-black/10"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-primary">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{step.label}</p>
            <div className="hidden lg:block absolute left-1/2 top-7 h-2 w-16 -translate-x-1/2 rounded-full bg-primary/20" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
