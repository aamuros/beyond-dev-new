"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function SectionBlock({
  section,
  index,
}: {
  section: Project["sections"][0];
  index: number;
}) {
  const hasSingleImage = section.images.length === 1;

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {section.imageBesideText ? (
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-muted tracking-wide uppercase">
                {section.label}
              </span>
              <h2 className="section-heading-title text-3xl lg:text-4xl min-[1441px]:text-5xl text-foreground">
                {section.heading}
              </h2>
              <p className="text-base lg:text-lg text-muted leading-relaxed font-medium">
                {section.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-surface aspect-[3/4]">
              <Image
                src={section.images[0].src}
                alt={section.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      ) : (
        <>
          <FadeIn>
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-sm font-semibold text-muted tracking-wide uppercase">
                {section.label}
              </span>
              <h2 className="section-heading-title text-3xl lg:text-4xl min-[1441px]:text-5xl text-foreground">
                {section.heading}
              </h2>
              <p className="text-base lg:text-lg text-muted leading-relaxed font-medium">
                {section.description}
              </p>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {section.images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl bg-surface aspect-[16/9]"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CaseStudyClient({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  return (
    <>
      <main className="relative z-10 bg-white shadow-xl rounded-b-[80px] overflow-hidden">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <Container size="md">
            <div className="flex flex-col gap-8 lg:gap-12">
              <FadeIn>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors w-fit"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to projects
                </Link>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-3">
                  <h1 className="section-heading-title text-5xl lg:text-7xl min-[1441px]:text-8xl text-foreground">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-muted font-medium">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                  {project.description.map((p, i) => (
                    <p
                      key={i}
                      className="text-base lg:text-lg text-muted leading-relaxed font-medium"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Hero image */}
        <section className="pb-16 lg:pb-24">
          <Container size="xl">
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl bg-surface aspect-[16/9]">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Content sections */}
        <section className="pb-16 lg:pb-24">
          <Container size="lg">
            <div className="flex flex-col gap-24 lg:gap-32">
              {project.sections.map((section, i) => (
                <SectionBlock key={section.label} section={section} index={i} />
              ))}
            </div>
          </Container>
        </section>

        {/* Next / Previous */}
        <section className="border-t border-border">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex items-center justify-between gap-4 py-10 lg:py-14 px-6 lg:px-16 border-b lg:border-b-0 lg:border-r border-border hover:bg-surface/50 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted font-medium">
                    Previous project
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                    {prev.title}
                  </span>
                </div>
                <ArrowLeft className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href={`/projects/${next.slug}`}
                className="group flex items-center justify-between gap-4 py-10 lg:py-14 px-6 lg:px-16 hover:bg-surface/50 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted font-medium">
                    Next project
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                    {next.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </>
  );
}
