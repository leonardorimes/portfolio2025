"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import WorkCard from "./WorkCard";
import { Section, Title, Subtitle, Grid } from "./styles";
import { WorkProject } from "./Work.types";
import { Container } from "@/app/styles/global";
export default function WorkSection() {
  const projects: WorkProject[] = [
    {
      id: 2,
      title: "VLK Turismo",
      subtitle: "",
      date: "Dez 2024",
      category: "Institucional",
      description:
        "Website institucional completo para agência de viagens, desenvolvido em React e Tailwind. Inclui apresentação de destinos nacionais e internacionais, carrosséis, seções estruturadas, depoimentos e layout totalmente responsivo, oferecendo uma experiência moderna e orientada à conversão.",
      image: "/projects/turismo.png",
      url: "https://vlkturismo.com.br/",
      tags: ["React", "Tailwind"],
    },
    {
      id: 3,
      title: "Bravi Engenharia",
      subtitle: "",
      date: "Sept 2020",
      category: "SaaS, WYSIWYG",
      description:
        "Website institucional desenvolvido em WordPress + Elementor com melhorias em performance, responsividade e um sistema otimizado de captação de leads para novos clientes.",
      image: "/projects/bravi.png",
      url: "https://braviengenharia.com.br",
      tags: ["Wordpress", "Elementor", "Javascript"],
    },
    {
      id: 4,
      title: "Comunidade Terra Ventos",
      subtitle: "",
      date: "2025",
      category: "Website",
      description:
        "Landing page institucional desenvolvida com Next.js, TypeScript e TailwindCSS. O projeto entrega uma interface moderna, responsiva e otimizada, reforçando a identidade da comunidade e garantindo navegação fluida e de alta performance.",
      image: "/projects/terraventos.png",
      url: "https://comunidade.terraventos.com.br/",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      id: 5,
      title: "Bolsim",
      subtitle: "",
      date: "2026",
      category: "Android App",
      description:
        "O Bolsim é um app criado para ajudar você a organizar sua vida financeira de forma simples, rápida e prática. Com ele, você controla suas despesas mensais, registra seus gastos do dia a dia e acompanha suas categorias para entender exatamente para onde seu dinheiro está indo.",
      image: "/projects/bolsim.png",
      url: "https://play.google.com/store/apps/details?id=com.leonardo.bolsim",
      tags: ["reactnative", "expo", "supabase"],
    },
        {
      id: 6,
      title: "GestorPro",
      subtitle: "",
      date: "2026",
      category: "Android App",
      description: "Sistema web para gestão de clientes e serviços, criado para simular um produto real e aplicado com boas práticas de frontend e backend, focando em código limpo escalabilidade e experiência do usuário.",
        image: "/projects/gestorPro.png",
      url: "https://gestorpro.leonardorimes.dev/",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    },
  ];
  const hasOddCount = projects.length % 2 === 1;
  const [highlightIndex, setHighlightIndex] = useState(
    hasOddCount ? projects.length - 1 : 0
  );
  const cardRefs = useRef<Map<number, HTMLAnchorElement>>(new Map());
  const prevPositions = useRef<Map<number, DOMRect>>(new Map());
  const shouldAnimate = useRef(false);
  const nextChangeAt = useRef<number | null>(null);

  const capturePositionsForFlip = () => {
    const currentPositions = new Map<number, DOMRect>();
    cardRefs.current.forEach((el, id) => {
      currentPositions.set(id, el.getBoundingClientRect());
    });
    prevPositions.current = currentPositions;
    shouldAnimate.current = true;
  };

  useEffect(() => {
    if (!hasOddCount) return;

    if (nextChangeAt.current === null) {
      nextChangeAt.current = Date.now() + 20000;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      if (nextChangeAt.current === null) return;
      if (now < nextChangeAt.current) return;

      capturePositionsForFlip();
      setHighlightIndex((prev) => (prev + 1) % projects.length);
      nextChangeAt.current = now + 20000;
    }, 250);

    return () => clearInterval(interval);
  }, [hasOddCount, projects.length]);

  useLayoutEffect(() => {
    if (!shouldAnimate.current) return;

    const nextPositions = new Map<number, DOMRect>();
    cardRefs.current.forEach((el, id) => {
      nextPositions.set(id, el.getBoundingClientRect());
    });

    cardRefs.current.forEach((el, id) => {
      const prevBox = prevPositions.current.get(id);
      const nextBox = nextPositions.get(id);
      if (!prevBox || !nextBox) return;

      const dx = prevBox.left - nextBox.left;
      const dy = prevBox.top - nextBox.top;

      if (dx !== 0 || dy !== 0) {
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)` },
            { transform: "translate(0, 0)" },
          ],
          { duration: 600, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" }
        );
      }
    });

    shouldAnimate.current = false;
  }, [highlightIndex]);

  const orderedProjects = useMemo(() => {
    if (!hasOddCount) return projects;

    const highlighted = projects[highlightIndex];
    const rest = projects.filter((_, index) => index !== highlightIndex);
    return [highlighted, ...rest];
  }, [hasOddCount, highlightIndex, projects]);

  const setCardRef = (id: number) => (el: HTMLAnchorElement | null) => {
    if (el) {
      cardRefs.current.set(id, el);
    } else {
      cardRefs.current.delete(id);
    }
  };

  return (
    <Container>
      <Section id="work">
        <Title>Meus Projetos</Title>
        <Subtitle>Projetos que criei utilizando várias tecnologias</Subtitle>

        <Grid>
          {orderedProjects.map((p, index) => (
            <WorkCard
              key={p.id}
              project={p}
              ref={setCardRef(p.id)}
              className={hasOddCount && index === 0 ? "span-2 highlight" : ""}
              isActive={hasOddCount ? index === 0 : undefined}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                if (!hasOddCount) return;
                if (index !== 0) {
                  event.preventDefault();
                  capturePositionsForFlip();
                  setHighlightIndex(
                    projects.findIndex((proj) => proj.id === p.id)
                  );
                }
              }}
            />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
