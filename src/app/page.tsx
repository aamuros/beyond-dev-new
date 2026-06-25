import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import DashboardShowcase from "@/components/sections/dashboard-showcase";
import LogoCloud from "@/components/sections/logo-cloud";
import PainPoints from "@/components/sections/pain-points";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DashboardShowcase />
        <LogoCloud />
        <PainPoints />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
