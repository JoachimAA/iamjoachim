import React, { useState } from "react";
import styled from "styled-components";
import PegNode from "./PegNode";
import { getColumn, getRow } from "./peg-solitaire-utils";
import Background from "./Background";
import Nodes from "./Nodes";

export default function PegSolitaire() {
  return (
    <GameBoard>
      <Background />
      <Nodes />
    </GameBoard>
  );
}

const GameBoard = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 60px)",
  gridTemplateRows: "repeat(7, 60px)",
});
