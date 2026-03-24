import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Full Stack Founding Engineer",
    company: "Unitok App",
    duration: "Jun 2025 — Present",
    achievements: [
      "Developed the recommendation module, calculating user similarity based on tags and engagement to provide personalized feeds.",
      "Built scheduled tasks and leaderboard updates to refresh user rankings and initialize leaderboards on account creation.",
      "Built a scalable backend search API with fuzzy matching and privacy filtering for user accounts.",
      "Developed and integrated the web frontend using Angular, connecting APIs and ensuring smooth, fully functional user interfaces.",
    ],
  },
  {
    role: "Behavioral Design Intern",
    company: "Aim for Behavior in collaboration with MRDA",
    duration: "Sep 2024 — Dec 2024",
    achievements: [
      "Applied behavioral science frameworks (COM-B, Behavior Change Wheel) to analyze user challenges within the Farm-to-Table system.",
      "Developed system and user journey maps to identify key behaviors and intervention points.",
      "Designed a new engagement-focused feature to encourage continued user interaction with the platform.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Madinah Region Development Authority (MRDA)",
    duration: "Jun 2024 — Aug 2024",
    achievements: [
      "Worked on the Smart City - Farm-to-Table project to support sustainability and local food systems in Madinah.",
      "Analyzed end-to-end workflows through system mapping to identify process gaps and improvement opportunities.",
      "Applied design thinking to translate user needs into technical solution concepts.",
      "Conducted stakeholder interviews to gather and validate software requirements.",
      "Contributed to UI/UX design by designing interfaces and validating them through usability testing.",
    ],
  },
];

function TimelineNode({ experience, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Desktop layout */}
      <div className={`hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start`}>
        {/* Left content */}
        <div className={isEven ? "" : "order-3"}>
          {isEven && <ExperienceCard experience={experience} />}
        </div>
        
        {/* Center line + dot */}
        <div className="flex flex-col items-center order-2">
          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
          {index < experiences.length - 1 && (
            <div className="w-px h-full min-h-[200px] bg-border" />
          )}
        </div>

        {/* Right content */}
        <div className={isEven ? "order-3" : ""}>
          {!isEven && <ExperienceCard experience={experience} />}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-6">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 bg-border" />
          )}
        </div>
        <div className="pb-12">
          <ExperienceCard experience={experience} />
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ experience }) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500">
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="w-4 h-4 text-primary" />
        <span className="text-sm font-mono text-primary">{experience.duration}</span>
      </div>
      <h3 className="text-xl font-inter font-bold text-foreground mb-1">
        {experience.role}
      </h3>
      <p className="text-muted-foreground mb-4">{experience.company}</p>
      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="text-primary mt-1 shrink-0">▹</span>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 lg:pl-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          title="Experience"
          subtitle="My professional journey and key achievements."
        />
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <TimelineNode key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}