"use client";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 4rem 2rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;
  align-items: flex-start;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    background: rgba(0, 0, 0, 0.05);
    padding: 0.6rem 1.2rem;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);

    .pulse {
      width: 10px;
      height: 10px;
      background-color: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      animation: pulse-green 2s infinite;
    }
  }

  @keyframes pulse-green {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
  }

  h1 {
    font-size: clamp(3.5rem, 5vw, 6rem);
    line-height: 1.1;
    font-weight: 800;
    color: #111;
    letter-spacing: -1px;
    margin: 0;

    span {
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 600;
    color: #4b5563;
    margin: 0;
  }

  p {
    font-size: 1.8rem;
    color: #6b7280;
    line-height: 1.6;
    max-width: 500px;
    margin-top: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  z-index: 1;
  order: -1; /* No mobile a foto aparece primeiro */

  .glow-orb {
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    animation: float 6s ease-in-out infinite;
    transition: background-color 2s ease;
    z-index: 0;
  }

  .img-container {
    position: relative;
    width: 300px;
    height: 380px;
    border-radius: 2rem;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    animation: float 6s ease-in-out infinite;
    animation-delay: 0.5s;

    .img {
      object-fit: cover !important;
      object-position: top !important;
      transform-origin: top center;
      transform: scale(1.15); /* Zoom inicial */
      transition: transform 0.5s ease;
      
      &:hover {
        transform: scale(1.22); /* Mais zoom no hover */
      }
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  @media (min-width: 1024px) {
    min-height: 500px;
    order: 0; /* No desktop volta para a ordem natural (direita) */
    
    .glow-orb {
      width: 460px;
      height: 460px;
    }
    .img-container {
      width: 380px;
      height: 480px;
    }
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  .border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: min(800px, 90%);
    margin-bottom: 4rem;
  }
`;
