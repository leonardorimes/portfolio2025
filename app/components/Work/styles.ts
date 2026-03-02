import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 80px 20px;

  /* Mobile: Garante bom padding e margens */
  @media (max-width: 600px) {
    padding: 60px 15px;
  }
`;

export const Title = styled.h2`
  font-size: var(--title-size);
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: var(--subtitle-size);
  line-height: 1.3;
  margin-bottom: 40px;
`;

// ------------------------------------------------------------------

export const Grid = styled.div`
  display: grid;
  gap: 30px;
  /* Desktop Padrão: 2 colunas */
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;

  /* Tablet */
  @media (max-width: 900px) {
    gap: 20px;
  }

  /* 🎯 Mobile: Muda para 1 coluna (coloca um embaixo do outro) */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Força 1 coluna */
    gap: 20px;
  }
`;

const highlightPulse = keyframes`
  from {
    transform: translateY(6px);
    opacity: 0.7;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CardWrapper = styled.a`
  display: block;
  background: white;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  text-align: left;
  will-change: transform;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  }

  /* Mobile: Ajusta o padding do card */
  @media (max-width: 600px) {
    padding: 15px;
  }

  &.span-2 {
    grid-column: 1 / -1;
  }

  &.highlight {
    animation: ${highlightPulse} 600ms ease;
  }

  &[data-active="false"] {
    opacity: 0.9;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Meta = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 8px;

  /* Mobile: Ajusta o tamanho da fonte */
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;

  /* Mobile: Ajusta o tamanho da fonte */
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  color: #475569;
  margin-bottom: 12px;

  ${CardWrapper}[data-active="true"] & {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  /* Mobile: Ajusta o tamanho da fonte */
  @media (max-width: 600px) {
    font-size: 1.2rem;

    ${CardWrapper}[data-active="true"] & {
      font-size: 1.3rem;
    }
  }
`;

export const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const OpenButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  transform: translateX(0);
  width: fit-content;
  background: #f8fafc;
  color: #0f172a;
  border: 2px solid #111827;
  border-radius: 16px;
  padding: 0.8rem 1.4rem;
  font-size: 1.4rem;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;
  box-shadow: 4px 4px 0 #111827;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 6px 6px 0 #111827;
    background: #ffffff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 18px;
    width: 14px;
    height: 14px;
    background: #f8fafc;
    border-left: 2px solid #111827;
    border-bottom: 2px solid #111827;
    transform: rotate(45deg);
  }
`;

export const Tag = styled.span`
  background: #eef2ff;
  color: #4338ca;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 1rem;

  /* Mobile: Ajusta o tamanho da tag */
  @media (max-width: 600px) {
    padding: 3px 8px;
    font-size: 0.7rem;
  }
`;
