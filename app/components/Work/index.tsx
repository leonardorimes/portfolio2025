"use client";

import WorkCard from "./WorkCard";
import { Section, Title, Subtitle, Grid } from "./styles";
import { WorkProject } from "./Work.types";
import { Container } from "@/app/styles/global";

export default function WorkSection() {
  const projects: WorkProject[] = [
    {
      id: 6,
      title: "GestorPro",
      subtitle: "",
      date: "2026",
      category: "Sistema Web",
      description: "Sistema web para gestão de clientes e serviços, criado para simular um produto real e aplicado com boas práticas de frontend e backend, focando em código limpo, escalabilidade e experiência do usuário.",
      image: "/projects/gestorPro.png",
      url: "https://gestorpro.leonardorimes.dev/",
      tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    },
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
      tags: ["React Native", "Expo", "Supabase"],
    },
    {
      id: 3,
      title: "Bravi Engenharia",
      subtitle: "",
      date: "Set 2020",
      category: "Institucional",
      description:
        "Website institucional desenvolvido em WordPress + Elementor com melhorias em performance, responsividade e um sistema otimizado de captação de leads para novos clientes.",
      image: "/projects/bravi.png",
      url: "https://braviengenharia.com.br",
      tags: ["Wordpress", "Elementor", "Javascript"],
    },
  ];

  return (
    <Container>
      <Section id="work">
        <Title>Projetos em Destaque</Title>
        <Subtitle>
          Uma seleção dos meus melhores trabalhos, focados em resolver problemas reais 
          através de design moderno e código de alta qualidade.
        </Subtitle>

        <Grid>
          {projects.map((p) => (
            <WorkCard key={p.id} project={p} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
