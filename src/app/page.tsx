import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
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
        <Divider variant={1} bg="dark" />
        <ProductSection />
        <Divider variant={2} bg="cream" />
        <HowItWorks />
        <Divider variant={3} bg="dark" />
        <WhatsInside />
        <Divider variant={1} bg="cream" />
        <Pricing />
        <Divider variant={2} bg="dark" />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
