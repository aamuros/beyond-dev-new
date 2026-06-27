import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const painPoints: {
  title: string;
  description: string;
  video: string;
}[] = [
  {
    title: "Paper & Notebooks",
    description:
      "Orders, bookings, and records scattered across notebooks that get lost or damaged.",
    video: "https://framerusercontent.com/assets/MkRqx95luhv3HrzWUVBPk3lbk.mp4",
  },
  {
    title: "Messy Spreadsheets",
    description:
      "Excel files with broken formulas, duplicate entries, and no one knows which version is correct.",
    video: "https://framerusercontent.com/assets/jqYjBn39McfA2B8VkBvj3Ca2U0.mp4",
  },
  {
    title: "Messenger & Facebook",
    description:
      "Customer orders buried in chat threads, impossible to track, search, or hand off to staff.",
    video: "https://framerusercontent.com/assets/DpMFb4zuxQzqPqM9HQtesX9P6AE.mp4",
  },
  {
    title: "Screenshots as Records",
    description:
      "Photos of receipts, payment confirmations, and inventory counts with no system to organize them.",
    video: "https://framerusercontent.com/assets/MkRqx95luhv3HrzWUVBPk3lbk.mp4",
  },
  {
    title: "Hours Wasted Daily",
    description:
      "Time that should go toward growing your business instead gets burned on admin work.",
    video: "https://framerusercontent.com/assets/jqYjBn39McfA2B8VkBvj3Ca2U0.mp4",
  },
  {
    title: "Costly Mistakes",
    description:
      "Missed orders, double bookings, wrong inventory counts, and lost payments costing you real money.",
    video: "https://framerusercontent.com/assets/DpMFb4zuxQzqPqM9HQtesX9P6AE.mp4",
  },
];

const CARD_TOP_BASE = 203.5;
const CARD_TOP_INCREMENT = 25;
const CARD_GAP = 50;

function PainPointCard({
  point,
  index,
}: {
  point: (typeof painPoints)[number];
  index: number;
}) {
  const top = CARD_TOP_BASE + index * CARD_TOP_INCREMENT;
  const isLast = index === painPoints.length - 1;

  return (
    <li
      className="pain-point-card"
      style={{
        top: `${top}px`,
        marginBottom: isLast ? 0 : `${CARD_GAP}px`,
      }}
    >
      <div className="pain-point-card__header">
        <video
          src={point.video}
          loop
          preload="auto"
          muted
          playsInline
          autoPlay
          className="pain-point-card__video"
        />
      </div>
      <div className="pain-point-card__content">
        <h3 className="pain-point-card__title">{point.title}</h3>
        <p className="pain-point-card__description">{point.description}</p>
      </div>
    </li>
  );
}

export default function PainPoints() {
  return (
    <section id="about" className="global-section flex flex-col gap-12">
      <Container size="sm">
        <SectionHeading
          badge="The Problem"
          badgeVariant="pill"
          title="Sound Familiar?"
          descriptionHtml={
            <h3 className="text-lg leading-relaxed">
              <strong className="text-foreground">
                Many local businesses still run on paper, chat, and hope.
              </strong>{" "}
              If this is your daily reality, you&apos;re not alone.
            </h3>
          }
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />
      </Container>

      <Container>
        <ul className="pain-point-card-list" aria-hidden="true">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={point.title}
              point={point}
              index={index}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
