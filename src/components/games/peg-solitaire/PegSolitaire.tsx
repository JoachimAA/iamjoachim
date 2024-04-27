import React, { useState } from "react";
import styled from "styled-components";
import PegNode from "./PegNode";
import { getColumn, getRow } from "./peg-solitaire-utils";

const NUMBER_OF_GAME_BOARD_NODES = 33;

interface Node {
  column: number;
  row: number;
  idx: number;
}

export default function PegSolitaire() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [emptyNodes, setEmptyNodes] = useState<Node[]>([
    { idx: 16, column: 4, row: 4 },
  ]);

  const pegNodeArray = Array.from({ length: NUMBER_OF_GAME_BOARD_NODES });

  const nodes: Node[] = pegNodeArray.map((value, idx) => {
    const column = getColumn(idx);
    const row = getRow(idx, column);
    return { idx, column, row };
  });

  const updateEmptyNodes = (
    occupyingColumn: number,
    occupyingRow: number,
    jumpColumn: number,
    jumpRow: number
  ) => {
    setEmptyNodes((currentEmptyNodes) => {
      //add 2 nodes
      //remove 1
      if (selectedNode) {
        const newOccupiedNode = currentEmptyNodes.find(
          (node) => node.column === occupyingColumn && node.row === occupyingRow
        );

        const newIdx =
          newOccupiedNode && currentEmptyNodes.indexOf(newOccupiedNode);

        const jumpNode = nodes.find(
          (node) => node.column === jumpColumn && node.row === jumpRow
        );

        //remove newly occupied node from array
        if (typeof newIdx === "number" && newIdx !== -1) {
          currentEmptyNodes.splice(newIdx, 1);
        }

        const newEmptyNodes = [
          ...currentEmptyNodes,
          jumpNode,
          {
            idx: selectedNode?.idx,
            column: selectedNode?.column,
            row: selectedNode?.row,
          },
        ];

        return newEmptyNodes;
      } else {
        return currentEmptyNodes;
      }
    });
  };

  return (
    <GameBoard>
      <UpDown />
      <Across />
      {pegNodeArray.map((node, idx) => {
        const column = getColumn(idx);
        const row = getRow(idx, column);
        const nodeEmpty = Boolean(emptyNodes.some((node) => node.idx === idx));

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
              if (nodeEmpty) {
                if (selectedNode) {
                  if (
                    selectedNode?.column + 2 === column &&
                    selectedNode?.row === row
                  ) {
                    //right
                    console.log("right");
                    updateEmptyNodes(
                      selectedNode?.column + 2,
                      selectedNode?.row,
                      selectedNode?.column + 1,
                      selectedNode?.row
                    );
                  } else if (
                    selectedNode?.column - 2 === column &&
                    selectedNode?.row === row
                  ) {
                    //left
                    console.log("left");
                    updateEmptyNodes(
                      selectedNode?.column - 2,
                      selectedNode?.row,
                      selectedNode?.column - 1,
                      selectedNode?.row
                    );
                  } else if (
                    selectedNode?.row + 2 === row &&
                    selectedNode?.column === column
                  ) {
                    //down
                    console.log("down");
                    updateEmptyNodes(
                      selectedNode?.column,
                      selectedNode?.row + 2,
                      selectedNode?.column,
                      selectedNode?.row + 1
                    );
                  } else if (
                    selectedNode?.row - 2 === row &&
                    selectedNode?.column === column
                  ) {
                    //up
                    console.log("up");
                    updateEmptyNodes(
                      selectedNode?.column,
                      selectedNode?.row - 2,
                      selectedNode?.column,
                      selectedNode?.row - 1
                    );
                  }
                }
              } else {
                setSelectedNode(nodes[idx]);
              }
            }}
          >
            <PegNode selected={idx === selectedNode?.idx} empty={nodeEmpty} />
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

const NodeContainer = styled("div")({});

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
