export interface Project {
  title: string;
  category: string;
  tags: string[];
  href: string;
  cta: string;
  image: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Santos Catering",
    category: "Food & Beverage",
    tags: ["Order System", "Payment Tracking"],
    href: "#contact",
    cta: "View Case",
    image: "/projects/catering.jpg",
    gradient: "from-amber-500/90 to-orange-600/90",
  },
  {
    title: "Reyes Auto Repair",
    category: "Automotive",
    tags: ["Customer DB", "Job Tracker"],
    href: "#contact",
    cta: "View Case",
    image: "/projects/auto-repair.jpg",
    gradient: "from-slate-600/90 to-zinc-800/90",
  },
  {
    title: "Cruz Beauty Studio",
    category: "Beauty & Wellness",
    tags: ["Booking System", "Reminders"],
    href: "#contact",
    cta: "View Case",
    image: "/projects/beauty.jpg",
    gradient: "from-pink-500/90 to-fuchsia-600/90",
  },
  {
    title: "Metro Grocery Hub",
    category: "Retail",
    tags: ["Inventory", "POS Integration"],
    href: "#contact",
    cta: "View Case",
    image: "/projects/grocery.jpg",
    gradient: "from-emerald-500/90 to-teal-700/90",
  },
];
