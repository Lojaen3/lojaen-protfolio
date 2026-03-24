import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    category: "Mobile App",
    title: "UniTok",
    description:
      "UniTok is a university-focused social platform designed to connect students, showcase achievements, and turn campus life into real opportunities. It empowers students to express themselves, engage with their community, and grow through meaningful interactions, recognition, and shared experiences.",
    technologies: ["Django", "Flutter", "PostgreSQL", "Docker", "AWS"],
    github: null,
    live: "https://apps.apple.com/sa/app/unitok-app/id6745688652",
    image: "/projects/unitok.jpg",
    imageClass: "object-contain object-top p-2 md:p-3",
    imageNoZoom: true,
    imageIndex: 0,
  },
  {
    category: "Mobile App",
    title: "Rewaqx",
    description:
      "Rewaq x is a platform that makes workplaces more connected, supportive, and positive. It helps teams communicate better, recognize each other's efforts, and build a culture that supports mental health, well-being, and strong relationships.",
    technologies: ["Laravel", "Flutter", "PostgreSQL", "HealthKit", "Ollama"],
    github: null,
    live: null,
    image: "/projects/rewaqx.jpg",
    imageIndex: 1,
  },
  {
    category: "Mobile App",
    title: "RightHand",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    technologies: ["SwiftUI", "SwiftData", "VoiceOver", "Accessibility", "MVVM"],
    github: null,
    live: null,
    image: "/projects/righthand.jpg",
    imageIndex: 2,
  },
  {
    category: "Mobile App",
    title: "Planto",
    description:
      "Planto is an iOS app created to simplify plant care by helping users track, water, and care for their plants with automated reminders.",
    technologies: ["SwiftUI", "Sketch", "Local Notifications"],
    github: "https://github.com/Lojaen3/plantsApp",
    live: null,
    image: "/projects/planto.jpg",
    imageIndex: 3,
  },
  {
    category: "Mobile App",
    title: "Cyclash",
    description:
      "CycLash is a challenge-based cycling app that motivates users to stay active through challenges and progress tracking.",
    technologies: ["Sketch", "SwiftUI"],
    github: "https://github.com/Lojaen3/Cyclash",
    live: null,
    image: "/projects/cyclash.jpg",
    imageIndex: 4,
  },
  {
    category: "WebSite",
    title: "Borikat",
    description:
      "An all-in-one tourism guide for Madina that helps visitors and residents discover landmarks, activities, and entertainment. It makes trip planning easier and highlights the city's rich culture and heritage.",
    technologies: ["Laravel", "HTML", "CSS", "JavaScript", "phpMyAdmin", "Bootstrap"],
    github: null,
    live: null,
    image: "/projects/borikat.jpg",
    imageIndex: 5,
  },
  {
    category: "WebSite",
    title: "Travel Roommate",
    description:
      "A web-based platform that connects travelers seeking travel companions based on destination selection. Users can choose a country, view available travelers, and send travel requests through the system. Implemented backend logic to manage user data, travel requests, and email notifications.",
    technologies: ["Node.js", "MongoDB", "Email Service Integration"],
    github: null,
    live: null,
    image: "/projects/travel-roommate.jpg",
    imageIndex: 6,
  },
];

function ProjectCard({ project, index, images = [] }) {
  const fallback = images[project.imageIndex] ?? "";
  const [imgSrc, setImgSrc] = useState(() => project.image ?? fallback);

  useEffect(() => {
    setImgSrc(project.image ?? fallback);
  }, [project.image, project.imageIndex, project.title, fallback]);

  const hasLinks = Boolean(project.github || project.live);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500">
        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={imgSrc || fallback}
            alt={`Preview of ${project.title}`}
            className={`w-full h-full ${project.imageClass ?? "object-contain object-top p-2 md:p-3"} transition-transform duration-700`}
            onError={() => {
              if (fallback && imgSrc !== fallback) setImgSrc(fallback);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {project.category && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/15 border border-primary/25 rounded-md">
                {project.category}
              </span>
            </div>
          )}

          {/* Links overlay */}
          {hasLinks && (
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors focus:outline-2 focus:outline-primary"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-4 h-4 text-foreground" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors focus:outline-2 focus:outline-primary"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-inter font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ projectImages }) {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:pl-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          title="Projects"
          subtitle="A selection of projects that showcase my skills and problem-solving approach."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} images={projectImages} />
          ))}
        </div>
      </div>
    </section>
  );
}