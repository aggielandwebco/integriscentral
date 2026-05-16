import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  className = "",
  innerClassName = "",
  children,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}
    >
      <div className={`mx-auto w-full max-w-7xl ${innerClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
