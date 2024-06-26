import React from "react";
import styled from "styled-components";
import Background from "./Background";
import Nodes from "./Nodes";
import Instructions from "./Instructions";

export default function PegSolitaire() {
  return (
    <Root>
      <GameBoard>
        <Background />
        <Nodes />
      </GameBoard>
      <Instructions />
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

const GameBoard = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, calc(100% / 7))",
  gridTemplateRows: "repeat(7, calc(100% / 7))",
  width: "100%",
  aspectRatio: "1 / 1",
});
