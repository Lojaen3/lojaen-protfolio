import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          title="About Me"
        />
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <h3 className="text-sm font-mono text-primary mb-3 tracking-wider">INTERESTS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building real-world applications, improving user experience, frontend and backend
                development, working with APIs, and exploring modern tools and technologies that make
                development more efficient.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <h3 className="text-sm font-mono text-primary mb-3 tracking-wider">GOALS</h3>
              <p className="text-muted-foreground leading-relaxed">
                To grow as a well-rounded software engineer by building impactful projects, improving
                my technical and problem-solving skills, and contributing to creating applications that
                provide real value to users.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}