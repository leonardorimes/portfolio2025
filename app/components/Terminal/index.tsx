"use client";
import { useEffect, useState } from "react";
import {
  TerminalWrapper,
  TopBar,
  Circle,
  Line,
  Cursor,
  Centralizar,
} from "./styles";
import { TerminalLine } from "./Terminal.types";
import { Container } from "@/app/styles/global";

export default function Terminal() {
  const lines: TerminalLine[] = [
    {
      id: 1,
      content: <span className="comment"># LeonardoRimesSpecialties.js</span>,
    },
    {
      id: 2,
      content: (
        <>
          <span className="import">import</span> {"{PHP, Javascript}"}{" "}
          <span className="from">from</span>{" "}
          <span className="path">{`'./Web/Languages'`}</span>;
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <span className="import">import</span>{" "}
          {"{Web, Mobile, Backend, Frontend}"}{" "}
          <span className="from">from</span>{" "}
          <span className="path">{`'./Roles/FullStack'`}</span>;
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <span className="import">import</span>{" "}
          {"{Next}"} <span className="from">from</span>{" "}
          <span className="path">{`'./Frameworks/Backend'`}</span>;
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <span className="import">import</span>{" "}
          {"{React, React Native}"}{" "}
          <span className="from">from</span>{" "}
          <span className="path">{`'./Frameworks/Frontend'`}</span>;
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <span className="import">import</span>{" "}
          {"{MySQL, Postgres, MongoDB}"}{" "}
          <span className="from">from</span>{" "}
          <span className="path">{`'./Database/Engines'`}</span>;
        </>
      ),
    },
    {
      id: 7,
      content: (
        <>
          <span className="keyword">export default</span>{" "}
          <span className="keyword">const</span>{" "}
          <span className="var">YourProject</span> =
        </>
      ),
    },
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((n) => n + 1);
      }, 700);

      return () => clearTimeout(timeout);
    } else {
      const restart = setTimeout(() => {
        setVisibleLines(0);
      }, 10000);

      return () => clearTimeout(restart);
    }
  }, [visibleLines]);

  return (
    <Container>
      <Centralizar>
        <TerminalWrapper>
          <TopBar>
            <Circle color="#ef4444" />
            <Circle color="#facc15" />
            <Circle color="#22c55e" />
          </TopBar>

          {lines.slice(0, visibleLines).map((line, index) => (
            <Line key={line.id} animated={true}>
              {line.content}
              {index === visibleLines - 1 && visibleLines < lines.length && (
                <Cursor />
              )}
            </Line>
          ))}

          {visibleLines === lines.length && (
            <Line>
              <Cursor />
            </Line>
          )}
        </TerminalWrapper>
      </Centralizar>
    </Container>
  );
}
