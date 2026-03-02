"use client";

import Image from "next/image";
import {
  Container,
  TextBlock,
  Title,
  Paragraph,
  Highlight,
  PhotoWrapper,
  ContentWrapper,
} from "./styles";

export default function IntroSection() {
  return (
    <Container id="do">
      <ContentWrapper>
        <TextBlock>
          <Title>
            Mas antes de tudo…
            <br />
            quem sou eu? Vamos{"\u00A0"}lá.
          </Title>

          <Paragraph>Meu nome é Leonardo e sou Full Stack Developer</Paragraph>

          <Paragraph>
            Ao longo da minha carreira, atuei em projetos para startups e
            empresas de diferentes setores, incluindo construção civil, mercado
            imobiliário, turismo e educação, desenvolvendo aplicações SaaS,
            aplicativos mobile, sites e diversas soluções personalizadas.
          </Paragraph>

          <Paragraph>
            Sou especializado em <Highlight>Nextjs</Highlight>, um framework
            moderno e robusto que utilizo para desenvolver aplicações completas
            no lado do servidor e do cliente.
          </Paragraph>

          <Paragraph>
            No front-end, trabalho com <Highlight>React</Highlight>,{" "}
            <Highlight>Angular</Highlight> e <Highlight>Next.js</Highlight> para
            criar interfaces modernas e bem estruturadas; no mobile, desenvolvo
            com{" "}
            <Highlight>React Native</Highlight>, entregando aplicativos com
            experiência nativa; e no back-end utilizo{" "}
            <Highlight>Node.js</Highlight>, <Highlight>NestJS</Highlight> e
            banco de dados relacionais com
            <Highlight>SQL</Highlight> para construir APIs escaláveis, seguras e
            de alta performance.
          </Paragraph>
        </TextBlock>

        <PhotoWrapper>
          {/* camada 1 (fundo) */}
          <div className="bg-card" />

          {/* camada 2 (fundo) */}
          <div className="bg-card rotated" />

          {/* foto principal */}
          <Image
            src="/leonardo3.png"
            alt="Rulian photo"
            width={340}
            height={430}
            className="main-photo"
          />
        </PhotoWrapper>
      </ContentWrapper>
    </Container>
  );
}
