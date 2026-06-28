import { Fragment } from "react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const painPoints: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Paper & Notebooks",
    description:
      "Orders, bookings, and records scattered across notebooks that get lost or damaged.",
    image: "/assets/paper-notebooks.gif",
  },
  {
    title: "Messy Spreadsheets",
    description:
      "Excel files with broken formulas, duplicate entries, and no one knows which version is correct.",
    image: "/assets/messy-spreadsheets.gif",
  },
  {
    title: "Messenger & Facebook",
    description:
      "Customer orders buried in chat threads, impossible to track, search, or hand off to staff.",
    image: "/assets/messenger-facebook.gif",
  },
  {
    title: "Screenshots as Records",
    description:
      "Photos of receipts, payment confirmations, and inventory counts with no system to organize them.",
    image: "/assets/screenshots-records.gif",
  },
];

const CARD_TOP_BASE = 203.5;
const CARD_TOP_INCREMENT = 25;
const CARD_GAP = 50;
const SPACER_GAP = 30;

function PainPointCard({
  point,
  index,
}: {
  point: (typeof painPoints)[number];
  index: number;
}) {
  const top = CARD_TOP_BASE + index * CARD_TOP_INCREMENT;
  const isLast = index === painPoints.length - 1;
  const isSecondToLast = index === painPoints.length - 2;

  return (
    <>
      <li
        className="pain-point-card"
        style={{
          top: `${top}px`,
          marginBottom: isLast ? 0 : isSecondToLast ? 25 : `${CARD_GAP}px`,
        }}
      >
        <div className="pain-point-card__header">
          <img
            src={point.image}
            alt={point.title}
            className="pain-point-card__video"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="pain-point-card__content">
          <h3 className="pain-point-card__title">{point.title}</h3>
          <p className="pain-point-card__description">{point.description}</p>
        </div>
      </li>
      {!isLast && <div style={{ height: `${SPACER_GAP}px` }} />}
    </>
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
            <Fragment key={point.title}>
              <PainPointCard point={point} index={index} />
            </Fragment>
          ))}
        </ul>
      </Container>
    </section>
  );
}
