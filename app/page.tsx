import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DeepDive from "./components/DeepDive";
import UseCases from "./components/UseCases";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <DeepDive />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
