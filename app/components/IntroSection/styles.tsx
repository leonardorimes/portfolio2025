"use client";

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  color: #ffffff;
  background-color: #27272a;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 42px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #d2d2d2;
  line-height: 1.6;
`;

export const Highlight = styled.span`
  color: #6ab3ff;
  font-weight: 600;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 450px;

  .bg-card {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000055;
    border: 1px solid #ffffff22;
    border-radius: 12px;
    top: 20px;
    left: 20px;
    z-index: 1;
  }

  .bg-card.rotated {
    top: 10px;
    left: 40px;
    transform: rotate(4deg);
    background: #00000033;
    z-index: 0;
  }

  .main-photo {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    z-index: 3;
  }
`;
