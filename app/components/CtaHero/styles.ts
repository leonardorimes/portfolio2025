"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 800px;
  text-align: center;
  gap: 2rem;
  margin-top: 4rem;

  h1 {
    font-size: var(--title-size);
    line-height: 1.1;
    margin-bottom: 2px;
  }

  p {
    text-align: justify;
  }

  & a {
    text-decoration: none;
  }

  /* Botão WhatsApp */
  .contact {
    background-color: transparent;
    border: 2px solid #25d366;
    border-radius: 999px;
    padding: 0.3rem;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .contact a {
    display: block;
    background-color: #25d366;
    color: #fff;
    padding: 0.6rem 1.6rem;
    border-radius: 999px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .contact:hover {
    border-color: #1ebe5d;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.25);
  }

  .contact:hover a {
    background-color: #1ebe5d;
  }

  .contact:active {
    transform: translateY(0);
    box-shadow: none;
  }

  /* -------------------------------
        RESPONSIVIDADE
  -------------------------------- */

  /* Tablet */
  @media (max-width: 1024px) {
    width: 600px;
    gap: 1.6rem;
    font-size: 1.5rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    padding: 1rem;
    font-size: 1.5rem;

    gap: 1.4rem;

    .contact {
      padding: 0.25rem;
    }

    .contact a {
      padding: 0.5rem 1.2rem;
    }
  }
`;
