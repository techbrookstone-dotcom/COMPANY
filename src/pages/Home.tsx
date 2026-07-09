import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
