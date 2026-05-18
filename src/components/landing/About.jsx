import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { MonitorSmartphone, Layers3, LineChart, Compass } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Modern Websites",
    desc: "Responsive, refined websites with clear messaging, strong structure, and premium polish.",
  },
  {
    icon: Layers3,
    title: "Brand Systems",
    desc: "Visual identity, tone, and creative systems that make every touchpoint feel confident.",
  },
  {
    icon: LineChart,
    title: "Conversion Focus",
    desc: "Intentional design that supports trust, clarity, and measurable growth for your business.",
  },
  {
    icon: Compass,
    title: "Strategic Direction",
    desc: "A digital roadmap that aligns your website, brand, and marketing for consistent long-term success.",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      backgroundImage="/assets/studio-workspace.png"
      backgroundOpacity={0.08}
      backgroundPosition="center"
    >
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          align="left"
          tag="About"
          title="A creative partner for businesses building a premium digital presence."
          description="Integris Creative helps businesses modernize their online presence with clean websites, strategic branding, and conversion-focused design. Every project is polished, scalable, and built to support long-term growth."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel group rounded-[2rem] p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
