"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../bits/SectionWrapper";
import { Card } from "../bits/Card";
import { Button } from "../bits/Button";
import { IoMailOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setStatus("submitting");
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "a063b5b2-2642-44d8-8db2-899c5dddc81f",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 3000);
        } else {
          console.error("Form error:", result);
          setStatus("error");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setStatus("error");
      }
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
                {[IoLogoGithub, IoLogoLinkedin, IoLogoTwitter].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-400 hover:text-primary-600 hover:bg-primary-100 hover:shadow-sm transition-all"
                  >
                    <Icon size={20} />
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.name ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-600'}`}
                    placeholder=" "
                  />
                  <label htmlFor="name" className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.name ? 'text-red-500' : 'text-gray-700 peer-focus:text-primary-600'}`}>Name</label>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.email ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-600'}`}
                    placeholder=" "
                  />
                  <label htmlFor="email" className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.email ? 'text-red-500' : 'text-gray-700 peer-focus:text-primary-600'}`}>Email address</label>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="relative z-0 w-full group">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.message ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-600'}`}
                  placeholder=" "
                />
                <label htmlFor="message" className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.message ? 'text-red-500' : 'text-gray-700 peer-focus:text-primary-600'}`}>Message</label>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
