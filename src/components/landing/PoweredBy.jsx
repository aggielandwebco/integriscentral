import { motion } from "framer-motion";

export default function PoweredBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-16 max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/20 sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-xl shadow-black/20">
          <img
            src="/assets/integris-systems-logo.svg"
            alt="Integris Systems"
            className="mx-auto h-32 w-full object-contain"
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/90">
            Powered by Integris Systems
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Integris Creative operates as part of the broader Integris Systems ecosystem, built to connect modern websites, business software, automation, and digital infrastructure.
          </p>
          <div className="mt-5 inline-flex rounded-full bg-[#061118] px-4 py-2 text-sm text-muted-foreground ring-1 ring-white/5">
            <span className="text-white">Houston, Texas</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
