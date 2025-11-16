import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  padding: 80px 20px;

  /* Mobile: Garante bom padding e margens */
  @media (max-width: 600px) {
    padding: 60px 15px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;

  /* Mobile: Ajusta o tamanho da fonte para melhor leitura */
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 40px;

  /* Mobile: Ajusta o tamanho da fonte */
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
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

export const CardWrapper = styled.a`
  display: block;
  background: white;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: left;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  }

  /* Mobile: Ajusta o padding do card */
  @media (max-width: 600px) {
    padding: 15px;
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
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 12px;

  /* Mobile: Ajusta o tamanho da fonte */
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Tag = styled.span`
  background: #eef2ff;
  color: #4338ca;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.75rem;

  /* Mobile: Ajusta o tamanho da tag */
  @media (max-width: 600px) {
    padding: 3px 8px;
    font-size: 0.7rem;
  }
`;
