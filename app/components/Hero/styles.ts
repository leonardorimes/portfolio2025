"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  z-index: 1; /* camada superior */

  .square {
    width: 320px;
    height: 320px;
    background-color: red;
    transform: rotate(120deg);
    position: absolute;
    z-index: 0;
    top: 100px;
  }
`;
