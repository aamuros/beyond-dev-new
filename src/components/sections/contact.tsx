"use client";

import Cal from "@calcom/embed-react";
import { Check } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="global-section !mt-[60px] !pb-12 md:!pb-[200px] bg-white md:h-screen md:min-h-0 flex flex-col justify-center pt-6 md:pt-12 md:overflow-hidden"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 self-center w-full md:max-h-[calc(100vh-220px)]">
          <div className="flex flex-col gap-6 self-center">
            <div className="flex flex-col gap-3">
              <h3 className="section-heading-title text-2xl lg:text-3xl text-foreground">
                {"Let\u2019s turn your manual processes into automated systems."}
              </h3>
              <p className="text-muted font-medium leading-relaxed text-sm lg:text-base">
                {"You don\u2019t need bloated software or a 6-month project. You need that one process \u2014 the one that eats your time, loses your paperwork, or makes your team groan \u2014 to just work. We build focused solutions for your biggest bottleneck, delivered in 14 days."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base lg:text-lg font-semibold text-foreground">
                {"Book a free checkup \u2014 no strings attached."}
              </h3>
              <p className="text-muted font-medium leading-relaxed text-sm lg:text-base">
                {"Pick a time that works for you. We\u2019ll listen, ask a few questions, and tell you honestly if we can help. If we\u2019re not the right fit, we\u2019ll say so."}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              {[
                "Free technical assessment",
                "Clear, non-technical breakdown",
                "Scheduled in Philippine Standard Time (PST)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden h-[500px] md:h-[500px] md:max-h-[500px]">
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
