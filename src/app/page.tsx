import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import SimpleSystemsSection from "@/components/sections/simple-systems-section";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative bg-black">
      <div className="relative h-[135vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          <Hero />
        </div>
      </div>

      <main className="relative z-20 -mt-[35vh] overflow-hidden rounded-t-[48px] bg-white shadow-xl">
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

      <div className="relative bg-[#09637E]">
        <Footer />
      </div>
    </div>
  );
}
