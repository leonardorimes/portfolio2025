import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <Image
        src="/logo.png"
        alt="logo leoanrdo rimes"
        width={120} // 👈 largura em px
        height={40}
      />
      <Link href="#">O que eu faço</Link>
      <Link href="#">Meu trabalho</Link>
      <Link href="#">Contato</Link>
      <div>
        <Link href="#">entre em contato</Link>
      </div>
    </nav>
  );
}
