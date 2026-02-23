"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  :root {
    --title-size: 5.6rem;
    --subtitle-size: 3.6rem;
  }

  @media (max-width: 600px) {
    :root {
      --title-size: 2.5rem;
      --subtitle-size: 1.6rem;
    }
  }

  *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


  body {
    background-color: #f0f0f0;
    color: #333;

    font-size: 2rem;
    
   font-family: "Varela Round", sans-serif;
  }

`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;
