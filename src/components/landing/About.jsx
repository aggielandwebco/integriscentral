import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Compass, Layers3, LineChart, MonitorSmartphone } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Modern Websites",
    desc: "Responsive websites with crisp layouts, fast performance, and the credibility customers expect.",
  },
  {
    icon: Layers3,
    title: "Brand Systems",
    desc: "Visual identity, messaging, and reusable design patterns that make every touchpoint feel aligned.",
  },
  {
    icon: LineChart,
    title: "Conversion Focus",
    desc: "Clear pathways, strong calls to action, and intentional content structure built around business goals.",
  },
  {
    icon: Compass,
    title: "Digital Direction",
    desc: "A strategic plan for how your business should look, communicate, and grow across the web.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          tag="About"
          title="A creative partner for businesses ready to look as capable as they are."
          description="Integris Creative helps businesses modernize their digital presence through clean websites, strategic branding, and conversion-focused design. The work is polished, scalable, and built to support real growth, not just fill a template."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel group rounded-2xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur sm:grid-cols-3">
        {[
          ["Nationwide mindset", "Built for brands that want a serious online presence."],
          ["Ecosystem fit", "Part of the broader Integris approach to modern business infrastructure."],
          ["Launch to support", "Designed, shipped, refined, and supported beyond handoff."],
        ].map(([title, detail]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-background/45 p-5">
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
