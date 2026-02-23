import { Container } from "./styles/global";

import Hero from "./components/Hero";
import Work from "./components/Work";

import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}
