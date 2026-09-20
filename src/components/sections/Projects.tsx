"use client";

import { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Quikey",
    category: "SaaS E-Commerce Platform",
    description: "A Shopify-like SaaS e-commerce solution designed to empower businesses to build, manage, and scale their online stores effortlessly. Features a highly scalable architecture using Next.js and NestJS.",
    keyFeatures: [
      "Customizable storefront builder",
      "Multi-tenant SaaS architecture",
      "Comprehensive product & inventory management",
      "Integrated secure payment gateways",
      "Real-time analytics and reporting dashboard",
      "Automated order fulfillment workflows",
      "Role-based vendor & admin management",
      "SEO-optimized and highly responsive UI"
    ],
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop",
    liveLink: "https://quikey.store",
  },
  {
    title: "Neexzen",
    category: "Software Company Website",
    description: "The official corporate website for Neexzen, a modern software development agency. Built to highlight digital solutions, services, and client portfolios with a highly interactive and engaging user experience.",
    keyFeatures: [
      "Modern and interactive UI design",
      "Dynamic service & portfolio showcase",
      "High-performance static generation",
      "Smooth scroll & framer-motion animations",
      "Responsive layout across all devices",
      "SEO-friendly architecture"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    liveLink: "https://neexzen.app/",
  },
  {
    title: "Real-time Request Service Management System",
    category: "Management System",
    description: "An advanced real-time tracking platform that streamlines service request management. Features dedicated dashboards for administrators and users with role-based access control.",
    keyFeatures: [
      "Real-time request tracking",
      "Role-based authentication",
      "Admin & user dashboards",
      "Status update workflows",
      "PostgreSQL database integration"
    ],
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    liveLink: "https://drive.google.com/file/d/1617OMPWOiJMveOdxhYsGNndDscarrRyM/view?usp=sharing",
  },
  {
    title: "NeuroFlight Lab Website",
    category: "Research Lab Website",
    description:
      "Designed and developed a modern, responsive website for NeuroFlight Lab to showcase research activities, publications, team members, and ongoing projects. The platform emphasizes performance, accessibility, and a clean user experience.",
    keyFeatures: [
      "Responsive modern UI",
      "Research & publication showcase",
      "Team member profiles",
      "News & event management",
      "Job circular management",
      "Admin content management",
      "Contact inquiry system",
      "SEO-optimized architecture",
      "Role-based authentication",
      "REST API integration",
    ],
    techStack: ["Next.js", "NestJS", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    codeLink: "https://github.com/ShahedCE/NeuroFlight_Lab_Backend",
    liveLink: "https://github.com/ShahedCE/NeuroFlight_Lab_Frontend",
  },
  {
    title: "CMAB Official Website",
    category: "Organization Website",
    description:
      "Developed the official website for CMAB with a professional and responsive interface. The platform presents organizational information, announcements, services, and contact details while ensuring a seamless user experience across all devices.",
    keyFeatures: [
      "Responsive public website",
      "Secure admin dashboard",
      "Authentication & authorization",
      "Content management (CRUD)",
      "Executive member management",
      "News & publication management",
      "File and image uploads",
      "Join CMAB & contact forms",
      "REST API integration",
      "SEO-friendly & optimized",
    ],
    techStack: ["Next.js", "NestJS", "React", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    liveLink: "https://cmabdhaka.com/",
    codeLink: "https://github.com/ShahedCE/CMAB_Backend",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const shiftAmount = (scrollRef.current.firstElementChild?.clientWidth || 0) + 24;

        // If we reached the end (with a buffer), scroll back to the start
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Calculate exact next target based on current scroll
          const nextTarget = Math.round(scrollLeft / shiftAmount) * shiftAmount + shiftAmount;
          scrollRef.current.scrollTo({ left: nextTarget, behavior: "smooth" });
        }
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const shiftAmount = (scrollRef.current.firstElementChild?.clientWidth || 0) + 24;
      const currentScroll = scrollRef.current.scrollLeft;
      const prevTarget = Math.round(currentScroll / shiftAmount) * shiftAmount - shiftAmount;
      scrollRef.current.scrollTo({ left: Math.max(0, prevTarget), behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const shiftAmount = (scrollRef.current.firstElementChild?.clientWidth || 0) + 24;
      const currentScroll = scrollRef.current.scrollLeft;
      const nextTarget = Math.round(currentScroll / shiftAmount) * shiftAmount + shiftAmount;
      scrollRef.current.scrollTo({ left: nextTarget, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="w-full relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="flex flex-col items-start">
            <motion.span
              variants={itemVariants}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3"
            >
              SELECTED WORKS
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
            >
              Projects
            </motion.h2>
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {/* Arrows moved to carousel section */}
          </motion.div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative -mx-6 md:-mx-12 px-6 md:px-12 group/carousel"
        >
          {/* Navigation Arrows positioned on left/right */}
          <button
            onClick={handleScrollLeft}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-background transition-all text-foreground shadow-lg opacity-0 group-hover/carousel:opacity-100"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleScrollRight}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-background transition-all text-foreground shadow-lg opacity-0 group-hover/carousel:opacity-100"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group shrink-0 w-[85vw] md:w-[calc(50%-12px)] h-[740px] md:h-[600px] rounded-3xl overflow-hidden snap-start border border-black/10 dark:border-white/10"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="mb-6">
                    <ul className="list-none space-y-1.5">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons & Tech */}
                  <div className="flex items-end justify-between w-full pt-2">
                    <div className="flex flex-wrap gap-2 max-w-[60%]">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                        title="View Source Code"
                      >
                        <Code2 className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary backdrop-blur-md flex items-center justify-center hover:bg-primary/90 transition-colors text-white"
                        title="View Live Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hide Scrollbar CSS via inline style tag for convenience */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
