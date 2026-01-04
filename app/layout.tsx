import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GlobalStyle } from "./styles/global";
import StyledComponentsRegistry from "./lib/styled-component-registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Leonardo Rimes",
  description: "Portfolio de Leonardo Rimes",
  icons: {
    icon: "/favleo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ O Next.js exige que as tags <link> sejam auto-fechadas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <div className="container">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
