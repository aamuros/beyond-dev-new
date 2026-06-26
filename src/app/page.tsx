import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import SimpleSystemsSection from "@/components/sections/simple-systems-section";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-white shadow-xl rounded-b-[80px] overflow-hidden">
        <section className="snap-section">
          <Hero />
        </section>

        <section className="snap-section">
          <SimpleSystemsSection />
        </section>

        {/* Pain Points */}
        <section className="snap-section snap-section--auto">
          <PainPoints />
        </section>

        {/* Process */}
        <section className="snap-section">
          <Process />
        </section>

        {/* FAQ */}
        <section className="snap-section snap-section--auto">
          <Faq />
        </section>

        {/* Contact */}
        <section className="snap-section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
