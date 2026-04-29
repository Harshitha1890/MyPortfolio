"use client";

import { useScrollTop } from "../hooks/useScrollTop";
import { IoArrowUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const { isVisible, scrollToTop } = useScrollTop(400);

  return (
    <footer className="bg-transparent border-t border-primary-100 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 text-sm font-medium">
          © {new Date().getFullYear()} Nunemunthala Harshitha. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Harshitha1890" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/harshitha-nunemunthala" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">LinkedIn</a>
          <a href="https://twitter.com/Harshitha" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 transition-colors">Twitter</a>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-600 text-white shadow-xl shadow-primary-600/30 hover:bg-primary-700 transition lg:bottom-12 lg:right-12"
            aria-label="Scroll to top"
          >
            <IoArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
