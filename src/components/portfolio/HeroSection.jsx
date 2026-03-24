import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 px-6 lg:pl-24 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Mono tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-primary tracking-wider">SOFTWARE ENGINEER</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-inter font-bold tracking-tight leading-none"
          >
            <span className="text-foreground">LOJAEN</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-violet-electric bg-clip-text text-transparent">
              AYASH
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            A Software Engineer who turns logic
            into experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all focus:outline-2 focus:outline-primary focus:outline-offset-2"
            >
              View Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all focus:outline-2 focus:outline-primary focus:outline-offset-2"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}