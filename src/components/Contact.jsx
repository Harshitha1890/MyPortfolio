"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../bits/SectionWrapper";
import { Card } from "../bits/Card";
import { Button } from "../bits/Button";
import { IoMailOutline, IoLocationOutline, IoCallOutline, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export function Contact() {
  const [status, setStatus] = useState("idle"); // "idle", "submitting", "success", "error"

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.target);
    formData.append("access_key", "e0554879-8993-43eb-8e9f-fded127724f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Form error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Let's <span className="font-semibold text-gradient">Connect</span></h2>
          <div className="w-20 h-1 bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Looking forward to hearing from you.</h3>
              <p className="text-gray-800 font-light leading-relaxed">
                I'm currently available for freelance projects and new career opportunities. Whether you have an inquiry, need an expert touch on a project, or simply want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <IoMailOutline size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-700 font-medium">Email Me</h4>
                  <p className="font-medium">harshithanunemunthala@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <IoCallOutline size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-700 font-medium">Call Me</h4>
                  <p className="font-medium">+91 8977423325</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <IoLocationOutline size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-700 font-medium">Location</h4>
                  <p className="font-medium">Hyderabad - Financial District</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-primary-100">
              <h4 className="font-bold mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                {[
                  { Icon: IoLogoGithub, link: "https://github.com/Harshitha1890" },
                  { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/harshitha-nunemunthala" },
                  { Icon: IoLogoTwitter, link: "https://twitter.com/Harshitha" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-400 hover:text-primary-600 hover:bg-primary-100 hover:shadow-sm transition-all"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-8 border border-primary-100" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6">
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-primary-600"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-700 peer-focus:text-primary-600">Name</label>
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-primary-600"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-700 peer-focus:text-primary-600">Email address</label>
                </div>
              </div>
              <div className="relative z-0 w-full group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-primary-600"
                  placeholder=" "
                />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-700 peer-focus:text-primary-600">Message</label>
              </div>

              <Button type="submit" disabled={status === "submitting"} className="min-w-[150px]">
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...
                  </span>
                ) : "Send Message"}
              </Button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 font-medium"
                >
                  Message sent successfully! I will get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 font-medium"
                >
                  Oops! Something went wrong. Make sure you've added your Web3Forms Access Key.
                </motion.p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
