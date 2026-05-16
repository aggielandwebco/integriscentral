<<<<<<< HEAD
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="mission" className="overflow-hidden">
      <div ref={ref} className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-[#161618]/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Our Mission
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-foreground leading-relaxed">
              "To build a unified business operating ecosystem that simplifies{" "}
              <span className="text-primary font-medium">growth</span>,{" "}
              <span className="text-primary font-medium">operations</span>,{" "}
              <span className="text-primary font-medium">customer management</span>, and{" "}
              <span className="text-primary font-medium">digital infrastructure</span> for modern businesses."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl border border-gold/10 bg-[#161618]/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full bg-gold" />
              <span className="text-xs font-medium uppercase tracking-widest text-gold">
                Our Vision
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-foreground leading-relaxed">
              "To become the centralized platform businesses rely on to{" "}
              <span className="text-gold font-medium">operate</span>,{" "}
              <span className="text-gold font-medium">scale</span>,{" "}
              <span className="text-gold font-medium">automate</span>, and{" "}
              <span className="text-gold font-medium">grow</span>."
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
=======
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="mission" className="overflow-hidden">
      <div ref={ref} className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-2xl border border-white/5 bg-[#161618]/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Our Mission
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-foreground leading-relaxed">
              "To build a unified business operating ecosystem that simplifies{" "}
              <span className="text-primary font-medium">growth</span>,{" "}
              <span className="text-primary font-medium">operations</span>,{" "}
              <span className="text-primary font-medium">customer management</span>, and{" "}
              <span className="text-primary font-medium">digital infrastructure</span> for modern businesses."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl border border-gold/10 bg-[#161618]/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full bg-gold" />
              <span className="text-xs font-medium uppercase tracking-widest text-gold">
                Our Vision
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-light text-foreground leading-relaxed">
              "To become the centralized platform businesses rely on to{" "}
              <span className="text-gold font-medium">operate</span>,{" "}
              <span className="text-gold font-medium">scale</span>,{" "}
              <span className="text-gold font-medium">automate</span>, and{" "}
              <span className="text-gold font-medium">grow</span>."
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda
