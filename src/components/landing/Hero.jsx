import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MonitorPlay } from "lucide-react";

const proofPoints = ["Custom websites", "Brand systems", "Demo-ready launches"];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0px", "70px"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[94svh] overflow-hidden bg-[#050608]"
    >
      <div className="absolute inset-0">
        <motion.img
          src="/assets/hero-laptop-demo.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-[112%] w-full object-cover opacity-45"
          style={{ y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(60,108,180,0.24),transparent_36%),linear-gradient(90deg,rgba(5,6,8,0.98)_0%,rgba(5,6,8,0.78)_42%,rgba(5,6,8,0.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <motion.img
          src="/assets/integris-creative-logo-dark.png"
          alt=""
          aria-hidden="true"
          animate={{ opacity: [0.11, 0.18, 0.11], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 top-24 hidden w-80 opacity-15 blur-[1px] lg:block"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-28 sm:pt-36 lg:min-h-[94svh] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl"
          >
            <img
              src="/assets/integris-creative-logo-dark.png"
              alt="Integris Creative"
              className="h-7 w-7 object-contain"
            />
            Creative studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Websites that look premium before the first click.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg"
          >
            Integris Creative builds polished websites, brand systems, and digital launch experiences for businesses that need to look established, sharp, and ready to grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/25 transition hover:bg-primary/90"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-primary/30 hover:bg-white/10"
            >
              <MonitorPlay className="h-4 w-4" />
              See Demo Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl"
              >
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: visualY }}
          className="relative hidden [perspective:1200px] lg:block"
        >
          <motion.div
            initial={{ opacity: 0, rotateX: 22, rotateY: -12, y: 42 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090B10] shadow-2xl shadow-black/50"
            >
              <img
                src="/assets/hero-laptop-demo.png"
                alt="Laptop opening with a demo website on screen"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-medium text-white/70 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                Demo site preview
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
