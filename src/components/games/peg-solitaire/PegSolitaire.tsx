import React, { useState } from "react";
import styled from "styled-components";
import PegNode from "./PegNode";
import { getColumn, getRow } from "./peg-solitaire-utils";

const GAME_BOARD_SIZE = 7;
const NUMBER_OF_GAME_BOARD_NODES = 33;

export default function PegSolitaire() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [emptyNodes, setEmptyNodes] = useState<number[]>([16]);

  const pegNodeArray = Array.from({ length: NUMBER_OF_GAME_BOARD_NODES });

  return (
    <GameBoard>
      <UpDown />
      <Across />
      {pegNodeArray.map((node, idx) => {
        const column = getColumn(idx);
        const row = getRow(idx, column);
        const nodeEmpty = Boolean(emptyNodes.includes(idx));

        return (
          <NodeContainer
            key={idx}
            style={{
              gridColumn: column,
              gridRow: row,
              justifySelf: "center",
              alignSelf: "center",
            }}
            onClick={() => {
              if (!nodeEmpty) {
                setSelectedNode(idx);
              }
            }}
          >
            <PegNode selected={idx === selectedNode} empty={nodeEmpty} />
          </NodeContainer>
        );
      })}
    </GameBoard>
  );
}

const GameBoard = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(7, 60px)",
  gridTemplateRows: "repeat(7, 60px)",
});

const NodeContainer = styled("div")({
  backgroundColor: "#E5E4E2",
  gridArea: "1/3/8/6",
  borderRadius: "30px",
});

const UpDown = styled("div")({
  backgroundColor: "#E5E4E2",
  gridArea: "1/3/8/6",
  borderRadius: "30px",
});

const Across = styled("div")({
  backgroundColor: "#E5E4E2",
  gridArea: "3/1/6/8",
  borderRadius: "30px",
});
