"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { TrendingUp, Clock, CalendarCheck, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const testimonials = [
  {
    variant: "blueMagenta" as const,
    name: "Maria Santos",
    business: "Santos Catering Services",
    location: "Quezon City",
    quote:
      "Before, I was writing all orders in a notebook and checking Messenger for payments. Now everything is in one system. I save 3 hours every day and I haven't missed a single order since.",
    system: "Order & Payment Tracker",
    stat: "3h saved daily",
    statIcon: Clock,
  },
  {
    variant: "neutral" as const,
    name: "Jun Reyes",
    business: "Reyes Auto Repair Shop",
    location: "Cavite",
    quote:
      "My customers used to wait while I翻 through paper records. Now I pull up their history in seconds. My staff also knows exactly what tasks to do each day. Game changer.",
    system: "Customer DB & Task Tracker",
    stat: "10x faster lookups",
    statIcon: TrendingUp,
  },
  {
    variant: "cyanBlue" as const,
    name: "Aileen Cruz",
    business: "Cruz Beauty Studio",
    location: "Makati",
    quote:
      "Double bookings were my biggest headache. Since getting the booking system, I haven't had a single conflict. My clients love the reminders too.",
    system: "Booking Tracker",
    stat: "Zero conflicts",
    statIcon: CalendarCheck,
  },
  {
    variant: "gradient" as const,
    name: "",
    business: "",
    location: "",
    quote: "",
    system: "",
    stat: "",
    statIcon: Quote,
    cta: { label: "See all testimonials", href: "#contact" },
  },
];

const variantStyles = {
  blueMagenta: "bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10",
  neutral: "bg-black/[0.03]",
  cyanBlue: "bg-gradient-to-br from-cyan-400/10 to-blue-500/10",
  gradient:
    "bg-gradient-to-br from-foreground via-foreground/95 to-foreground/80 text-white",
};

const statAccent = {
  blueMagenta: { bg: "bg-blue-500/10", text: "text-blue-500" },
  neutral: { bg: "bg-green-500/10", text: "text-green-500" },
  cyanBlue: { bg: "bg-cyan-500/10", text: "text-cyan-600" },
  gradient: { bg: "bg-white/10", text: "text-white/70" },
};

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  const isGradient = item.variant === "gradient";
  const accent = statAccent[item.variant];
  const StatIcon = item.statIcon;

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl overflow-hidden w-[300px]",
        variantStyles[item.variant]
      )}
    >
      {!isGradient && (
        <div className="relative h-[180px] flex items-center justify-center border-b border-border/40">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center shadow-lg">
              <Quote className="w-7 h-7 text-white" />
            </div>
            <div
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                accent.bg,
                accent.text
              )}
            >
              <StatIcon className="w-3.5 h-3.5" />
              {item.stat}
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-6 rounded-full"
                  style={{
                    backgroundColor: "var(--color-foreground)",
                    opacity: 1 - i * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {!isGradient && (
          <div
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium w-fit",
              accent.bg,
              accent.text
            )}
          >
            {item.system}
          </div>
        )}
        {isGradient ? (
          <>
            <h3 className="text-xl font-medium leading-tight text-white">
              Real businesses, real results.
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              See how simple systems transformed their daily operations.
            </p>
            {item.cta && (
              <a
                href={item.cta.href}
                className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-white text-foreground text-sm font-medium w-fit mt-auto hover:bg-white/90 transition-colors"
              >
                {item.cta.label}
              </a>
            )}
          </>
        ) : (
          <>
            <p className="text-foreground text-[15px] leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="pt-3 border-t border-border/40 mt-auto">
              <p className="font-medium text-foreground text-sm">{item.name}</p>
              <p className="text-xs text-muted mt-0.5">
                {item.business} &bull; {item.location}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const PAUSE_ICON_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14" fill="currentColor">
    <path d="M0,14H4V0H0ZM8,0V14h4V0Z" />
  </svg>
);

const PLAY_ICON_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" fill="currentColor">
    <path d="M0,0,10,7,0,14Z" />
  </svg>
);

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.animationPlayState = isPaused ? "paused" : "running";
  }, [isPaused]);

  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative my-[280px] p-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Results"
          badgeVariant="pill"
          title="What Our Clients Say"
          description="Real businesses, real results. See how simple systems transformed their daily operations."
        />
      </div>

      <div className="mt-16 relative">
        <div className="marquee-container">
          <ul
            ref={trackRef}
            className="marquee-track"
          >
            {items.map((item, i) => (
              <li key={i} className="flex-shrink-0">
                <TestimonialCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          aria-label={isPaused ? "Play animation" : "Pause animation"}
          onClick={() => setIsPaused(!isPaused)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-background text-foreground hover:bg-surface transition-colors cursor-pointer"
        >
          <span className="w-3.5 h-3.5 flex items-center justify-center">
            {isPaused ? PLAY_ICON_SVG : PAUSE_ICON_SVG}
          </span>
        </button>
      </div>
    </section>
  );
}
