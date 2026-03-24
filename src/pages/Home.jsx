import React from "react";
import SideNav from "../components/portfolio/SideNav";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import EducationSection from "../components/portfolio/EducationSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

/* Optional: set VITE_HERO_IMAGE / VITE_PROJECT_IMAGES (JSON array) in .env */
const DEFAULT_PROJECT_IMAGES = [
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/c01752ea9_generated_090b7f14.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/130593ff2_generated_273b68de.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/655c66d37_generated_876ba9ee.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/90cd323b4_generated_96f8d386.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/c01752ea9_generated_090b7f14.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/130593ff2_generated_273b68de.png",
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/655c66d37_generated_876ba9ee.png",
];

const HERO_IMAGE =
  import.meta.env.VITE_HERO_IMAGE ||
  "https://media.base44.com/images/public/69bfe56b259e4d005a4a1991/90cd323b4_generated_96f8d386.png";

let PROJECT_IMAGES = DEFAULT_PROJECT_IMAGES;
if (import.meta.env.VITE_PROJECT_IMAGES) {
  try {
    PROJECT_IMAGES = JSON.parse(import.meta.env.VITE_PROJECT_IMAGES);
  } catch {
    console.warn("Invalid VITE_PROJECT_IMAGES — expected JSON array of URLs");
  }
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SideNav />
      
      {/* Grid lines decoration */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute left-16 top-0 bottom-0 w-px bg-border/10 hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-border/10" />
      </div>

      <main className="relative z-10">
        <HeroSection heroImage={HERO_IMAGE} />
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />
        
        <AboutSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" aria-hidden="true" />
        
        <SkillsSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" aria-hidden="true" />
        
        <ProjectsSection projectImages={PROJECT_IMAGES} />
        
        <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" aria-hidden="true" />
        
        <ExperienceSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" aria-hidden="true" />
        
        <EducationSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />
        
        <ContactSection />
        
        <Footer />
      </main>
    </div>
  );
}