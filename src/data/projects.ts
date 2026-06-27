export interface CaseStudySection {
  label: string;
  heading: string;
  description: string;
  images: { src: string; alt: string }[];
  imageBesideText?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  year: string;
  tags: string[];
  href: string;
  cta: string;
  image: string;
  gradient: string;
  description: string[];
  heroImage: { src: string; alt: string };
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    title: "Furniture Odyssey",
    slug: "furniture-odyssey",
    category: "Furniture & E-Commerce",
    year: "2025",
    tags: ["POS", "Landing Page"],
    href: "/projects/furniture-odyssey",
    cta: "View Case",
    image: "/projects/furniture-odyssey/furniture-odyssey-project-2x2.png",
    gradient: "from-amber-500/90 to-orange-600/90",
    description: [
      "Furniture Odyssey needed two connected systems — a public-facing catalog website to showcase their furniture products and an internal POS dashboard to manage the full sales workflow from quotation to delivery.",
      "We built a landing page with Supabase-backed product listings and a separate sales operations tool handling customer records, quotations, negotiated orders, payments, deliveries, and downloadable PDF documents.",
    ],
    heroImage: {
      src: "/projects/furniture-odyssey/furniture-odyssey-hero.png",
      alt: "Furniture Odyssey catalog website and POS dashboard hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "Two systems, one furniture business",
        description:
          "Furniture Odyssey runs on two custom-built applications. The catalog website is a public-facing React + Vite landing page backed by Supabase that showcases their furniture products to potential buyers. The POS dashboard is a Next.js internal tool with Prisma and Supabase that handles the entire manual sales workflow — from customer records and quotations to order fulfillment, payments, and delivery scheduling.",
        images: [
          {
            src: "/projects/furniture-odyssey/furniture-odyssey-overview.png",
            alt: "Furniture Odyssey catalog website and POS dashboard overview",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Manual sales workflows with no digital backbone",
        description:
          "The business was managing customer inquiries, quotations, and orders through manual channels — phone, Viber, Facebook Messenger, and walk-ins. There was no centralized system to track which quotations were approved, which orders had partial payments, or which deliveries were still pending. Product references and pricing lived in scattered spreadsheets and chat threads.",
        images: [],
      },
      {
        label: "The Catalog Website",
        heading: "A public storefront built with React and Supabase",
        description:
          "The catalog website is a React + TypeScript application built on Vite with Supabase as the backend. It displays the full furniture product line with images, categories, and product details. The site is designed to be the first touchpoint for customers — showcasing the brand and product range before they reach out through manual channels to place an order.",
        images: [
          {
            src: "/projects/furniture-odyssey/furniture-odyssey-catalog.png",
            alt: "Furniture Odyssey catalog website",
          },
        ],
        imageBesideText: true,
      },
      {
        label: "The POS Dashboard",
        heading: "An internal sales operations tool built on Next.js",
        description:
          "The POS is a full internal dashboard built with Next.js App Router, Prisma, and Supabase. It covers customer directory records with contact and source context, quotation creation with custom items and negotiated discounts, approved quotation conversion into operational orders, multiple payment tracking per order with downpayment and partial payment types, delivery scheduling with partial fulfillment, and downloadable React-PDF documents including quotations, invoices, receipts, and delivery summaries. Role-based permissions and activity logging keep the team accountable.",
        images: [
          {
            src: "/projects/furniture-odyssey/furniture-odyssey-pos.png",
            alt: "Furniture Odyssey POS dashboard",
          },
        ],
      },
    ],
  },
  {
    title: "Reyes Auto Repair",
    slug: "reyes-auto-repair",
    category: "Automotive",
    year: "2024",
    tags: ["Customer DB", "Job Tracker"],
    href: "/projects/reyes-auto-repair",
    cta: "View Case",
    image: "/projects/auto-repair.jpg",
    gradient: "from-slate-600/90 to-zinc-800/90",
    description: [
      "Reyes Auto Repair struggled with lost customer records and disorganized job assignments across their growing team.",
      "We built a customer database and job tracking system that gives instant access to vehicle history and real-time job status.",
    ],
    heroImage: {
      src: "/projects/auto-repair-hero.jpg",
      alt: "Reyes Auto Repair customer management system hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "Digitizing a 15-year-old paper-based repair shop",
        description:
          "Reyes Auto Repair had been using paper records for over 15 years. As the business grew, they needed a digital system to track customers, vehicles, and ongoing repair jobs without losing their personal touch.",
        images: [
          {
            src: "/projects/auto-repair-overview-1.jpg",
            alt: "Customer database overview",
          },
          {
            src: "/projects/auto-repair-overview-2.jpg",
            alt: "Job tracking dashboard screens",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Keeping the personal touch while going digital",
        description:
          "The shop's owner knew regular customers by name and remembered their vehicle history. The challenge was capturing that personal knowledge in a system that anyone on the team could use.",
        images: [
          {
            src: "/projects/auto-repair-challenge-1.jpg",
            alt: "Customer profile wireframes",
          },
          {
            src: "/projects/auto-repair-challenge-2.jpg",
            alt: "Design exploration for repair tracking",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "Customer profiles with full vehicle history",
        description:
          "We delivered a customer database with vehicle profiles, repair history, and a job board that shows what each mechanic is working on. Search is instant, and the interface works on tablets in the shop.",
        images: [
          {
            src: "/projects/auto-repair-solution-1.jpg",
            alt: "Final customer profile design",
          },
          {
            src: "/projects/auto-repair-solution-2.jpg",
            alt: "Job tracking board interface",
          },
          {
            src: "/projects/auto-repair-solution-3.jpg",
            alt: "Mobile tablet view for shop floor",
          },
        ],
      },
    ],
  },
  {
    title: "Cruz Beauty Studio",
    slug: "cruz-beauty-studio",
    category: "Beauty & Wellness",
    year: "2025",
    tags: ["Booking System", "Reminders"],
    href: "/projects/cruz-beauty-studio",
    cta: "View Case",
    image: "/projects/beauty.jpg",
    gradient: "from-pink-500/90 to-fuchsia-600/90",
    description: [
      "Cruz Beauty Studio's biggest pain point was double bookings and no-shows that cost them revenue every month.",
      "We built a booking system with automated reminders that eliminated scheduling conflicts and reduced no-shows by 60%.",
    ],
    heroImage: {
      src: "/projects/beauty-hero.jpg",
      alt: "Cruz Beauty Studio booking system hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "A booking system designed for client retention",
        description:
          "Cruz Beauty Studio needed more than a calendar — they needed a system that would keep clients coming back. We designed a booking experience with automated reminders, easy rescheduling, and a client preferences tracker.",
        images: [
          {
            src: "/projects/beauty-overview-1.jpg",
            alt: "Booking system overview screens",
          },
          {
            src: "/projects/beauty-overview-2.jpg",
            alt: "Client management dashboard",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Eliminating double bookings and reducing no-shows",
        description:
          "The studio was losing money from double bookings and clients forgetting appointments. The challenge was building a system that handles complex scheduling rules while sending timely reminders.",
        images: [
          {
            src: "/projects/beauty-challenge-1.jpg",
            alt: "Scheduling flow wireframes",
          },
          {
            src: "/projects/beauty-challenge-2.jpg",
            alt: "Reminder system design exploration",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "Smart booking with automated client communication",
        description:
          "We delivered a booking system with conflict detection, SMS/Chat reminders, and a client preferences log. Studio owners can see their day at a glance and clients get reminders 24 hours before appointments.",
        images: [
          {
            src: "/projects/beauty-solution-1.jpg",
            alt: "Final booking calendar design",
          },
          {
            src: "/projects/beauty-solution-2.jpg",
            alt: "Automated reminder interface",
          },
          {
            src: "/projects/beauty-solution-3.jpg",
            alt: "Client preferences and history view",
          },
        ],
      },
    ],
  },
  {
    title: "Metro Grocery Hub",
    slug: "metro-grocery-hub",
    category: "Retail",
    year: "2025",
    tags: ["Inventory", "POS Integration"],
    href: "/projects/metro-grocery-hub",
    cta: "View Case",
    image: "/projects/grocery.jpg",
    gradient: "from-emerald-500/90 to-teal-700/90",
    description: [
      "Metro Grocery Hub was losing money from stockouts and overordering due to manual inventory counts.",
      "We built an inventory management system with POS integration that provides real-time stock levels and automated reorder alerts.",
    ],
    heroImage: {
      src: "/projects/grocery-hero.jpg",
      alt: "Metro Grocery Hub inventory system hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "Real-time inventory for a high-volume grocery store",
        description:
          "Metro Grocery Hub stocks over 3,000 SKUs and processes 200+ transactions daily. We designed an inventory system that syncs with their POS in real time and flags items that need restocking.",
        images: [
          {
            src: "/projects/grocery-overview-1.jpg",
            alt: "Inventory dashboard overview",
          },
          {
            src: "/projects/grocery-overview-2.jpg",
            alt: "Stock level monitoring screens",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Syncing inventory across multiple counters",
        description:
          "With 4 checkout counters and a growing online ordering channel, keeping inventory accurate was impossible with manual counts. The challenge was building a system that stays accurate without constant human input.",
        images: [
          {
            src: "/projects/grocery-challenge-1.jpg",
            alt: "Multi-counter sync wireframes",
          },
          {
            src: "/projects/grocery-challenge-2.jpg",
            alt: "POS integration design exploration",
          },
        ],
      },
      {
        label: "The Solution",
        heading: "Automated stock tracking with smart reorder alerts",
        description:
          "We delivered an inventory system that auto-decrements stock on each sale, alerts the owner when items hit reorder thresholds, and generates weekly stock reports. The POS integration runs in real time with zero manual input.",
        images: [
          {
            src: "/projects/grocery-solution-1.jpg",
            alt: "Final inventory management interface",
          },
          {
            src: "/projects/grocery-solution-2.jpg",
            alt: "Reorder alert system",
          },
          {
            src: "/projects/grocery-solution-3.jpg",
            alt: "Weekly stock report view",
          },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return { prev, next };
}
