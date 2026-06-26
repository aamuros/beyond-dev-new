import {
  ClipboardCheck,
  FileText,
  Rocket,
  HeadphonesIcon,
  Check,
  ArrowDown,
  Cog,
  Shield,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const steps: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ClipboardCheck,
    title: "Free Business Process Checkup",
    description:
      "We talk to you, understand how your business currently works, and identify the one messy process causing the most pain.",
  },
  {
    icon: FileText,
    title: "System Blueprint",
    description:
      "We create a clear workflow plan showing exactly what the system will do, how it fits your process, and what you'll get.",
  },
  {
    icon: Rocket,
    title: "14-Day Starter System",
    description:
      "We build and deliver your working system in 14 days after requirements are approved. No endless waiting.",
  },
  {
    icon: HeadphonesIcon,
    title: "Monthly Support",
    description:
      "Optional ongoing support including maintenance, hosting, backups, bug fixes, and improvements as your business grows.",
  },
];

function StepVisual01() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex flex-col gap-2.5 w-full max-w-[200px]">
        {[
          { label: "Identify pain points", checked: true },
          { label: "Map current workflow", checked: true },
          { label: "Review documents", checked: false },
        ].map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 bg-white/80 border border-border/60 shadow-sm transition-all",
              i === 2 && "opacity-50"
            )}
          >
            <div
              className={cn(
                "w-4.5 h-4.5 rounded flex items-center justify-center shrink-0",
                item.checked
                  ? "bg-foreground text-white"
                  : "border border-border"
              )}
            >
              {item.checked && <Check className="w-3 h-3" />}
            </div>
            <span className="text-xs font-medium text-foreground truncate">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepVisual02() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex flex-col gap-3 w-full max-w-[200px]">
        <div className="h-2 w-24 rounded-full bg-foreground/10" />
        <div className="h-2 w-32 rounded-full bg-foreground/10" />
        <div className="h-2 w-20 rounded-full bg-foreground/10" />
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 rounded-lg border border-border/60 bg-white/80 p-2.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <div className="h-1.5 w-14 rounded-full bg-foreground/15" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-foreground/10" />
          </div>
          <ArrowDown className="w-4 h-4 text-muted rotate-[-90deg] shrink-0" />
          <div className="flex-1 rounded-lg border border-border/60 bg-white/80 p-2.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="h-1.5 w-14 rounded-full bg-foreground/15" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-foreground/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepVisual03() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center shadow-lg">
          <Rocket className="w-7 h-7 text-white" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-8 rounded-full bg-foreground" />
          <div className="h-1.5 w-8 rounded-full bg-foreground/60" />
          <div className="h-1.5 w-8 rounded-full bg-foreground/30" />
        </div>
        <div className="flex gap-2 mt-1">
          {["Built", "Tested", "Live"].map((label, i) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold",
                i === 2
                  ? "bg-green-500/10 text-green-500"
                  : "bg-surface text-muted"
              )}
            >
              {i < 2 && <Check className="w-3 h-3" />}
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepVisual04() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-3">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-border">
            <HeadphonesIcon className="w-7 h-7 text-foreground" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Shield className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          {[
            { label: "Hosting", icon: Cog },
            { label: "Backups", icon: Shield },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 bg-white/80 border border-border/60 shadow-sm text-[10px] font-medium text-foreground"
            >
              <Icon className="w-3 h-3 text-muted" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals = [StepVisual01, StepVisual02, StepVisual03, StepVisual04];

export default function Process() {
  return (
    <section id="process" className="global-section">
      <Container size="xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[repeat(20,1fr)] lg:gap-8">
          <div className="flex flex-col items-start gap-12 mb-24 lg:sticky lg:top-[20vh] lg:col-span-8 lg:mb-0">
            <div className="flex flex-col items-start gap-3">
               <span className="pill-tag">
                How it works
              </span>
              <h2 className="section-heading-title text-4xl lg:text-[3.5rem] min-[1441px]:text-[5rem] text-foreground text-left">
                From Messy to Managed in 4 Steps
              </h2>
            </div>
            <p className="text-base lg:text-lg text-muted leading-relaxed font-medium">
              Our proven process takes you from paper chaos to a working system
              — quickly and without the headaches.
            </p>
          </div>

          <div className="lg:col-span-12 lg:col-start-9">
            <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-[repeat(8,1fr)] lg:gap-[0.8rem]">
              {steps.map((step, index) => {
                const Visual = visuals[index];
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="group flex flex-col lg:col-span-4"
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-[340/425] bg-[#f2f1f3]">
                      <Visual />
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                      <Icon className="w-6 h-6 text-foreground shrink-0" />
                      <h3 className="text-base font-semibold text-foreground leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
