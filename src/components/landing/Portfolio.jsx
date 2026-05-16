import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const portfolioItems = [
  {
    title: "ScaleGate: Product Launch Platform",
    description: "High-conversion interface for a premium B2B launch strategy with differentiated brand design.",
    tags: ["Web Design", "Brand System", "Conversion"],
  },
  {
    title: "Altitude Commerce Rebrand",
    description: "Modern digital identity and website refresh for a nationwide services business.",
    tags: ["Identity", "UI/UX", "Growth"],
  },
  {
    title: "Helix Studio Website", 
    description: "A polished site experience built to position the brand as innovative, professional, and scalable.",
    tags: ["Landing Page", "Strategy", "Performance"],
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        tag="Portfolio"
        title="Premium work designed to feel polished, strategic, and high-end."
        description="Placeholder showcase cards demonstrate the premium case study style for Integris Creative’s future work." 
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 bg-[#111214]/80 shadow-2xl shadow-black/10 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="p-8">
              <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span>Premium case study</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-primary">Featured</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
