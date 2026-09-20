"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import AnimatedCounter from "../AnimatedCounter";

interface TechItem {
  name: string;
  icon: string;
  color: string;
  border: string;
  bg: string;
  invertDark?: boolean;
}

const techList: TechItem[] = [
  {
    name: "React",
    icon: "/tech-icons/react.svg",
    color: "group-hover/item:text-[#0284c7] dark:group-hover/item:text-[#38bdf8]",
    border: "group-hover/item:border-[#0284c7]/50 dark:group-hover/item:border-[#38bdf8]/70",
    bg: "group-hover/item:bg-[#0284c7]/10 dark:group-hover/item:bg-[#38bdf8]/15",
  },
  {
    name: "Next.js",
    icon: "/tech-icons/nextjs.svg",
    color: "group-hover/item:text-black dark:group-hover/item:text-white",
    border: "group-hover/item:border-black/40 dark:group-hover/item:border-white/70",
    bg: "group-hover/item:bg-black/10 dark:group-hover/item:bg-white/15",
    invertDark: true,
  },
  {
    name: "Node.js",
    icon: "/tech-icons/nodejs.svg",
    color: "group-hover/item:text-[#16a34a] dark:group-hover/item:text-[#4ade80]",
    border: "group-hover/item:border-[#16a34a]/50 dark:group-hover/item:border-[#4ade80]/70",
    bg: "group-hover/item:bg-[#16a34a]/10 dark:group-hover/item:bg-[#4ade80]/15",
  },
  {
    name: "Nest.js",
    icon: "/tech-icons/nestjs.svg",
    color: "group-hover/item:text-[#e11d48] dark:group-hover/item:text-[#fb7185]",
    border: "group-hover/item:border-[#e11d48]/50 dark:group-hover/item:border-[#fb7185]/70",
    bg: "group-hover/item:bg-[#e11d48]/10 dark:group-hover/item:bg-[#fb7185]/15",
  },
  {
    name: "Socket.io",
    icon: "/tech-icons/socketio.svg",
    color: "group-hover/item:text-black dark:group-hover/item:text-white",
    border: "group-hover/item:border-black/40 dark:group-hover/item:border-white/70",
    bg: "group-hover/item:bg-black/10 dark:group-hover/item:bg-white/15",
    invertDark: true,
  },
  {
    name: "Docker",
    icon: "/tech-icons/docker.svg",
    color: "group-hover/item:text-[#0284c7] dark:group-hover/item:text-[#38bdf8]",
    border: "group-hover/item:border-[#0284c7]/50 dark:group-hover/item:border-[#38bdf8]/70",
    bg: "group-hover/item:bg-[#0284c7]/10 dark:group-hover/item:bg-[#38bdf8]/15",
  },
  {
    name: "Redis",
    icon: "/tech-icons/redis.svg",
    color: "group-hover/item:text-[#dc2626] dark:group-hover/item:text-[#ef4444]",
    border: "group-hover/item:border-[#dc2626]/50 dark:group-hover/item:border-[#ef4444]/70",
    bg: "group-hover/item:bg-[#dc2626]/10 dark:group-hover/item:bg-[#ef4444]/15",
  },
  {
    name: "PostgreSQL",
    icon: "/tech-icons/postgresql.svg",
    color: "group-hover/item:text-[#2563eb] dark:group-hover/item:text-[#60a5fa]",
    border: "group-hover/item:border-[#2563eb]/50 dark:group-hover/item:border-[#60a5fa]/70",
    bg: "group-hover/item:bg-[#2563eb]/10 dark:group-hover/item:bg-[#60a5fa]/15",
  },
];

