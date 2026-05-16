<<<<<<< HEAD
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
=======
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda
