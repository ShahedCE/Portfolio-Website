"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

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
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormState]?: boolean }>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === "name") {
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
    }
    if (field === "email") {
      if (!trimmed) return "Please enter your email address.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
    }
    if (field === "message") {
      if (!trimmed) return "Please enter your message.";
      if (trimmed.length < 10) return "Message should be at least 10 characters.";
    }
    return undefined;
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formData[field]),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 600);
  };

  return (
    <section id="contact" className="w-full relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#29293c]/40 p-8 md:p-12 lg:p-14 overflow-hidden backdrop-blur-[2px]"
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
                <a
                  href="tel:+8801792337307"
                  className="group flex items-center gap-4 w-fit"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-full border border-primary/30 bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Call / WhatsApp
                    </span>
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      +880 1792 337307
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
                      Kuril, Dhaka, Bangladesh / Remote
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={`w-full px-4 py-3.5 rounded-xl border text-foreground placeholder:text-gray-500 focus:outline-none transition-all ${errors.name && touched.name
                        ? "border-red-500/80 dark:border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500/30 bg-red-500/[0.03]"
                        : "border-black/10 dark:border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 bg-white/20 dark:bg-[#29293c]/20"
                      }`}
                  />
                  <AnimatePresence>
                    {errors.name && touched.name && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 font-medium mt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`w-full px-4 py-3.5 rounded-xl border text-foreground placeholder:text-gray-500 focus:outline-none transition-all ${errors.email && touched.email
                        ? "border-red-500/80 dark:border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500/30 bg-red-500/[0.03]"
                        : "border-black/10 dark:border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 bg-white/20 dark:bg-[#29293c]/20"
                      }`}
                  />
                  <AnimatePresence>
                    {errors.email && touched.email && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 font-medium mt-0.5"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Description of Your Vision..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`w-full px-4 py-3.5 rounded-xl border text-foreground placeholder:text-gray-500 focus:outline-none transition-all resize-none ${errors.message && touched.message
                      ? "border-red-500/80 dark:border-red-500/70 focus:border-red-500 focus:ring-1 focus:ring-red-500/30 bg-red-500/[0.03]"
                      : "border-black/10 dark:border-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 bg-white/20 dark:bg-[#29293c]/20"
                    }`}
                />
                <AnimatePresence>
                  {errors.message && touched.message && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1 font-medium mt-0.5"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-1 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {/* Success message shown below form */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    className="w-full py-3.5 px-5 mt-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Message sent! Thank you for reaching out.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
