"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Terminal } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  gpa: string;
  bullets?: string[];
  tags?: string[];
}

const educations: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    date: "2022 – 2026",
    gpa: "CGPA: 3.89 / 4.00 (Expected Graduation July 2026)",
    bullets: [
      "Specialized in Software Engineering, Web Development, Database Systems, and Object-Oriented Programming.",
      "Completed academic and full-stack software development projects using modern technologies.",
      "Gained practical experience in designing scalable web applications, RESTful APIs, and database management.",
    ],
    tags: ["Software Engineering", "Web Development", "Database Systems", "OOP"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Meherpur Government College",
    date: "2018 – 2020",
    gpa: "GPA: 5.00 / 5.00",
    bullets: ["Science Group"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section id="education" className="w-full relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6 w-fit"
            >
              <span className="text-xs font-medium gradient-text uppercase tracking-wider">
                Academic Path
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground"
            >
              Education
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Formal foundations and continuous learning in software engineering and web technologies.
            </motion.p>
          </motion.div>

          {/* Right Column — Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-8 relative lg:pl-12 min-w-0"
          >
           

            <div className="absolute left-[7px] lg:left-[55px] top-2 bottom-0 w-[2px] bg-linear-to-b from-primary/80 via-black/10 dark:via-white/10 to-transparent" />

            <div className="flex flex-col gap-16">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12 group"
                >
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background z-10 transition-transform duration-300 group-hover:scale-125" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2 sm:gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest shrink-0 mt-1 sm:mt-2">
                      {edu.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg text-gray-500 font-medium">{edu.institution}</span>
                    {edu.gpa && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm font-semibold text-gray-500">{edu.gpa}</span>
                      </>
                    )}
                  </div>

                  {edu.tags && edu.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {edu.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.bullets && edu.bullets.length > 0 && (
                    <ul className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                      {edu.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Professional Certifications — commented out
            <motion.div variants={itemVariants} className="mt-24 pl-8 md:pl-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
                <span className="text-sm font-bold text-[#8b5cf6] uppercase tracking-widest">Continuous</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                AWS + Meta cards...
              </div>
            </motion.div>
            */}

          
          </motion.div>
        </div>
      </div>
        {/* Image Grid */}
        <motion.div variants={itemVariants} className="mt-16 pl-8 md:pl-12 mx-auto max-w-7xl min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
                    alt: "Foundations",
                    label: "Foundations",
                    caption: "The craft of clean code.",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                    alt: "Architecture",
                    label: "Architecture",
                    caption: "Scaling distributed systems.",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                    alt: "Experience",
                    label: "Experience",
                    caption: "Designing for human impact.",
                  },
                ].map(({ src, alt, label, caption }) => (
                  <div key={label} className="relative h-60 rounded-2xl overflow-hidden group min-w-0">
                    <img
                      src={src}
                      alt={alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                        {label}
                      </span>
                      <span className="text-sm font-medium text-white">{caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
    </section>
    
  );
}
