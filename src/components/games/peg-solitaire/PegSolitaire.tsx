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
  justifyContent: "center",
  gap: "12px",
  width: "100%",
  height: "100%",
  minHeight: 0,
  minWidth: 0,
  boxSizing: "border-box",
});

const GameBoard = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
  gridTemplateRows: "repeat(7, minmax(0, 1fr))",
  width: "min(100%, 65dvh)",
  maxHeight: "100%",
  aspectRatio: "1 / 1",
  flexShrink: 1,
});
