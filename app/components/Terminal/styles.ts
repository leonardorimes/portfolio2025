import styled, { keyframes, css } from "styled-components";

export const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const TerminalWrapper = styled.div`
  background: #0f172a;
  border-radius: 10px;
  padding: 20px;
  color: #e2e8f0;
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 850px;
  height: 350px;

  /* Tablet */
  @media (max-width: 768px) {
    font-size: 1.1rem;
    height: 300px;
    padding: 15px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    height: 250px;
    padding: 10px;
  }
`;

export const Centralizar = styled.div`
  display: flex;
  justify-content: center;
  margin: -80px;

  /* Ajuste para mobile: Reduz a margem negativa para evitar quebras de layout */
  @media (max-width: 768px) {
    margin: -40px 0 0 0; /* Deslocamento vertical menor */
  }

  @media (max-width: 480px) {
    margin: -20px 0 0 0;
  }
`;

export const TopBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;

  /* Tablet/Mobile */
  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 15px;
  }
`;

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.color};

  /* Tablet/Mobile */
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const Line = styled.pre<{ animated?: boolean }>`
  margin: 0;
  line-height: 1.6;
  overflow: hidden;
  white-space: nowrap;

  ${({ animated }) =>
    animated &&
    css`
      animation: ${typing} 1.2s steps(40, end) forwards;
      width: 0;
    `}

  .comment {
    color: #8b9bb4;
  }
  .import {
    color: #38bdf8;
  }
  .keyword {
    color: #facc15;
  }
  .var {
    color: #86efac;
  }
  .from {
    color: #f472b6;
  }
  .path {
    color: #94a3b8;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 18px;
  background: #e2e8f0;
  margin-left: 4px;
  animation: ${blink} 1s infinite;

  /* Tablet */
  @media (max-width: 768px) {
    width: 6px;
    height: 16px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 4px;
    height: 14px;
  }
`;
