import CtaHero from "./components/CtaHero";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
      </div>

      <IntroSection />
    </>
  );
}
