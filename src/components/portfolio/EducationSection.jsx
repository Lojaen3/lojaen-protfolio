import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = {
  degree: "B.S.E. in Software Engineering",
  university: "University of Prince Mugrin bin AbdulAziz",
  duration: "Medina 2020 - 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Software Architecture",
    "Database Management Systems",
    "Machine Learning",
    "Computer Networks",
  ],
};

const academyEducation = {
  title: "Software Engineering",
  program: "Tuwaiq Academy & Apple Developer Academy",
  duration: "Riyadh Sep 2025 - June 2026",
  coursework: [
    "iOS Development (Swift)",
    "UI/UX Design",
    "App Business",
    "Artificial Intelligence",
    "Marketing",
    "CBL",
    "Project Management",
  ],
};

// Professional certifications are temporarily hidden for later updates.

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          title="Education"
          subtitle="My academic background."
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-bold text-foreground">{education.degree}</h3>
                  <p className="text-sm text-muted-foreground">{education.university}</p>
                </div>
              </div>
              <span className="text-sm font-mono text-primary">{education.duration}</span>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono text-muted-foreground tracking-wider">RELEVANT COURSEWORK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-sm text-muted-foreground bg-muted rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-bold text-foreground">{academyEducation.title}</h3>
                  <p className="text-sm text-muted-foreground">{academyEducation.program}</p>
                </div>
              </div>
              <span className="text-sm font-mono text-primary">{academyEducation.duration}</span>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono text-muted-foreground tracking-wider">RELEVANT COURSEWORK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {academyEducation.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-sm text-muted-foreground bg-muted rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional certifications section temporarily hidden */}
        </div>
      </div>
    </section>
  );
}