import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ number, title, subtitle = undefined }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-20"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm font-mono text-primary">{number}</span>
        <div className="h-px w-16 bg-primary/30" />
      </div>
      <h2 className="text-3xl md:text-5xl font-inter font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}