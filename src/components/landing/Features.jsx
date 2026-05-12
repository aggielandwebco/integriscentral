import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  Users, CalendarDays, Cpu, UserCheck, BarChart3, ShieldCheck,
  Smartphone, Workflow, Star, LayoutDashboard, Lock, Cloud
} from "lucide-react";

const features = [
  { icon: Users, title: "CRM Management", desc: "Full customer lifecycle management with pipelines, contacts, and deal tracking." },
  { icon: CalendarDays, title: "Scheduling", desc: "Intelligent scheduling with conflict detection, availability management, and calendar sync." },
  { icon: Cpu, title: "AI Tools", desc: "AI-powered insights, messaging automation, predictive analytics, and smart recommendations." },
  { icon: UserCheck, title: "Employee Management", desc: "Team oversight, role assignments, performance tracking, and workforce coordination." },
  { icon: BarChart3, title: "Analytics Dashboards", desc: "Real-time visual analytics across all platforms with custom reporting capabilities." },
  { icon: ShieldCheck, title: "Role-Based Permissions", desc: "Granular access control ensuring the right people see the right data at the right time." },
  { icon: Smartphone, title: "Mobile Optimization", desc: "Full-featured mobile experience for managing your business from anywhere." },
  { icon: Workflow, title: "Automation Systems", desc: "Build complex automation workflows without code to eliminate repetitive tasks." },
  { icon: Star, title: "Reputation Management", desc: "Monitor and manage reviews, ratings, and online presence across all platforms." },
  { icon: LayoutDashboard, title: "Unified Dashboard", desc: "One dashboard to rule them all. See every metric, every team, every platform at a glance." },
  { icon: Lock, title: "Secure Infrastructure", desc: "Enterprise-grade security with encryption, audit trails, and compliance frameworks." },
  { icon: Cloud, title: "Cloud-Based Architecture", desc: "Scalable cloud infrastructure with 99.9% uptime, global edge delivery, and auto-scaling." },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="features">
      <SectionHeading
        tag="Features"
        title="Everything You Need to Operate"
        description="A comprehensive feature set designed for businesses that demand more from their software."
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group p-5 rounded-2xl border border-white/5 bg-[#161618]/30 hover:bg-[#161618]/60 hover:border-white/10 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
