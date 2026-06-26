import Link from "next/link";
import Logo from "@/components/layout/logo";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinkGroups = [
  {
    heading: "Systems",
    links: [
      { label: "Order Tracker", href: "#systems" },
      { label: "Booking System", href: "#systems" },
      { label: "Inventory Tracker", href: "#systems" },
      { label: "Customer Database", href: "#systems" },
      { label: "Admin Dashboard", href: "#systems" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "+63 917 123 4567", href: "tel:+639171234567", icon: "phone" },
      { label: "hello@beyonddev.ph", href: "mailto:hello@beyonddev.ph", icon: "mail" },
      { label: "Philippines", href: "#", icon: "map" },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "GitHub",
    href: "#",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function ContactIcon({ type }: { type: string }) {
  const className = "h-4 w-4 shrink-0 text-black";
  switch (type) {
    case "phone":
      return <Phone className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "map":
      return <MapPin className={className} />;
    default:
      return null;
  }
}

const linkClasses =
  "block w-fit rounded transition-colors outline-none focus-visible:outline-focus px-1.5 -mx-1.5 text-xs font-medium text-black hover:text-gray-500 text-left disabled:opacity-0";

export default function Footer() {
  return (
    <footer className="relative pb-32 mt-16" data-footer="true">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-16">
          <div>
            <Link
              href="/"
              aria-label="BeyondDev"
              className="block w-fit outline-none focus-visible:outline-focus rounded text-black p-2 -m-2 hover:text-gray-500 transition"
            >
              <Logo className="h-5 w-auto" />
            </Link>
            <div className="mt-3.5 -mb-1">
              <p className="text-xs text-gray-500 leading-relaxed">
                Helping local Filipino businesses replace messy manual workflows
                with simple, working software systems.
              </p>
            </div>
          </div>

          <ul
            role="list"
            className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10"
          >
            {footerLinkGroups.map((group) => (
              <li key={group.heading}>
                <p style={{ marginTop: "-0.5625rem" }}>
                  <span
                    className="block w-fit rounded transition-colors outline-none focus-visible:outline-focus px-1.5 -mx-1.5 text-[0.6875rem] font-medium text-gray-500"
                    style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                  >
                    {group.heading}
                  </span>
                </p>
                <ul role="list" className="mt-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {"icon" in link && link.icon ? (
                        <Link
                          href={link.href}
                          className={linkClasses}
                          style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <ContactIcon type={link.icon} />
                            {link.label}
                          </span>
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          className={linkClasses}
                          style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <p style={{ marginTop: "-0.5625rem" }}>
                <span
                  className="block w-fit rounded transition-colors outline-none focus-visible:outline-focus px-1.5 -mx-1.5 text-[0.6875rem] font-medium text-gray-500"
                  style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                >
                  Socials
                </span>
              </p>
              <ul role="list" className="mt-1">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                      style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p style={{ marginTop: "-0.5625rem" }}>
                <span
                  className="block w-fit rounded transition-colors outline-none focus-visible:outline-focus px-1.5 -mx-1.5 text-[0.6875rem] font-medium text-gray-500"
                  style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                >
                  Legal
                </span>
              </p>
              <ul role="list" className="mt-1">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={linkClasses}
                      style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <p
                    className="text-xs text-gray-500"
                    style={{ paddingTop: "0.5625rem", paddingBottom: "0.5625rem" }}
                  >
                    &copy; {new Date().getFullYear()} BeyondDev
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
