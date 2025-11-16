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
        <Link href="#do">O que eu faço</Link>
        <Link href="#work">Meu trabalho</Link>
        <div className="contact">
          <Link
            href="https://wa.me/5522992724146?text=Olá!%20Vim%20através%20do%20seu%20site.%20Podemos%20conversar?"
            target="_blank"
          >
            💬 Entre em contato agora mesmo!
          </Link>
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

          <Link href="#do" onClick={() => setOpen(false)}>
            O que eu faço
          </Link>

          <Link href="#work" onClick={() => setOpen(false)}>
            Meu trabalho
          </Link>

          <div className="contact" onClick={() => setOpen(false)}>
            <Link
              href="https://wa.me/5522992724146?text=Olá!%20Vim%20através%20do%20seu%20site.%20Podemos%20conversar?"
              target="_blank"
            >
              💬 Entre em contato agora mesmo!
            </Link>
          </div>
        </div>
      )}
    </NavBar>
  );
}
