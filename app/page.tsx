import HeaderWrapper from "./components/HeaderWrapper";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeepDive from "./components/DeepDive";
import UseCases from "./components/UseCases";
import CreatorShowcase from "./components/CreatorShowcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PromoPopup from "./components/PromoPopup";
import VsLetterboxdSection from "./components/VsLetterboxdSection";

export default function Home() {
  return (
    <main>
      <HeaderWrapper />
      <Hero />
      <Features />
      <VsLetterboxdSection />
      <DeepDive />
      <UseCases />
      <CreatorShowcase />
      <CTA />
      <Footer />
      <PromoPopup />
    </main>
  );
}
