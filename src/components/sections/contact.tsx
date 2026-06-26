import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <Container size="lg">
        <SectionHeading
          badge="Get Started"
          badgeVariant="pill"
          title="Let's Talk About Your Business"
          description="No pressure, no jargon — just a real conversation about what's slowing you down and how we can help."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-foreground">
                You don't need a "digital transformation."
              </h3>
              <p className="text-muted font-medium leading-relaxed">
                You need that one process — the one that eats your time, loses
                your paperwork, or makes your team groan — to just... work.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-foreground">
                We build simple, practical systems.
              </h3>
              <p className="text-muted font-medium leading-relaxed">
                Not bloated software. Not a 6-month project. A focused solution
                for your biggest bottleneck, delivered in 14 days.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Book a free checkup — no strings attached.
              </h3>
              <p className="text-muted font-medium leading-relaxed">
                Pick a time that works for you. We'll listen, ask a few
                questions, and tell you honestly if we can help. If we're not
                the right fit, we'll say so.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm p-6 min-h-[500px] flex items-center justify-center">
            <span className="text-muted text-sm font-medium">
              Scheduling widget loading…
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
