import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import LogoCloud from "@/components/sections/logo-cloud";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <PainPoints />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
