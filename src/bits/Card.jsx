"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export function Card({ children, className, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -20, scale: 1.05, boxShadow: "0 30px 60px -15px rgba(124, 58, 237, 0.4)" } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "panel-soft p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
