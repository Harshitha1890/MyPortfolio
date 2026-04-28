"use client";

import { motion } from "framer-motion";
import { Button } from "../bits/Button";
import { IoArrowForward, IoMail } from "react-icons/io5";

export function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-fuchsia-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-[0_10px_25px_rgba(124,58,237,0.15)] overflow-hidden"
        >
          <img 
            src="/profile.jpg" 
            alt="Nunemunthala Harshitha" 
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop";
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-lg font-medium tracking-widest uppercase text-primary-600 mb-4">
            Curated Digital Experiences
          </h2>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Hi, I&apos;m <span className="font-semibold text-gradient">Nunemunthala Harshitha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-normal h-[40px] md:h-[48px]">
            Crafting elegant, modern web solutions.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-700 font-light leading-relaxed"
        >
          I am a specialized software developer focused on designing serene, highly functional, and user-centric web applications built with precision and the latest aesthetic standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button onClick={() => handleScroll("projects")} className="w-full sm:w-auto">
            View Projects <IoArrowForward />
          </Button>
          <Button variant="secondary" onClick={() => handleScroll("contact")} className="w-full sm:w-auto">
            Contact Me <IoMail />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
