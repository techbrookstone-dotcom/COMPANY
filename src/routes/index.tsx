import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero, About, Services, WhyUs, CTABanner, Contact, Footer } from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brook Stone Digital Solutions — Smart Digital Marketing" },
      { name: "description", content: "Grow your business with creative strategies and data-driven digital marketing solutions from Brook Stone." },
      { property: "og:title", content: "Brook Stone Digital Solutions" },
      { property: "og:description", content: "Smart digital marketing for ambitious brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
