import { Suspense, lazy } from "react";

const Hero = lazy(() =>
  import("./Hero").then((module) => ({ default: module.Hero }))
);

const About = lazy(() =>
  import("./About").then((module) => ({ default: module.About }))
);

const Services = lazy(() =>
  import("./Services").then((module) => ({ default: module.Services }))
);

const WhyUs = lazy(() =>
  import("./WhyUs").then((module) => ({ default: module.WhyUs }))
);

const FAQ = lazy(() =>
  import("./FAQ").then((module) => ({ default: module.FAQ }))
);

const Contact = lazy(() =>
  import("./Contact").then((module) => ({ default: module.Contact }))
);

const CTA = lazy(() =>
  import("./CTA").then((module) => ({ default: module.CTABanner }))
);

const Footer = lazy(() =>
  import("./Footer").then((module) => ({ default: module.Footer }))
);

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}

export function Sections() {
  return (
    <Suspense fallback={<SectionLoader />}>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </Suspense>
  );
}

export default Sections;