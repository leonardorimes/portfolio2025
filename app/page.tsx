import { Container } from "./styles/global";
import CtaHero from "./components/CtaHero";
import Hero from "./components/Hero";
import Work from "./components/Work";

import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
      </Container>

      <IntroSection />
      <Terminal />
      <Work />
    </>
  );
}
