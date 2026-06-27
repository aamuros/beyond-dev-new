import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

interface Testimonial {
  name: string;
  company?: string;
  quote: string;
  avatarUrl?: string;
  companyLogoUrl?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Santos",
    company: "Santos Catering",
    quote:
      "Before, I was writing all orders in a notebook and checking Messenger for payments. Now everything is in one system. I save 3 hours every day and I haven't missed a single order since.",
    initials: "MS",
  },
  {
    name: "Jun Reyes",
    quote:
      "My customers used to wait while I flipped through paper records. Now I pull up their history in seconds. My staff also knows exactly what tasks to do each day. Game changer.",
    initials: "JR",
  },
  {
    name: "Aileen Cruz",
    company: "Cruz Beauty Studio",
    quote:
      "Double bookings were my biggest headache. Since getting the booking system, I haven't had a single conflict. My clients love the reminders too.",
    initials: "AC",
  },
  {
    name: "Carlos Mendoza",
    company: "Mendoza Fresh Produce",
    quote:
      "Tracking inventory across two stalls used to be chaos. Now I know exactly what's running low before the market even opens. My waste has dropped by half.",
    initials: "CM",
  },
  {
    name: "Liza Dela Cruz",
    quote:
      "We handle over a hundred orders a week. The system keeps everything organized — from pickup schedules to payment status. My staff doesn't need to ask me anymore.",
    initials: "LD",
  },
  {
    name: "Rico Villanueva",
    company: "Villanueva Supplies",
    quote:
      "I used to lose track of which customers had outstanding balances. Now I send reminders automatically and collections have improved dramatically.",
    initials: "RV",
  },
  {
    name: "Patricia Lim",
    company: "Lim Accounting",
    quote:
      "My clients bring me receipts stuffed in envelopes. Now they upload everything digitally and I can focus on actual accounting instead of data entry.",
    initials: "PL",
  },
  {
    name: "Jerome Bautista",
    company: "Bautista Auto Parts",
    quote:
      "With over 2,000 SKUs, finding the right part used to take forever. The searchable database changed everything — my clerks can look up parts in seconds now.",
    initials: "JB",
  },
  {
    name: "Camille Reyes",
    quote:
      "I used to take custom cake orders through Viber and forget half the details. Now every order has a form with all the specifics. No more remakes or misunderstandings.",
    initials: "CR",
  },
  {
    name: "Rosa Delgado",
    company: "Delgado Trading",
    quote:
      "Reconciling payments used to take my entire Saturday. Now the system matches orders to payments automatically. I finally have my weekends back.",
    initials: "RD",
  },
  {
    name: "Mark Sy",
    company: "Sy Electronics",
    quote:
      "The warranty tracker alone paid for the whole system. Before, customers would come in with expired warranties and we had no way to verify. Now it's instant.",
    initials: "MS",
  },
  {
    name: "Ana Reyes",
    company: "Reyes Pharmacy",
    quote:
      "Managing expiry dates across thousands of products was a nightmare. Now I get alerts before anything expires. We've reduced waste by 40%.",
    initials: "AR",
  },
];

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-sky-500",
  "bg-lime-600",
];

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div
        className={cn(
          "flex flex-col rounded-3xl border border-black/[0.06] bg-white p-5"
        )}
      >
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            {item.avatarUrl ? (
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold",
                  avatarColors[index % avatarColors.length]
                )}
              >
                {item.initials}
              </div>
            )}
            {item.companyLogoUrl && (
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full overflow-hidden ring-2 ring-white">
                <img
                  src={item.companyLogoUrl}
                  alt={item.company ?? ""}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground leading-snug">
              {item.name}
            </p>
            {item.company && (
              <p className="text-xs text-muted leading-snug">{item.company}</p>
            )}
          </div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-foreground">
          {item.quote}
        </p>
      </div>
    </div>
  );
}

function distributeToColumns<T>(items: T[], colCount: number): T[][] {
  const columns: T[][] = Array.from({ length: colCount }, () => []);
  items.forEach((item, i) => {
    columns[i % colCount].push(item);
  });
  return columns;
}

export default function Testimonials() {
  const col4 = distributeToColumns(testimonials, 4);
  const col2 = distributeToColumns(testimonials, 2);

  return (
    <section id="testimonials" className="global-section flex flex-col gap-12">
      <Container size="sm">
        <SectionHeading
          badge="Testimonials"
          badgeVariant="pill"
          title="What Our Users Are Saying"
          description="Real businesses, real results. See how simple systems transformed their daily operations."
        />
      </Container>

      {/* Cards grid removed for now */}
    </section>
  );
}
