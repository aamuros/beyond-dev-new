import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="global-section flex flex-col gap-12">
      <Container size="sm">
        <SectionHeading
          badge="Testimonials"
          badgeVariant="pill"
          title="What Our Customers Are Saying"
          description="Real businesses, real results. See how simple systems transformed their daily operations."
        />
      </Container>
    </section>
  );
}
