"use client";

import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVisualStudio } from "react-icons/tb";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaTrello,
    FaDatabase,
    FaNetworkWired,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiNestjs,
    SiDotnet,
    SiPostman,
} from "react-icons/si";

interface Skill {
    name: string;
    icon: IconType;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "NestJS", icon: SiNestjs },
            { name: "ASP.NET Core", icon: SiDotnet },
            { name: "REST API", icon: FaNetworkWired },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: FaDatabase },
            { name: "SQL Server", icon: FaDatabase },
            { name: "Oracle", icon: FaDatabase },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "VS Code", icon: VscVscode },
            { name: "Visual Studio", icon: TbBrandVisualStudio },
            { name: "Postman", icon: SiPostman },
            { name: "Trello", icon: FaTrello },
        ],
    },
];

const containerVariants = {
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

export default function Skills() {
    return (
        <section id="skills" className="w-full relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6  md:px-12">

                {/* Section Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col items-center justify-center text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="flex gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6">
                        <span className="text-xs font-medium gradient-text uppercase tracking-wider">Expertise</span>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
                        Technical <span className="gradient-text">Arsenal</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        A comprehensive toolkit carefully curated over years of building high-performance web applications and enterprise software.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="flex flex-col"
                        >
                            <h3 className="text-xl font-bold ml-4 mb-6 text-foreground border-b border-black/10 dark:border-white/10 pb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex items-center gap-4 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 cursor-default"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                                <Icon className="text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            <span className="text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-foreground transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
