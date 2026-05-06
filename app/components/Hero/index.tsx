"use client";
import Image from "next/image";
import { Wrapper, Content, TextContent, LogoWrapper, BottomSection } from "./styles";
import { useEffect, useState } from "react";
import CtaHero from "../CtaHero";

type ColorKey = "blue" | "purple" | "teal" | "indigo";

export default function Hero() {
  const [color, setColor] = useState<ColorKey>("blue");

  const colors: Record<ColorKey, string> = {
    blue: "#3b82f6",
    purple: "#8b5cf6",
    teal: "#14b8a6",
    indigo: "#4f46e5",
  };

  useEffect(() => {
    const colorKeys = Object.keys(colors) as ColorKey[];

    const interval = setInterval(() => {
      setColor((prev) => {
        let newColor = prev;
        while (newColor === prev) {
          newColor = colorKeys[Math.floor(Math.random() * colorKeys.length)];
        }
        return newColor;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Content>
        <TextContent>
          <div className="badge">
            <span className="pulse"></span>
            Disponível para novas oportunidades
          </div>
          <h1>
            Olá, eu sou<br />
            <span>Leonardo Rimes</span>
          </h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p>
            Construindo aplicações web modernas, escaláveis e focadas em proporcionar a melhor
            experiência ao usuário. Transformo ideias complexas em soluções
            elegantes e eficientes.
          </p>
        </TextContent>

        <LogoWrapper>
          <div
            className="glow-orb"
            style={{
              backgroundColor: colors[color],
            }}
          />
          <div className="img-container">
            <Image
              src="/leonardopretoebranco.png"
              alt="Foto de Leonardo Rimes"
              className="img"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </LogoWrapper>
      </Content>

      <BottomSection>
        <div className="border"></div>
        <CtaHero />
      </BottomSection>
    </Wrapper>
  );
}
