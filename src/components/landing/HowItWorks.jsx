import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Link2, Users, Workflow, BarChart3, Rocket } from "lucide-react";

const steps = [
  { icon: Link2, title: "Connect Your Business", desc: "Onboard your company into the Integris ecosystem in minutes. Import data, configure settings, and get started." },
  { icon: Users, title: "Manage Customers", desc: "Centralize your customer data, automate communications, and build lasting relationships with Nexus CRM." },
  { icon: Workflow, title: "Automate Operations", desc: "Set up intelligent workflows that handle scheduling, dispatching, assignments, and daily logistics automatically." },
  { icon: BarChart3, title: "Analyze Performance", desc: "Real-time dashboards and analytics give you complete visibility into every aspect of your business." },
  { icon: Rocket, title: "Scale with AI-Powered Tools", desc: "Leverage artificial intelligence to optimize decisions, predict trends, and accelerate your growth trajectory." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="how-it-works">
      <SectionHeading
        tag="How It Works"
        title="From Onboarding to Scaling"
        description="A streamlined journey from your first connection to exponential growth."
      />

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Vertical golden thread */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            initial={{ height: "0%" }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full bg-gradient-to-b from-primary via-gold/40 to-transparent"
          />
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="relative flex gap-6 items-start pl-2"
            >
              {/* Node */}
              <div className="relative z-10 flex-shrink-0 w-8 sm:w-12 h-8 sm:h-12 rounded-xl bg-[#161618] border border-white/10 flex items-center justify-center group hover:border-primary/30 transition-colors">
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-primary/60">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}