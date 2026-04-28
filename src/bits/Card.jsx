"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export function Card({ children, className, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      className={cn(
        "panel-soft p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
