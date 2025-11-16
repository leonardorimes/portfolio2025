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
    margin-bottom: 1px;
  }

  .border {
    border-bottom: 0.5px solid rgba(106, 105, 105, 0.5);
    top: 605px;
    position: absolute;
    width: 60%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* sombra */
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  overflow: hidden;
  z-index: 1; /* camada superior */
  margin: 5rem;

  .square {
    width: 400px;
    height: 400px;
    background-color: red;
    transform: rotate(120deg);
    position: absolute;

    z-index: 0;
    top: 100px;
  }
`;
