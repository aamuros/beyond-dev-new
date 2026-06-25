"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    label: "Call or Text",
    value: "+63 917 123 4567",
    href: "tel:+639171234567",
  },
  {
    icon: MessageCircle,
    label: "Messenger",
    value: "m.me/beyonddev",
    href: "https://m.me/beyonddev",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@beyonddev.ph",
    href: "mailto:hello@beyonddev.ph",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <Container size="lg">
        <SectionHeading
          badge="Get Started"
          title="Book Your Free Business Process Checkup"
          description="Tell us about your business and the manual process that's giving you the most headaches. We'll show you what's possible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted max-w-md">
                  We&apos;ve received your message. We&apos;ll get back to you
                  within 24 hours to schedule your free checkup.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="business"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Business Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone / Viber / Messenger *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      required
                      className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+63 917 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="process"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    What manual process do you want to fix? *
                  </label>
                  <textarea
                    id="process"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border px-4 py-3 text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="e.g., I track all my orders in a notebook and payments in Messenger. It's hard to know what's been paid and what hasn't..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="h-5 w-5" />
                  Book My Free Checkup
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl bg-surface border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {method.label}
                      </p>
                      <p className="text-sm text-muted">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Response Time
                </h4>
                <p className="text-sm text-muted">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
