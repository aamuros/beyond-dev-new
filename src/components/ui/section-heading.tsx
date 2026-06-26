import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "pill";
  title: string;
  description?: string;
  descriptionHtml?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  description,
  descriptionHtml,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        badgeVariant === "pill" ? "gap-12" : "gap-5",
        className
      )}
    >
      {badge &&
        (badgeVariant === "pill" ? (
           <span className="pill-tag">
            {badge}
          </span>
        ) : (
          <span className="inline-flex items-center justify-center border border-transparent bg-surface text-muted font-medium w-fit whitespace-nowrap h-6 min-w-6 text-sm px-2 gap-1 rounded-sm">
            {badge}
          </span>
        ))}
      <h2
        className={cn(
          "section-heading-title text-4xl lg:text-[3.5rem] min-[1441px]:text-[5rem] text-foreground text-balance",
          align === "center" && "max-w-2xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {(description || descriptionHtml) && (
        <div
          className={cn(
            "w-full max-w-lg text-muted",
            descriptionHtml ? "section-heading-description" : "",
            descriptionClassName
          )}
        >
          {descriptionHtml || (
            <p className="font-medium">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
