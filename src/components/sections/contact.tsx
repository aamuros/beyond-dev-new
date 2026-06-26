import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <Container size="lg">
        <SectionHeading
          badge="Get Started"
          badgeVariant="pill"
          title="Book Your Free Business Process Checkup"
          description="Tell us about your business and the manual process that's giving you the most headaches. We'll show you what's possible."
          titleClassName="max-w-lg"
          descriptionClassName="max-w-md"
        />
      </Container>
    </section>
  );
}
