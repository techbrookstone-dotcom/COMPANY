import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero, About, Services, WhyUs, CTABanner, Contact, Footer, FAQ } from "@/components/Sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs /> 
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
