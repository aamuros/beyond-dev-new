import {
  FileSpreadsheet,
  MessageCircle,
  Camera,
  NotebookPen,
  Clock,
  AlertTriangle,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/container";

const painPoints: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: NotebookPen,
    title: "Paper & Notebooks",
    description:
      "Orders, bookings, and records scattered across notebooks that get lost or damaged.",
  },
  {
    icon: FileSpreadsheet,
    title: "Messy Spreadsheets",
    description:
      "Excel files with broken formulas, duplicate entries, and no one knows which version is correct.",
  },
  {
    icon: MessageCircle,
    title: "Messenger & Facebook",
    description:
      "Customer orders buried in chat threads, impossible to track, search, or hand off to staff.",
  },
  {
    icon: Camera,
    title: "Screenshots as Records",
    description:
      "Photos of receipts, payment confirmations, and inventory counts with no system to organize them.",
  },
  {
    icon: Clock,
    title: "Hours Wasted Daily",
    description:
      "Time that should go toward growing your business instead gets burned on admin work.",
  },
  {
    icon: AlertTriangle,
    title: "Costly Mistakes",
    description:
      "Missed orders, double bookings, wrong inventory counts, and lost payments costing you real money.",
  },
];

export default function PainPoints() {
  return (
    <section
      id="about"
      className="py-16 flex flex-col gap-12"
    >
      <Container size="sm">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="inline-flex items-center justify-center border border-transparent bg-surface text-muted font-medium w-fit whitespace-nowrap h-6 min-w-6 text-sm px-2 gap-1 rounded-sm">
            The Problem
          </span>
          <h2 className="text-4xl tracking-tighter text-foreground leading-tight font-medium text-balance max-w-lg">
            Sound Familiar?
          </h2>
          <p className="w-full max-w-md font-medium text-lg leading-relaxed text-muted">
            Many local businesses in the Philippines still run on paper, chat,
            and hope. If this is your daily reality, you&apos;re not alone.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-black/[0.03] hover:bg-black/[0.05] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <point.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="text-lg font-medium text-foreground leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
