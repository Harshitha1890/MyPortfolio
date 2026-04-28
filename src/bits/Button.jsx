"use client";

import { motion } from "framer-motion";
import { cn } from "./utils";

const variants = {
  primary: "btn-soft",
  secondary: "bg-white text-gray-800 border-2 border-primary-100 hover:border-primary-300 hover:bg-primary-50 shadow-sm",
  ghost: "bg-transparent text-gray-600 hover:text-primary-600 hover:bg-primary-50",
};

export function Button({ 
  children, 
  variant = "primary", 
  className, 
  onClick, 
  type = "button",
  ...props 
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
