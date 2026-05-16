import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Zap, Settings, Palette, MapPin, ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "Integris Nexus",
    icon: Zap,
    desc: "CRM, customer growth, bookings, analytics, AI messaging, reviews, customer pipelines, and business management tools.",
    features: ["Customer Pipelines", "AI Messaging", "Booking System", "Review Management"],
    borderColor: "border-primary/25",
    glowColor: "#3B82F6",
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    tagBg: "bg-primary/10 text-primary border-primary/10",
    initialRotate: -4,
    initialX: -60,
  },
  {
    name: "Integris Ops",
    icon: Settings,
    desc: "Scheduling, workforce coordination, operations management, assignments, logistics, dispatching, and employee tracking.",
    features: ["Scheduling", "Dispatching", "Workforce Tracking", "Logistics"],
    borderColor: "border-white/10",
    glowColor: "#94A3B8",
    iconBg: "bg-white/5",
    iconText: "text-foreground/80",
    tagBg: "bg-white/5 text-foreground/70 border-white/10",
    initialRotate: 3,
    initialX: 60,
  },
  {
    name: "Integris Creative",
    icon: Palette,
    desc: "Branding, web development, digital presence, modern business websites, and creative strategy for forward-thinking brands.",
    features: ["Web Design", "Brand Strategy", "Digital Presence", "Creative Direction"],
    borderColor: "border-gold/20",
    glowColor: "#C5A059",
    iconBg: "bg-gold/10",
    iconText: "text-gold",
    tagBg: "bg-gold/10 text-gold border-gold/10",
    initialRotate: -3,
    initialX: -60,
  },
  {
    name: "Aggieland Web Co",
    icon: MapPin,
    desc: "Texas-focused regional creative and web brand with emphasis on local business growth, community presence, and regional digital identity.",
    features: ["Local SEO", "Regional Branding", "Community Focus", "Texas Heritage"],
    borderColor: "border-[#8B2500]/20",
    glowColor: "#8B2500",
    iconBg: "bg-[#8B2500]/10",
    iconText: "text-[#A33300]",
    tagBg: "bg-[#8B2500]/10 text-[#A33300] border-[#8B2500]/10",
    initialRotate: 4,
    initialX: 60,
  },
];

function PlatformCard({ platform, index, isInView }) {
  const delays = [0.1, 0.22, 0.34, 0.46];
  const delay = delays[index];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotate: platform.initialRotate,
        x: platform.initialX,
        scale: 0.88,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: 0, x: 0, scale: 1 }
          : {}
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative group"
      style={{ zIndex: isInView ? 10 + index : 0 }}
    >
      {/* Soft glow beneath the card */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: platform.glowColor, opacity: 0.18 }}
      />

      {/* Hover ambient glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"
        style={{ backgroundColor: platform.glowColor, opacity: 0 }}
      />

      {/* Card */}
      <div
        className={`relative rounded-2xl border ${platform.borderColor} bg-gradient-to-b from-[#18181c]/90 to-[#111114]/95 backdrop-blur-xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-opacity-60`}
        style={{
          boxShadow: `0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)`,
        }}
      >
        {/* Corner glow on hover */}
        <div
          className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: platform.glowColor }}
        />
        {/* Bottom left accent */}
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: platform.glowColor }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] rounded-2xl pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative">
          {/* Icon + Name */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-11 h-11 rounded-xl ${platform.iconBg} flex items-center justify-center border border-white/5 flex-shrink-0`}
              style={{ boxShadow: `0 0 20px ${platform.glowColor}20` }}
            >
              <platform.icon className={`w-5 h-5 ${platform.iconText}`} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                {platform.name}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {platform.desc}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {platform.features.map((feat) => (
              <span
                key={feat}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border ${platform.tagBg}`}
              >
                {feat}
              </span>
            ))}
          </div>

          {/* CTA link */}
          <div className="flex items-center gap-1.5 group/link cursor-pointer">
            <span
              className="text-xs font-medium transition-colors"
              style={{ color: platform.glowColor }}
            >
              Learn more
            </span>
            <ArrowRight
              className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform"
              style={{ color: platform.glowColor }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="ecosystem" ref={sectionRef} className="relative py-16 sm:py-24 overflow-hidden">
      {/* Deep background parallax glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-primary/5 blur-[160px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/4 blur-[100px]" />
      </motion.div>

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Four Platforms.{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-gold bg-clip-text text-transparent">
              One Ecosystem.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Each platform is powerful on its own. Together, they form a complete operating system for modern businesses.
          </p>
        </motion.div>

        {/* Central hub */}
        <div ref={ref} className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.05, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 rounded-full border border-primary/15"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.03, 0.1] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -inset-16 rounded-full border border-primary/8"
            />
            {/* Ambient glow behind hub */}
            <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 blur-2xl" />
            {/* Hub */}
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e2a3a] to-[#111114] border border-primary/20 flex items-center justify-center backdrop-blur-sm"
              style={{ boxShadow: "0 0 40px rgba(59,130,246,0.2), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <span className="text-2xl font-bold bg-gradient-to-br from-primary to-gold bg-clip-text text-transparent">I</span>
            </div>
            {/* Connector dots */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
                style={{
                  top: i === 0 ? "50%" : i === 2 ? "50%" : i === 1 ? "-16px" : "calc(100% + 8px)",
                  left: i === 0 ? "-16px" : i === 2 ? "calc(100% + 8px)" : "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Floating platform cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative" style={{ perspective: "1200px" }}>
          {platforms.map((platform, i) => (
            <PlatformCard key={platform.name} platform={platform} index={i} isInView={isInView} />
          ))}

          {/* Central floating divider line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
          />
        </div>

        {/* Bottom connector hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">All platforms share a unified data layer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}