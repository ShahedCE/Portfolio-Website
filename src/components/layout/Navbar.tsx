"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants : Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tighter">
        <span className="text-foreground">SHAHED</span>
        <span className="text-primary">. DEV</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <li>
          <Link href="#about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#education" className="hover:text-foreground transition-colors">
            Education
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Link
          href="/resume.pdf"
          className="hidden md:block px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
        >
          Resume
        </Link>
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-x-0 top-[72px] z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-xl rounded-b-2xl md:hidden"
    >
      <div className="flex flex-col py-8">
        {[
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#projects", label: "Projects" },
          { href: "#education", label: "Education" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <motion.div key={item.href} variants={itemVariants} className="w-full">
            <Link
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 text-2xl font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <motion.div variants={itemVariants} className="flex justify-center mt-4 pb-2">
          <Link
            href="/resume.pdf"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Resume
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
