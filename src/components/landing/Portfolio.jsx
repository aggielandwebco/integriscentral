import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const portfolioItems = [
  {
    title: "Tailoring by Renoj",
    description: "Luxury high-end tailoring business in Houston, TX looking to elevate their digital presence with a polished website and cohesive brand system.",
    tags: ["Web Design", "Brand System", "Conversion"],
    image: "/assets/responsive-demo-devices.png",
    imageAlt: "Laptop and phone showing a polished responsive demo website",
  },
  {
    title: "Briarcrest Cleaners",
    description: "A modern website and brand system for a family-owned dry cleaning business looking to grow their local presence and customer base.",
    tags: ["Identity", "UI/UX", "Growth"],
    image: "/assets/studio-workspace.png",
    imageAlt: "Premium design workspace with wireframes and digital brand assets",
  },
  {
    title: "Aggieland Web Co.",
    description: "A platform under Integris Systems that delivers premium web design and brand strategy to small businesses in College Station, TX.",
    tags: ["Landing Page", "Strategy", "Performance"],
    image: "/assets/hero-laptop-demo.png",
    imageAlt: "Laptop opening with a demo website preview",
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        tag="Portfolio"
        title="Premium work designed to feel polished, strategic, and high-end."
        description="Visual case-study concepts show the kind of refined website and brand presentation Integris Creative builds for modern businesses."
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
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                Featured
              </div>
            </div>
            <div className="p-8">
              <div className="mb-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span>Premium case study</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-primary">Demo</span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">{item.description}</p>
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
