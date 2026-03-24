import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Skills", href: "#skills" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Education", href: "#education" },
  { num: "06", label: "Contact", href: "#contact" },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Side rail - desktop */}
      <nav className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-between py-8 border-r border-border/30">
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="w-10 h-10 flex items-center justify-center text-xs font-mono text-muted-foreground hover:text-primary transition-colors focus:outline-2 focus:outline-primary"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.num}
            </a>
          ))}
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </nav>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-card/80 backdrop-blur-md border border-border/30 hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
        aria-label="Open navigation menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.num}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group flex items-center gap-6 py-3 px-4 rounded-lg hover:bg-primary/5 transition-all focus:outline-2 focus:outline-primary"
                >
                  <span className="text-sm font-mono text-primary">{item.num}</span>
                  <span className="text-4xl md:text-6xl font-inter font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}