"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

export function SectionWrapper({ children, id, className }) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 scroll-mt-20", className)}
    >
      {children}
    </section>
  );
}
