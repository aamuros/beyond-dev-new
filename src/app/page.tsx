import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero — full viewport, no navbar visible here */}
        <section className="snap-section">
          <Hero />
        </section>

        {/* Logo Cloud */}
        <section className="snap-section">
          <LogoCloud />
        </section>

        {/* Pain Points */}
        <section className="snap-section">
          <PainPoints />
        </section>

        {/* Process */}
        <section className="snap-section">
          <Process />
        </section>

        {/* Contact */}
        <section className="snap-section">
          <Contact />
        </section>
      </main>

      {/* Footer flows after snap sections */}
      <section className="snap-section snap-section--footer">
        <Footer />
      </section>
    </>
  );
}
