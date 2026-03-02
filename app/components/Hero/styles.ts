"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
  padding-top: 2rem;

  h1 {
    font-size: var(--title-size);
    line-height: 1.1;
    margin-bottom: 1px;
  }

  h2 {
    font-size: var(--subtitle-size);
    line-height: 1.2;
  }

  .border {
    border-bottom: 0.5px solid rgba(106, 105, 105, 0.5);
    position: relative;
    width: min(680px, 80%);
    margin: -4.8rem auto 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* sombra */
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 540px;
  overflow: hidden;
  z-index: 1; /* camada superior */
  margin: 5rem;

  .square {
    width: 480px;
    height: 480px;
    background-color: red;
    transform: rotate(120deg);
    position: absolute;

    z-index: 0;
    top: 120px;
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 340px;
    margin: 3rem 0 2rem;

    .square {
      width: 300px;
      height: 300px;
      top: 80px;
    }
  }
`;
