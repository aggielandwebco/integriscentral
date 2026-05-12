import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Shield, Lock, Database, Server, Fingerprint, Globe } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Secure Authentication", desc: "Multi-factor authentication with industry-standard protocols." },
  { icon: Shield, title: "Role-Based Access", desc: "Granular permission systems controlling data visibility and actions." },
  { icon: Database, title: "Row-Level Security", desc: "Database-level isolation ensuring data is only accessible to authorized users." },
  { icon: Server, title: "Protected Infrastructure", desc: "Hardened servers with regular security audits and penetration testing." },
  { icon: Fingerprint, title: "Scalable Backend", desc: "Built on Supabase architecture for enterprise-grade reliability and performance." },
  { icon: Globe, title: "Cloud Deployment", desc: "Secure cloud deployment practices with encrypted data in transit and at rest." },
];

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="security">
      <div ref={ref} className="relative">
        {/* Background accent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Security & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              The Fortress
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built with enterprise-focused architecture, Integris treats security not as a feature, but as a foundation.
            </p>
          </motion.div>
        </div>

        {/* Security badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-[#161618]/60 backdrop-blur-xl">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              Supabase · Row-Level Security · Encrypted · Cloud-Native
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0B]/80 backdrop-blur-sm hover:border-primary/10 transition-all duration-300"
            >
              <item.icon className="w-5 h-5 text-primary/60 mb-3" />
              <h3 className="text-sm font-semibold text-foreground font-mono mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}