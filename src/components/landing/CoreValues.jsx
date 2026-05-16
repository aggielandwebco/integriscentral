import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Lightbulb, Sparkles, ShieldCheck, Palette, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    desc: "Design systems and messaging that feel effortless, clear, and immediately understandable.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Professional digital experiences that help brands make a confident first impression.",
  },
  {
    icon: Palette,
    title: "Creativity",
    desc: "A polished visual language that feels premium without sacrificing usability.",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "Every design decision supports your business goals and audience behavior.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Growth",
    desc: "Sustainable digital systems that evolve with your business over time.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    desc: "Attention to detail in every interaction, copy, and interface element.",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="values">
      <SectionHeading
        align="left"
        tag="Core Values"
        title="The principles that define how Integris Creative builds premium digital experiences."
        description="These values guide every project, from brand strategy to website delivery and long-term support."
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative p-6 rounded-2xl border border-white/5 bg-[#161618]/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-[40px]" />
            </div>

            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}