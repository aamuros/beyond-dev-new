import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Projects from "@/components/sections/projects";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-white shadow-xl rounded-b-[80px] overflow-hidden">
        {/* Hero (includes Logo Cloud) */}
        <section className="snap-section">
          <Hero />
        </section>

        {/* Pain Points */}
        <section className="snap-section snap-section--auto">
          <PainPoints />
        </section>

        {/* Process */}
        <section className="snap-section">
          <Process />
        </section>

        {/* Projects */}
        <section className="snap-section snap-section--auto">
          <Projects />
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
