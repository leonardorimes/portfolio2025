import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NavBar, LogoWrapper } from "./styles";

export default function Nav() {
  return (
    <NavBar>
      <div className="logo">
        <LogoWrapper>
          <Image
            src="/logo.png"
            alt="logo leoanrdo rimes"
            fill
            style={{ objectFit: "contain" }}
          />
        </LogoWrapper>
      </div>
      <Link href="#">O que eu faço</Link>
      <Link href="#">Meu trabalho</Link>
      <Link href="#">Contato</Link>
      <div className="contact">
        <Link href="#">Entre em contato agora mesmo!</Link>
      </div>
    </NavBar>
  );
}
