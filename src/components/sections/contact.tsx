"use client";

import Cal from "@calcom/embed-react";
import { Check } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white flex flex-col justify-center py-6 md:py-12 overflow-hidden"
    >
      <Container size="lg" className="flex flex-col gap-6 md:gap-8">
        <SectionHeading
          badge="Get Started"
          badgeVariant="pill"
          title="Let's Talk About Your Business"
          description="No pressure, no jargon — just a real conversation about what's slowing you down and how we can help."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-sm"
          className="mb-0"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 self-center w-full max-h-[calc(100vh-220px)]">
          <div className="flex flex-col gap-4 self-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-foreground">
                Let's turn your manual processes into automated systems.
              </h3>
              <p className="text-muted font-medium leading-relaxed text-sm">
                You don't need bloated software or a 6-month project. You need
                that one process — the one that eats your time, loses your
                paperwork, or makes your team groan — to just work. We build
                focused solutions for your biggest bottleneck, delivered in 14
                days.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-foreground">
                Book a free checkup — no strings attached.
              </h3>
              <p className="text-muted font-medium leading-relaxed text-sm">
                Pick a time that works for you. We'll listen, ask a few
                questions, and tell you honestly if we can help. If we're not
                the right fit, we'll say so.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 mt-1">
              {[
                "Free technical assessment",
                "Clear, non-technical breakdown",
                "Scheduled in Philippine Standard Time (PST)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-foreground flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden md:h-[500px] md:max-h-[500px]">
            <Cal
              calLink="beyond-dev-2wzrnz/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
