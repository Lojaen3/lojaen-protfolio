import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:pl-24 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-muted-foreground">
            © {new Date().getFullYear()} Lojaen Ayash
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Lojaen3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/lojaen-ayash-a194972b3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:lojaenayash@gmail.com"
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors focus:outline-2 focus:outline-primary"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}