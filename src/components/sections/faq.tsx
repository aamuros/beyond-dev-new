"use client";

import Container from "@/components/ui/container";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with small and medium-sized businesses in the Philippines — from restaurants and retail shops to service providers and professional firms. If you're running a business with manual processes that slow you down, we can help.",
  },
  {
    question: "How long does it take to build a system?",
    answer:
      "Our standard delivery is 14 days from the time requirements are approved. For more complex systems, we'll give you a clear timeline upfront. We don't believe in keeping you waiting months for results.",
  },
  {
    question: "Do I need technical knowledge to use the system?",
    answer:
      "Not at all. We build systems that are designed for non-technical users. If you can use a smartphone, you can use our systems. We also provide training and documentation to get your team up to speed.",
  },
  {
    question: "What happens after the system is delivered?",
    answer:
      "We offer optional monthly support that includes maintenance, hosting, backups, bug fixes, and improvements as your business grows. You're never left on your own — but there's no lock-in contract either.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every business is different, so we don't do one-size-fits-all pricing. After our free process checkup, we'll give you a clear, fixed quote — no hidden fees, no surprises. Most starter systems are affordable for small businesses.",
  },
  {
    question: "Can you integrate with tools we already use?",
    answer:
      "Yes. We can connect your new system with tools like Google Sheets, Messenger, email, payment gateways, and more. The goal is to work with your existing workflow, not replace everything at once.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We offer revisions during the build process to make sure the system matches your needs. If something isn't right, we fix it. Our goal is your satisfaction — we'll work with you until it's right.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. We follow industry best practices for data security, including encrypted connections, secure hosting, regular backups, and access controls. Your business data is treated with the utmost care.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="global-section">
      <Container size="xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[repeat(20,1fr)] lg:gap-8">
          <div className="flex flex-col items-start gap-3 mb-12 lg:sticky lg:top-[20vh] lg:col-span-8 lg:mb-0">
            <span className="pill-tag">FAQ</span>
            <h2 className="section-heading-title text-4xl lg:text-[3.5rem] min-[1441px]:text-[5rem] text-foreground text-left">
              Questions?
              <br />
              Answers.
            </h2>
          </div>

          <div className="lg:col-span-12 lg:col-start-9">
            <AccordionRoot type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </div>
        </div>
      </Container>
    </section>
  );
}
