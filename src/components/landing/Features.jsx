<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import {
  BadgeCheck,
  Brush,
  FileText,
  Globe2,
  Layout,
  RefreshCcw,
  Search,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    desc: "Premium visual systems, page architecture, and responsive interfaces that feel current and credible.",
  },
  {
    icon: Brush,
    title: "Branding & Identity",
    desc: "Logos, color systems, typography, messaging direction, and brand assets for a cohesive presence.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    desc: "Focused pages built for campaigns, launches, lead capture, and clear conversion paths.",
  },
  {
    icon: Globe2,
    title: "Business Websites",
    desc: "Complete company sites with service pages, trust signals, contact flows, and polished content structure.",
  },
  {
    icon: BadgeCheck,
    title: "Digital Presence Strategy",
    desc: "A practical plan for how your website, brand, search visibility, and customer journey work together.",
  },
  {
    icon: RefreshCcw,
    title: "Website Refreshes",
    desc: "Modernized design, sharper messaging, and improved structure without losing what already works.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    desc: "Metadata, semantic structure, performance basics, page hierarchy, and search-ready content patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Site Support",
    desc: "Updates, refinements, content edits, launch help, and long-term care for a site that keeps improving.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="services" className="overflow-hidden">
      <div className="absolute inset-x-0 top-10 -z-10 h-80 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl" />
      <SectionHeading
        tag="Services"
        title="Everything needed to build a stronger digital presence."
        description="A focused suite of creative and technical services for businesses that need more than a basic website."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28, rotate: i % 2 ? 1.2 : -1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -8,
              rotate: i % 2 ? -0.5 : 0.5,
              transition: { duration: 0.2 },
            }}
            className="glass-panel group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] transition group-hover:border-primary/30 group-hover:bg-primary/12">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
=======
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
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda
