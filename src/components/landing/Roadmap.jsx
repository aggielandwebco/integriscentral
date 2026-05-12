import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Rocket, Users, Cpu, Settings, Layers, Smartphone, BarChart3, Puzzle } from "lucide-react";

const phases = [
  { icon: Rocket, title: "MVP Launch", desc: "Core ecosystem foundation with essential CRM and management tools.", status: "active" },
  { icon: Users, title: "CRM Expansion", desc: "Advanced customer pipelines, AI messaging, and review management.", status: "upcoming" },
  { icon: Cpu, title: "AI Automation", desc: "Machine learning-powered workflows, predictive analytics, and smart scheduling.", status: "upcoming" },
  { icon: Settings, title: "Operations Platform", desc: "Full Integris Ops launch with dispatching, logistics, and workforce tools.", status: "planned" },
  { icon: Layers, title: "Unified Integris App", desc: "Single application combining all platforms into one seamless experience.", status: "planned" },
  { icon: Smartphone, title: "Mobile Application", desc: "Native mobile apps for iOS and Android with full platform capabilities.", status: "planned" },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Enterprise reporting, custom dashboards, and business intelligence suite.", status: "planned" },
  { icon: Puzzle, title: "Ecosystem Integrations", desc: "Third-party integrations, API marketplace, and developer tools.", status: "planned" },
];

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="roadmap">
      <SectionHeading
        tag="Roadmap"
        title="The Road Ahead"
        description="A transparent look at where we're going and the milestones that will get us there."
      />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Golden thread */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            initial={{ height: "0%" }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full bg-gradient-to-b from-gold via-gold/30 to-transparent"
          />
        </div>

        <div className="space-y-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="relative flex gap-5 sm:gap-8 items-start"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border transition-all ${
                    phase.status === "active"
                      ? "bg-gold/10 border-gold/30"
                      : phase.status === "upcoming"
                      ? "bg-primary/5 border-primary/20"
                      : "bg-[#161618] border-white/5"
                  }`}
                >
                  <phase.icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      phase.status === "active"
                        ? "text-gold"
                        : phase.status === "upcoming"
                        ? "text-primary/60"
                        : "text-muted-foreground/40"
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      phase.status === "active" ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  {phase.status === "active" && (
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-gold/10 text-gold rounded-full border border-gold/20">
                      In Progress
                    </span>
                  )}
                  {phase.status === "upcoming" && (
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      Next
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    phase.status === "active" ? "text-muted-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
