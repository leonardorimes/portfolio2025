import React from "react";
import { Container } from "./styles";
import Link from "next/link";

export default function CtaHero() {
  return (
    <Container>
      <h1>
        Pronto para criar algo novo?
        <br /> Eu te ajudo a construir.
      </h1>
      <p>
        Seja para tirar uma ideia do papel ou para fortalecer a equipe da sua
        empresa, minha missão é evitar desperdício de tempo e recursos. Atuo
        tanto no desenvolvimento de projetos quanto na integração com times
        existentes, garantindo entrega eficiente, clara e dentro do prazo.
      </p>
      <div className="contact">
        <Link
          href="https://wa.me/5522992724146?text=Olá!%20Vim%20através%20do%20seu%20site.%20Podemos%20conversar?"
          target="_blank"
        >
          💬 Entre em contato agora mesmo!
        </Link>
      </div>
    </Container>
  );
}
