import { lazy, Suspense } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = lazy(() =>
  import("@/components/About").then((m) => ({ default: m.About }))
);

const Services = lazy(() =>
  import("@/components/Services").then((m) => ({ default: m.Services }))
);

const WhyUs = lazy(() =>
  import("@/components/WhyUs").then((m) => ({ default: m.WhyUs }))
);
const Testimonials = lazy(() =>
  import("@/components/Testimonials").then((m) => ({ default: m.Testimonials }))
);

const FAQ = lazy(() =>
  import("@/components/FAQ").then((m) => ({ default: m.FAQ }))
);

const CTABanner = lazy(() =>
  import("@/components/CTABanner").then((m) => ({ default: m.CTABanner }))
);

const Contact = lazy(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact }))
);

const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);

const FloatingButtons = lazy(() =>
  import("@/components/FloatingButtons").then((m) => ({
    default: m.FloatingButtons,
  }))
);

function SectionLoader() {
  return <div className="h-20" />;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
          <Services />
          <WhyUs /> 
          <Testimonials /> 
          <FAQ />
          <CTABanner />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <FloatingButtons />
      </Suspense>
    </div>
  );
}