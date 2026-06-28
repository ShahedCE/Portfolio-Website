"use client";

import { motion, Variants } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer Intern",
    company: "Neuroflight Lab",
    date: "Feb 2026 – Apr 2026",
    description:
      "Gained hands-on experience in full-stack software development by contributing to real-world web applications. Collaborated with senior developers to build, test, debug, and maintain scalable software solutions while following professional development workflows.",
    bullets: [
      "Assisted in developing and maintaining full-stack web applications.",
      "Built frontend components using React, Next.js, and Tailwind CSS.",
      "Developed backend features with Node.js, NestJS.",
      "Integrated RESTful APIs and performed database operations using PostgreSQL.",
      "Fixed bugs, improved application performance, and participated in code reviews.",
      "Used Git and GitHub for version control and collaborative development.",
      "Followed Agile development practices and software engineering best practices.",
    ],
    tags: ["React", "Next.js", "Tailwind", "Node.js", "NestJS", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    date: "May 2024 – Present",
    description:
      "Designing and developing full-stack web applications from concept to deployment using modern frontend and backend technologies. Focused on building scalable, responsive, and user-centric solutions while following clean architecture and industry best practices.",
    bullets: [
      "Developed full-stack applications using React, Next.js, Node.js, NestJS, and ASP.NET Core.",
      "Built responsive and accessible user interfaces with Tailwind CSS and TypeScript.",
      "Designed and integrated RESTful APIs for seamless frontend-backend communication.",
      "Worked with PostgreSQL and Microsoft SQL Server for database design and management.",
      "Implemented authentication, authorization, and role-based access control.",
      "Optimized application performance, maintainability, and code quality.",
      "Managed source code with Git and GitHub.",
      "Built and maintained multiple real-world portfolio and SaaS-based projects.",
    ],
    tags: ["TypeScript", "Next.js", "NestJS", "ASP.NET Core", "SQL Server"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export default function Experience() {
  return (
    <section id="experience" className="w-full relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6"
            >
              <span className="text-xs font-medium gradient-text uppercase tracking-wider">
                Career
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground"
            >
              Experience
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              A visual history of building the future of the web across professional roles and personal ventures.
            </motion.p>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-8 relative lg:pl-12"
          >
            {/* Vertical Line */}
            <div className="absolute left-[7px] lg:left-[55px] top-2 bottom-0 w-[2px] bg-linear-to-b from-primary/80 via-black/10 dark:via-white/10 to-transparent"></div>

            <div className="flex flex-col gap-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background z-10 transition-transform duration-300 group-hover:scale-125"></div>

                  {/* Content */}
                  <span className="text-sm font-bold text-primary uppercase tracking-widest mb-2 block">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <span className="text-lg text-gray-500 font-medium italic mb-5 block">
                    {exp.company}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="pl-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
