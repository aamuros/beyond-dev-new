import Footer from "@/components/layout/footer";
import PageIntroOverlay from "@/components/layout/page-intro-overlay";
import Hero from "@/components/sections/hero";
import SimpleSystemsSection from "@/components/sections/simple-systems-section";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09637E]">
      <PageIntroOverlay />

      {/* 
        True footer back layer.
        It is fixed behind the foreground page.
        It does not participate in the hero transition.
      */}
      <div className="fixed inset-x-0 bottom-0 z-0 h-[70vh] overflow-hidden bg-[#09637E]">
        <Footer />
      </div>

      {/* 
        Foreground page layer.
        This is above the footer.
      */}
      <div className="relative z-10">
        {/* Hero backplate zone */}
        <section className="relative h-[200vh] bg-black">
          <div className="sticky top-0 h-screen overflow-hidden bg-black">
            <Hero />
          </div>
        </section>

        {/* 
          One continuous white page panel.
          Top rounded corners reveal black hero.
          Bottom rounded corners reveal fixed teal footer.
          Bottom margin creates reveal space for footer.
        */}
        <main className="relative -mt-[100vh] mb-[70vh] overflow-hidden rounded-t-[48px] rounded-b-[80px] bg-white shadow-xl">
          <section className="snap-section">
            <SimpleSystemsSection />
          </section>

          <section className="snap-section snap-section--auto">
            <PainPoints />
          </section>

          <section className="snap-section">
            <Process />
          </section>

          <section className="snap-section snap-section--auto">
            <Faq />
          </section>

          <section className="snap-section">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}
