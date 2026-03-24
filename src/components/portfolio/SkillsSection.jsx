import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Cloud, Cpu, Brain } from "lucide-react";
import SectionHeader from "./SectionHeader";

/** Original site categories — CV items placed under the closest fit */
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Swift",
      "Dart",
      "Angular",
      "Bootstrap",
      "SwiftUI",
      "Flutter",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Python",
      "Java",
      "Node.js",
      "Django REST Framework",
      "RESTful APIs",
      "OAuth 2.0",
      "Celery",
      "Flower",
      "Beat",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "SwiftData",
      "phpMyAdmin",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "iCloud"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: ["Core ML", "OpenAI APIs"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "GitHub",
      "Figma",
      "Sketch",
      "Lucidchart",
      "Jira",
      "Postman",
      "JUnit",
      "PyTest",
    ],
  },
  {
    title: "Concepts & Methodologies",
    icon: Cpu,
    skills: [
      "JSON",
      "SOLID",
      "Agile Scrum",
      "Waterfall",
      "UML",
      "MVC & MVVM Architecture",
      "Security Best Practices",
      "Requirements Engineering",
      "Project Management",
      "Design Thinking",
    ],
  },
];

function SkillCard({ category, index }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-inter font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-mono text-muted-foreground bg-muted rounded-lg hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}