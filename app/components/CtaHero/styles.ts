"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 800px;
  text-align: center;

  h1 {
    margin-bottom: 1px;
  }
  p {
    text-align: justify;
  }

  & a {
    text-decoration: none;
  }
  .contact {
    background-color: transparent; /* mantém o "gap" visível */
    border: 2px solid #25d366; /* borda visível sempre */
    border-radius: 999px;
    padding: 0.3rem; /* 👈 espaço entre a borda e o fundo interno */
    display: inline-block;
    transition: all 0.3s ease;
  }

  .contact a {
    display: block;
    background-color: #25d366; /* fundo interno */
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
`;