export default function Hero() {

  
  const containerVariants: Variants = { //for all the items in the container
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {   //for each item in the container
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="w-full relative pt-20 pb-0 md:pt-20 md:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
           >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium gradient-text uppercase tracking-wider">Open to new opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-6">
              Building
              <span className="gradient-text"> Digital</span> Solutions
            </motion.h1>


            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground max-w-xl mb-10 leading-relaxed"
            >
              <Typewriter
                words={[
             "Hi, I'm Md. Husne Jaman Shahed. A Full Stack Engineer building scalable web applications with clean architecture and exceptional user experiences."                ]}
                loop={2}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={0}
                delaySpeed={10000}
              />
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
              <Link
                href="#projects"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resume.pdf"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent text-foreground font-medium rounded-lg border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
              >
                Download Resume
              </Link>
            </motion.div>

            {/* Mobile Visual (Visible only on mobile/tablet, right after buttons) */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden block lg:hidden border border-black/10 dark:border-white/10 mb-12"
            >
              <div className="absolute inset-0 bg-zinc-900">
                <img
                  src="https://i.postimg.cc/85VYvwzJ/1.jpg"
                  alt="Portrait"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 w-[200px] shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="space-y-2.5 font-mono text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">const</span>
                    <span className="text-foreground">developer</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-yellow-300">true</span>
                    <span className="text-gray-400">;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">await</span>
                    <span className="text-blue-400">buildFuture</span>
                    <span className="text-gray-400">();</span>
                  </div>
                  <div className="h-1 w-full bg-black/10 dark:bg-white/10 rounded-full mt-3"></div>
                  <div className="h-1 w-4/5 bg-primary/40 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 md:gap-12 w-full pt-8 relative">
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-black/20 dark:from-white/20 to-transparent"></div>

              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-number mb-1">
                  <AnimatedCounter value={1} />
                  <span className="text-number">+</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-number mb-1">
                  <AnimatedCounter value={6} />
                  <span className="text-number">+</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-number mb-1">
                  <AnimatedCounter value={15} />
                  <span className="text-number">+</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Full-Stack Tech</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual (Desktop only) */}
          <motion.div
            className="lg:col-span-5 relative w-full h-[650px] rounded-3xl overflow-hidden hidden lg:block border border-black/10 dark:border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Placeholder Image using Unsplash */}
            <div className="absolute inset-0 bg-zinc-900">
              <img
                src="https://i.postimg.cc/85VYvwzJ/1.jpg"
                alt="Portrait"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              {/* Gradients to blend image into the dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
            </div>

            {/* Floating Glass Card (Simulated Code/Stats) */}
            <motion.div
              className="absolute bottom-10 left-10 p-5 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 w-[240px] shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* macOS style window controls */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              {/* Simulated code lines */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-primary">const</span>
                  <span className="text-foreground">developer</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-yellow-300">true</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">await</span>
                  <span className="text-blue-400">buildFuture</span>
                  <span className="text-gray-400">();</span>
                </div>
                <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full mt-4"></div>
                <div className="h-1.5 w-4/5 bg-primary/40 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fade Edge Marquee */}
      <div className="w-full max-w-7xl mx-auto mt-10 md:mt-14 mb-8 md:mb-10 relative overflow-hidden">
        <div className="mx-auto px-6 md:px-12 relative py-4 md:py-6">
          {/* Smooth Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-r from-background to-transparent z-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-l from-background to-transparent z-20"></div>

          {/* Marquee Track Container */}
          <div className="flex overflow-hidden group py-3 [mask-image:linear-gradient(to_right,transparent_0%,black_80px,black_calc(100%-80px),transparent_100%)]">
            <div
              className="flex items-center gap-24 pr-24 animate-marquee py-2"
              style={{ width: "max-content" }}
            >
              {[...techList, ...techList].map((tech, i) => (
                <MarqueeItem
                  key={i}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  border={tech.border}
                  bg={tech.bg}
                  invertDark={tech.invertDark}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeItem({
  name,
  icon,
  color,
  border,
  bg,
  invertDark,
}: TechItem) {
  return (
    <div className="group/item flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:scale-105 py-2">
      <div
        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] ${bg} ${border}`}
      >
        <img
          src={icon}
          alt={name}
          className={`w-7 h-7 object-contain transition-all duration-300 grayscale opacity-60 dark:opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 ${invertDark ? "dark:invert" : ""}`}
        />
      </div>

      <span
        className={`text-3xl font-bold tracking-wide transition-colors duration-300 text-gray-500 dark:text-gray-400 ${color}`}
      >
        {name}
      </span>
    </div>
  );
}
