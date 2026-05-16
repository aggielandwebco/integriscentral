import { motion } from 'framer-motion';

export default function PoweredBy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-16 max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
    >
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 rounded-3xl bg-[#0E1114]/80 border border-white/10 px-4 py-3 shadow-sm shadow-primary/10">
          <img
            src="/assets/integris-systems-logo.png"
            alt="Integris Systems"
            className="h-10 w-10 object-contain"
          />
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/90">
              Powered by Integris Systems
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground max-w-xl">
              Integris Creative operates as part of the broader Integris Systems ecosystem — built to connect modern websites, business software, automation, and digital infrastructure.
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-[#061118] px-4 py-3 text-sm text-muted-foreground ring-1 ring-white/5">
          <span className="text-white">Houston, Texas</span>
        </div>
      </div>
    </motion.section>
  );
}
