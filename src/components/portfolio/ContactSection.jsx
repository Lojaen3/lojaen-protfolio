import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, ArrowUpRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { createContactMessage } from "@/api/contact";

import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await createContactMessage({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (result?.provider === "mailto") {
        toast.success("Opening your email app — send the message to finish.");
      } else {
        toast.success("Message sent! I'll get back to you soon.");
      }
      if (result?.provider !== "mailto") {
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err?.message ||
          "Could not send your message. Configure your API or try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 lg:pl-24">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          number="06"
          title="Let's Build"
          subtitle="Have an idea or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-mono text-muted-foreground tracking-wider">NAME</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-mono text-muted-foreground tracking-wider">EMAIL</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-mono text-muted-foreground tracking-wider">MESSAGE</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-border py-3 text-lg text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 disabled:opacity-50 transition-all focus:outline-2 focus:outline-primary focus:outline-offset-2"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:pt-8"
          >
            <div>
              <h3 className="text-sm font-mono text-muted-foreground tracking-wider mb-4">REACH OUT DIRECTLY</h3>
              <a
                href="mailto:lojaenayash@gmail.com"
                className="group inline-flex items-center gap-3 text-xl md:text-2xl font-inter font-semibold text-foreground hover:text-primary transition-colors focus:outline-2 focus:outline-primary"
              >
                <Mail className="w-5 h-5" />
                lojaenayash@gmail.com
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-mono text-muted-foreground tracking-wider mb-4">CONNECT WITH ME</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/lojaen-ayash-a194972b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all focus:outline-2 focus:outline-primary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/Lojaen3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all focus:outline-2 focus:outline-primary"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a project in mind, need a technical consultation, 
                or just want to chat about technology don't hesitate to reach out.
                <Sparkles className="inline-block w-4 h-4 ml-1 text-primary align-text-bottom" aria-hidden="true" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}