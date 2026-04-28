"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export function SectionWrapper({ children, id, className }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 md:py-32 scroll-mt-20", className)}
    >
      {children}
    </motion.section>
  );
}
