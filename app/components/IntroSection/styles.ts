"use client";

import styled from "styled-components";

/* ============================================
 * SEÇÃO PRINCIPAL (Fundo e Padding)
 * ============================================ */
export const Container = styled.section`
  width: 100%; /* Garante 100% da largura para a cor de fundo */
  padding: 100px 0; /* Padding vertical, zero lateral */

  color: #ffffff;
  background-color: #27272a;

  /* Tablet */
  @media (max-width: 900px) {
    padding: 70px 0;
  }

  /* Mobile real */
  @media (max-width: 600px) {
    padding: 50px 0;
  }
`;

//Gerencia o layout interno (flexbox) */
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  /* Limita a largura do conteúdo e centraliza-o na tela */
  max-width: 1400px;
  /* Padding lateral que você queria aplicar ao conteúdo */
  padding: 0 80px;
  margin: 0 auto;

  /* Tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 0 40px;
  }

  /* Mobile real */
  @media (max-width: 600px) {
    gap: 30px;
    padding: 0 20px;
  }
`;

/* ============================================
 * TEXTOS
 * ============================================ */
export const TextBlock = styled.div`
  max-width: 600px;
  flex-shrink: 1;

  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: var(--title-size);
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #d2d2d2;
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 17px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.span`
  color: #6ab3ff;
  font-weight: 600;
`;

/* ============================================
 * FOTO + MOLDURAS (Sem alterações)
 * ============================================ */
export const PhotoWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  min-width: 300px;
  aspect-ratio: 380 / 480;
  margin: 0 auto;

  .bg-card,
  .bg-card.rotated,
  .main-photo {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  .bg-card {
    background: #00000055;
    border: 1px solid #ffffff22;
    top: 22px;
    left: 22px;
  }

  .bg-card.rotated {
    top: 12px;
    left: 42px;
    transform: rotate(4deg);
    background: #00000033;
  }

  .main-photo {
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    max-width: 300px;
    width: 100%;
    aspect-ratio: 300 / 380;
    flex-shrink: 1;

    .bg-card {
      top: 14px;
      left: 14px;
    }

    .bg-card.rotated {
      top: 6px;
      left: 24px;
      transform: rotate(3deg);
    }
  }

  @media (max-width: 600px) {
    max-width: 240px;
    aspect-ratio: 240 / 320;

    .bg-card {
      top: 10px;
      left: 10px;
    }

    .bg-card.rotated {
      top: 4px;
      left: 20px;
    }
  }
`;
