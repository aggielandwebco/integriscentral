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
