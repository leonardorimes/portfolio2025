"use client";

import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  gap: 2rem;
  position: relative;

  .logo {
    flex: 1;
  }

  & a {
    text-decoration: none;
    color: #6b6b6b;
  }

  /* DESKTOP MENU */
  .menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* BOTÃO CONTATO */
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

  /* HAMBURGER ICON */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    z-index: 20;
  }

  .hamburger span {
    width: 28px;
    height: 3px;
    background: #6b6b6b;
    border-radius: 3px;
    transition: 0.3s;
  }

  /* FULLSCREEN MENU */
  .fullscreen-menu {
    position: fixed;
    inset: 0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    z-index: 40;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* CLOSE BUTTON (ASCII ARROW) */
  .fullscreen-menu .close {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.6rem;
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
`;
