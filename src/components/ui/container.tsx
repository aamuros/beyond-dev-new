import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  grid?: boolean;
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({
  children,
  className,
  as: Component = "div",
  size = "xl",
  grid = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-6 mx-auto",
        grid ? "[max-width:calc(var(--spacing)*360)]" : sizeClasses[size],
        grid && "grid grid-cols-12 gap-x-6",
        className
      )}
    >
      {children}
    </Component>
  );
}
