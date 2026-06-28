import Container from "@/components/ui/container";

const steps: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Free Business Process Checkup",
    description:
      "We talk to you, understand how your business currently works, and identify the one messy process causing the most pain.",
    image: "/assets/process-checkup.gif",
  },
  {
    title: "System Blueprint",
    description:
      "We create a clear workflow plan showing exactly what the system will do, how it fits your process, and what you'll get.",
    image: "/assets/process-blueprint.gif",
  },
  {
    title: "14-Day Starter System",
    description:
      "We build and deliver your working system in 14 days after requirements are approved. No endless waiting.",
    image: "/assets/process-starter.gif",
  },
  {
    title: "Monthly Support",
    description:
      "Optional ongoing support including maintenance, hosting, backups, bug fixes, and improvements as your business grows.",
    image: "/assets/process-support.gif",
  },
];

export default function Process() {
  return (
    <section id="process" className="global-section flex flex-col">
      <Container size="xl">
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="pill-tag">How it works</span>
          <h2 className="section-heading-title text-4xl lg:text-[3.5rem] min-[1441px]:text-[5rem] text-foreground text-center">
            From Messy to Managed in 4 Steps
          </h2>
          <p className="text-base lg:text-lg text-muted leading-relaxed font-medium text-center max-w-2xl">
            Our proven process takes you from paper chaos to a working system
            — quickly and without the headaches.
          </p>
        </div>

        <div className="flex flex-col place-content-center place-items-center w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row place-content-center lg:place-content-[center_flex-start] lg:items-stretch items-center gap-6 w-full h-min p-0 relative overflow-visible">
            {steps.map((step) => {
              return (
                <div key={step.title} className="flex flex-col w-full lg:w-auto lg:flex-[1_0_0px] lg:h-full">
                  <div className="relative overflow-hidden aspect-[340/425] bg-[#f2f1f3] rounded-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="block w-full h-full object-cover object-center"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 pt-6 pb-2 px-4 flex-1">
                    <h4 className="text-base font-semibold text-[#141414] text-center leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#717171] text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
