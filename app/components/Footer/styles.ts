"use client";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: 60px;
  padding: 40px 0;
  border-top: 1px solid rgba(106, 105, 105, 0.2);
  background: #f6f6f6;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  flex-wrap: wrap;

  span {
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

export const ContactButton = styled.div`
  border: 2px solid #25d366;
  border-radius: 999px;
  padding: 0.2rem;
  display: inline-block;
  transition: all 0.3s ease;

  a {
    display: block;
    background-color: #25d366;
    color: #fff;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: #1ebe5d;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.25);
  }

  &:hover a {
    background-color: #1ebe5d;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 600px) {
    a {
      padding: 0.5rem 1.2rem;
      font-size: 1.4rem;
    }
  }
`;
