import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeepDive from "./components/DeepDive";
import UseCases from "./components/UseCases";
import CreatorShowcase from "./components/CreatorShowcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <Hero />
      <Features />
      <DeepDive />
      <UseCases />
      <CreatorShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
