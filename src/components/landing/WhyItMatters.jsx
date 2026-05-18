import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "First impressions matter",
    description: "Your website is often the first place potential clients judge your business — a premium digital presence creates trust immediately.",
  },
  {
    title: "Credibility drives leads",
    description: "Professional design, clear messaging, and intentional calls to action make it easier for visitors to take the next step.",
  },
  {
    title: "Mobile-first confidence",
    description: "Every experience is optimized for modern devices so your brand feels polished on phones, tablets, and desktops.",
  },
  {
    title: "Strategic clarity",
    description: "A website that feels smart and structured supports your sales narrative and helps your business scale with confidence.",
  },
];

export default function WhyItMatters() {
  return (
    <SectionWrapper
      id="why"
      backgroundImage="/assets/responsive-demo-devices.png"
      backgroundOpacity={0.07}
      backgroundPosition="right top"
    >
      <SectionHeading
        tag="Why It Matters"
        title="A superior website isn’t just attractive — it makes your business easier to trust and easier to hire."
        description="Integris Creative builds the digital experiences that help brands feel established, credible, and ready for growth."
        align="left"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-panel rounded-[2rem] border border-white/10 bg-[#111214]/80 p-8 shadow-2xl shadow-black/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-4">{reason.title}</p>
            <p className="text-base leading-7 text-muted-foreground">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
