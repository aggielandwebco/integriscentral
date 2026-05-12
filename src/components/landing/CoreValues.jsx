import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading.jsx";
import { Lightbulb, TrendingUp, Minimize2, Shield, Lock, Palette, Server, Clock } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries with cutting-edge technology and creative problem-solving to deliver transformative solutions." },
  { icon: TrendingUp, title: "Scalability", desc: "Architecture designed to grow seamlessly with your business, from startup to enterprise." },
  { icon: Minimize2, title: "Simplicity", desc: "Complex systems made intuitive. We believe powerful software should be effortless to use." },
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade infrastructure ensuring your business runs without interruption, 24/7." },
  { icon: Lock, title: "Security", desc: "Bank-level data protection with row-level security, encryption, and strict access controls." },
  { icon: Palette, title: "User Experience", desc: "Every pixel intentional. Every interaction polished. Software that people genuinely enjoy using." },
  { icon: Server, title: "Modern Infrastructure", desc: "Cloud-native, edge-optimized, and built on the latest in distributed computing technology." },
  { icon: Clock, title: "Long-Term Thinking", desc: "Building for decades, not quarters. Every decision is made with sustainable growth in mind." },
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="values">
      <SectionHeading
        tag="Core Values"
        title="What We Stand For"
        description="The principles that guide every line of code, every design decision, and every business strategy."
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