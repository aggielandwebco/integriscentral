import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, Palette, LayoutGrid, Briefcase, Globe2, RefreshCcw, Search, LifeBuoy } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: MonitorSmartphone, title: "Website Design", description: "High-performance websites that communicate credibility, clarity, and conversion-first messaging." },
  { icon: Palette, title: "Branding & Identity", description: "Premium brand systems with visual language, tone, and design assets built for growth." },
  { icon: LayoutGrid, title: "Landing Pages", description: "Focused, modern landing experiences that convert visitors into leads and customers." },
  { icon: Briefcase, title: "Business Websites", description: "Corporate websites designed for scale, authority, and consistent digital presentation." },
  { icon: Globe2, title: "Digital Presence Strategy", description: "A strategic roadmap for your website, brand, and online experience across channels." },
  { icon: RefreshCcw, title: "Website Refreshes", description: "Revitalized sites with updated design, messaging, and performance improvements." },
  { icon: Search, title: "SEO Foundations", description: "Search-ready structure, technical clarity, and content that helps your brand get found." },
  { icon: LifeBuoy, title: "Ongoing Site Support", description: "Continued updates, optimization, and maintenance so your site stays polished and reliable." },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        tag="Services"
        title="Premium digital services built to strengthen how your business appears online."
        description="From brand systems to websites and ongoing support, Integris Creative delivers the polished digital infrastructure modern companies need."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-panel group rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-black/10 hover:-translate-y-2 hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
