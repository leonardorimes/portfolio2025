import Link from "next/link";
import { Container } from "@/app/styles/global";
import { FooterWrapper, Content, ContactButton } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Content>
          <span>Leonardo Rimes</span>
          <ContactButton>
            <Link
              href="https://wa.me/5522992724146?text=Olá!%20Vim%20através%20do%20seu%20site.%20Podemos%20conversar?"
              target="_blank"
            >
              Falar no WhatsApp
            </Link>
          </ContactButton>
        </Content>
      </Container>
    </FooterWrapper>
  );
}
