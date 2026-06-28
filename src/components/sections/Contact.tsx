"use client";

import { FormEvent, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <section
      id="contact"
      // Make the section background very slightly lighter in both light and dark mode for more contrast
      className="w-full relative py-24 overflow-hidden  " 
    >
      {/* Contact Section Content Starts Here */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          // The main card background is even lighter and more translucent for contrast
          className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/90
           dark:bg-[#29293c]/40 p-8 md:p-12 lg:p-14 overflow-hidden backdrop-blur-[2px]"
        >
          {/* Purple glow accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side: Contact Details */}
            <div className="flex flex-col">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-6"
              >
                Ready to initiate a sequence?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-600 dark:text-gray-200 leading-relaxed mb-10"
              >
                I&apos;m currently available for freelance projects and high-impact engineering roles. Let&apos;s discuss how we can build something exceptional.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col gap-6">
                <a
                  href="mailto:shahedjaman762@gmail.com"
                  className="group flex items-center gap-4 w-fit"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Email Me
                    </span>
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      shahedjaman762@gmail.com
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Location
                    </span>
                    <span className="text-base font-semibold text-foreground">
                      Dhaka, Bangladesh / Remote
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Right Side: Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    // Set lighter backgrounds for inputs
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-white/10 border 
                    border-black/10 dark:border-white/20 text-foreground placeholder:text-gray-500
                     focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    disabled={false}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/20 text-foreground placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    disabled={false}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Description of Your Vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/20 text-foreground placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  disabled={false}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-1 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                disabled={false}
              >
                Submit Protocol
              </button>
              {/* Success message shown below form */}
              {showSuccess && (
                <div className="w-full py-4 px-6 mt-2 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-center font-semibold animate-fade-in-out">
                  Message sent! Thank you for reaching out.
                </div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
      {/* Contact Section Content Ends Here */}
    </section>
  );
}
