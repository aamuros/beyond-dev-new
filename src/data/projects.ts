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
    year: "2026",
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
    title: "Kamusta Gramby",
    slug: "kamusta-gramby",
    category: "Health & Wellness",
    year: "2026",
    tags: ["Mobile App", "Wellness"],
    href: "/projects/kamusta-gramby",
    cta: "View Case",
    image: "/projects/kamusta-gramby/kamusta-gramby-project-2x2.png",
    gradient: "from-emerald-500/90 to-green-700/90",
    description: [
      "Families with elderly relatives aging in place had no simple way to check in daily and ensure their loved ones were safe and well.",
      "We built a React Native mobile app with a two-role system — caretakers manage medication schedules and monitor activity, while care recipients perform daily check-ins and can trigger SOS alerts, with automated SMS notifications for inactivity.",
    ],
    heroImage: {
      src: "/projects/kamusta-gramby/kamusta-gramby-hero.png",
      alt: "Kamusta Gramby wellness check-in app hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "A wellness check-in app for seniors aging in place",
        description:
          "Kamusta Gramby is a React Native mobile application that provides a simple, daily way to check in on seniors and ensure they can safely age in place. The app operates on a two-role system — caretakers manage medication schedules, monitor activity levels, and maintain emergency contacts, while care recipients receive reminders, perform daily check-ins, and can activate an SOS feature when needed. Automated SMS alerts notify family members if the senior has been inactive for an extended period.",
        images: [
          {
            src: "/projects/kamusta-gramby/kamusta-gramby-overview.png",
            alt: "Kamusta Gramby app overview showing caretaker and care recipient screens",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "Bridging the gap between independence and safety",
        description:
          "Families wanted their elderly relatives to maintain independence and age comfortably at home, but worried about missed medications, falls, or periods of silence with no way to know if something was wrong. The challenge was building an app simple enough for seniors to use daily — with large touch targets, scalable fonts, and minimal friction — while giving caretakers meaningful oversight without being intrusive.",
        images: [],
      },
      {
        label: "Gramby's Screens",
        heading: "A simple daily check-in flow designed for seniors",
        description:
          "The care recipient experience is designed with senior accessibility as the top priority. Every interactive element meets a 48x48dp minimum touch target, and a 3-level font scaling system (Default, Large, Extra Large) ensures readability for users with varying vision. Gramby's screens include a daily check-in prompt, medication reminders with clear visual cues, and an SOS button that immediately notifies emergency contacts. The navigation is minimal and consistent — large buttons, high-contrast colors, and no hidden gestures — so seniors can use the app independently without confusion.",
        images: [
          {
            src: "/projects/kamusta-gramby/kamusta-gramby-gramby-screens.png",
            alt: "Kamusta Gramby care recipient screens — daily check-in, medication reminders, and SOS",
          },
        ],
        imageBesideText: true,
      },
      {
        label: "Caretaker Screens",
        heading: "Monitoring and medication management for family members",
        description:
          "The caretaker interface provides full oversight without being intrusive. Caretakers can set up and manage medication schedules, view check-in history and activity patterns, maintain a list of emergency contacts, and receive automated SMS alerts if the care recipient has been inactive for 6 or more hours. The caretaker dashboard is protected with a PIN lock that activates after 1 hour of inactivity, keeping sensitive health information secure. Separate navigation stacks ensure each role only sees what's relevant to them.",
        images: [
          {
            src: "/projects/kamusta-gramby/kamusta-gramby-caretaker-screens.png",
            alt: "Kamusta Gramby caretaker screens — medication management, activity monitoring, and alerts",
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
    title: "Hardware Store",
    slug: "hardware-store",
    category: "Retail & E-Commerce",
    year: "2026",
    tags: ["E-Commerce", "Inventory"],
    href: "/projects/hardware-store",
    cta: "View Case",
    image: "/projects/hardware-store/hardware-store-project-2x2.png",
    gradient: "from-orange-500/90 to-red-600/90",
    description: [
      "A local hardware store in the Philippines needed an online presence to let customers browse products, place delivery orders, and track order status — all without phone calls or walk-ins.",
      "We built a full-stack e-commerce platform with a customer-facing storefront, an admin dashboard for order and inventory management, and automated SMS notifications for real-time order updates.",
    ],
    heroImage: {
      src: "/projects/hardware-store/hardware-store-hero.png",
      alt: "Hardware Store e-commerce platform hero",
    },
    sections: [
      {
        label: "Overview",
        heading: "An online ordering system for a neighborhood hardware store",
        description:
          "Hardware Store is a full-stack e-commerce and inventory management platform built for a local hardware business in the Philippines. Customers browse the product catalog organized by category, search and filter by availability, add items to a cart with support for product variants like size or color, and place delivery orders with address and contact details. On the other side, store admins manage products, fulfill orders through a step-by-step status workflow, and track sales through a real-time analytics dashboard.",
        images: [
          {
            src: "/projects/hardware-store/hardware-store-overview.png",
            alt: "Hardware Store customer storefront and admin dashboard overview",
          },
        ],
      },
      {
        label: "The Challenge",
        heading: "No digital presence and manual order management",
        description:
          "The store handled all orders through phone calls, walk-ins, and chat messages. There was no centralized system to track which orders were pending, accepted, or out for delivery. Product availability was checked manually, and customers had no way to browse the full catalog before visiting the store. The business was losing potential sales from customers who expected an online ordering experience.",
        images: [],
      },
      {
        label: "The Storefront",
        heading: "A customer-facing catalog built with React and Vite",
        description:
          "The storefront is a React 18 application built on Vite with Tailwind CSS and React Router v6. Customers can browse the full product catalog organized by category, search for specific items, filter by availability, and view product variants with different sizes and colors. The shopping cart supports variant selection and quantity adjustments. Registered users can save delivery addresses, view order history, and maintain a wishlist. Order tracking is available through a unique order number — no account required.",
        images: [
          {
            src: "/projects/hardware-store/hardware-store-storefront.png",
            alt: "Hardware Store customer storefront",
          },
        ],
        imageBesideText: true,
      },
      {
        label: "The Admin Dashboard",
        heading: "Order fulfillment and inventory management for store staff",
        description:
          "The admin panel is a protected dashboard built with the same React + Vite stack, authenticated with JWT tokens. Store owners and staff can view a sales analytics dashboard with daily and monthly breakdowns, accept or reject incoming orders through a defined status workflow (pending → accepted → out for delivery → delivered), manage products including variants and bulk pricing tiers, organize categories, create staff accounts with role-based access, and generate sales reports. The system also handles automated SMS notifications through the Semaphore gateway — customers receive text updates at every order status change, and the admin gets alerted when new orders arrive.",
        images: [
          {
            src: "/projects/hardware-store/hardware-store-admin.png",
            alt: "Hardware Store admin dashboard",
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
