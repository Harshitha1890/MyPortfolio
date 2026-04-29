"use client";

import { useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useTheme } from "../app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose, IoMoon, IoSunny } from "react-icons/io5";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export function Navbar() {
  const activeId = useScrollSpy(["home", "about", "skills", "projects", "contact"], -100);
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-40 nav-glass border-b border-primary-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleScroll("home")}>
          <span className="text-2xl font-bold tracking-tighter text-gradient">
            Nunemunthala Harshitha.
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    activeId === link.id
                      ? "text-primary-500 font-semibold"
                      : "text-gray-800 hover:text-primary-600"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-800 hover:text-primary-600"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden border-t"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className={`block w-full text-left text-lg font-medium transition-colors ${
                      activeId === link.id
                        ? "text-primary-500"
                        : "text-gray-800 hover:text-primary-600"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
