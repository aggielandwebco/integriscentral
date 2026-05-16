import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="relative text-center">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Join the next generation of businesses operating on a unified ecosystem. 
            Request a demo and see the Integris platform in action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@integrissystems.com"
              className="group px-8 py-4 text-sm font-medium bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:hello@integrissystems.com"
              className="px-8 py-4 text-sm font-medium border border-white/10 text-foreground rounded-xl hover:bg-white/5 transition-all hover:border-white/20"
            >
              Contact Sales
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground/60">
            hello@integrissystems.com
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}