import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import HowItWorks from "@/components/HowItWorks";
import WhatsInside from "@/components/WhatsInside";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductSection />
        <HowItWorks />
        <WhatsInside />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
