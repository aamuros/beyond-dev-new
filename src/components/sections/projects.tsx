"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-black/[0.03] aspect-[4/4.5] lg:aspect-[4/3.5]"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Gradient background (placeholder for project image) */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-105",
          project.gradient
        )}
      />

      {/* Subtle noise/texture overlay */}
      <div className="absolute inset-0 bg-black/[0.08]" />

      {/* Tags - top area */}
      <div className="relative z-10 flex flex-wrap items-center gap-1.5 p-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto p-5 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
            {project.title}
          </h3>
          <span className="flex items-center gap-1 text-xs font-semibold text-white/80 shrink-0 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            {project.cta}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <p className="text-sm text-white/70 font-medium">{project.category}</p>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="global-section flex flex-col">
      <Container size="xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 mb-12 lg:mb-16">
          <div className="flex flex-col items-start gap-3">
            <span className="pill-tag">Our Work</span>
            <h2 className="section-heading-title text-4xl lg:text-[3.5rem] min-[1441px]:text-[5rem] text-foreground text-left">
              Projects we&apos;re proud of.
            </h2>
          </div>
          <div className="flex items-end mt-4 lg:mt-0">
            <p className="text-base lg:text-lg text-muted leading-relaxed font-medium max-w-md">
              We build focused systems that solve real problems for real
              businesses. Here are some of the transformations we&apos;ve
              delivered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
