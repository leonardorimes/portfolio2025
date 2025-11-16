"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NavBar, LogoWrapper } from "./styles";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <NavBar>
      <div className="logo">
        <LogoWrapper>
          <Image
            src="/logo.png"
            alt="logo leonardo rimes"
            fill
            style={{ objectFit: "contain" }}
          />
        </LogoWrapper>
      </div>

      {/* MENU DESKTOP */}
      <div className="menu">
        <Link href="#">O que eu faço</Link>
        <Link href="#">Meu trabalho</Link>
        <Link href="#">Contato</Link>
        <div className="contact">
          <Link href="#">Entre em contato agora mesmo!</Link>
        </div>
      </div>

      {/* HAMBURGUER BUTTON */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* FULLSCREEN MENU (MOBILE) */}
      {open && (
        <div className="fullscreen-menu">
          <div className="close" onClick={() => setOpen(false)}>
            ← voltar
          </div>

          <Link href="#" onClick={() => setOpen(false)}>
            O que eu faço
          </Link>

          <Link href="#" onClick={() => setOpen(false)}>
            Meu trabalho
          </Link>

          <Link href="#" onClick={() => setOpen(false)}>
            Contato
          </Link>

          <div className="contact" onClick={() => setOpen(false)}>
            <Link href="#">Entre em contato agora mesmo!</Link>
          </div>
        </div>
      )}
    </NavBar>
  );
}
