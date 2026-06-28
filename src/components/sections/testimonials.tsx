"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { testimonials, type Testimonial } from "@/data/testimonials";

function AvatarGroup({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative flex items-end">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-base font-semibold"
        style={{ backgroundColor: testimonial.avatarColor }}
      >
        {initials}
      </div>
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold -ml-3 shadow-[0_0_0_2.5px_white]"
        style={{ backgroundColor: testimonial.companyColor }}
      >
        {testimonial.companyInitial}
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(`testimonial-animated-${index}`) === "true") {
      setHasAnimated(true);
    }
  }, [index]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      sessionStorage.setItem(`testimonial-animated-${index}`, "true");
    }
  }, [isInView, hasAnimated, index]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-1 min-w-[300px] flex-col items-start gap-5 p-8 bg-white rounded-[24px] relative overflow-visible"
      style={{ border: "1px solid rgba(64, 64, 64, 0.06)" }}
      initial={false}
      animate={{
        opacity: hasAnimated ? 1 : 0,
        y: hasAnimated ? 0 : 30,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="flex items-center gap-3.5">
        <AvatarGroup testimonial={testimonial} />
        <div className="flex flex-col">
          <span className="text-base lg:text-lg font-semibold text-[#141414] leading-tight">
            {testimonial.name}
          </span>
          <span className="text-sm text-[#717171] leading-tight mt-0.5">
            {testimonial.company}
          </span>
        </div>
      </div>
      <p className="text-base lg:text-lg leading-relaxed text-[#141414]">
        {testimonial.quote}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="global-section flex flex-col gap-12">
      <Container size="sm">
        <SectionHeading
          badge="Testimonials"
          badgeVariant="pill"
          title="What Our Customers Are Saying"
          description="Real businesses, real results. See how simple systems transformed their daily operations."
        />
      </Container>

      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
