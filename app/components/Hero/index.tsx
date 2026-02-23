"use client";
import Image from "next/image";
import { Container, LogoWrapper } from "./styles";
import { useEffect, useState } from "react";
import CtaHero from "../CtaHero";

type ColorKey = "neon" | "azulPiscina" | "lilas" | "verdePiscina";

export default function Hero() {
  const [color, setColor] = useState<ColorKey>("neon");

  const colors: Record<ColorKey, string> = {
    neon: "#39FF14",
    azulPiscina: "#00FFFF",
    lilas: "#C77DFF",
    verdePiscina: "#00FFAA",
  };

  useEffect(() => {
    const colorKeys = Object.keys(colors) as ColorKey[];

    const interval = setInterval(() => {
      const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
      setColor(randomKey); // agora está 100% seguro
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>Oi! Eu sou o Leonardo</h1>
      <h2>Full Stack Developer</h2>
      <LogoWrapper>
        <div
          className="square"
          style={{
            backgroundColor: colors[color],
          }}
        />
        <Image
          src="/leonardopretoebranco.png"
          alt="Foto de Leonardo Rimes"
          className="img"
          fill
        />
      </LogoWrapper>
      <div className="border"> </div>
      <CtaHero />
    </Container>
  );
}
