"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export function ProgressBar({ progress, className }) {
  return (
    <div className={cn("w-full bg-primary-100/50 rounded-full h-2.5", className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-primary-400 to-primary-500 h-2.5 rounded-full shadow-sm"
      />
    </div>
  );
}
