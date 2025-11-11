"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;  
     padding: 2rem; 
  }
`;
