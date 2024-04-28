import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getColumn, getRow } from "./peg-solitaire-utils";
import PegNode from "./PegNode";

const NUMBER_OF_GAME_BOARD_NODES = 33;

interface Node {
  column: number;
  row: number;
  idx: number;
  empty: boolean;
}

export default function Nodes() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const [nodes, setNodes] = useState<Node[]>(
    Array.from({ length: NUMBER_OF_GAME_BOARD_NODES }).map((value, idx) => {
      const column = getColumn(idx);
      const row = getRow(idx, column);
      return { idx, column, row, empty: idx === 16 ? true : false };
    })
  );

  const updateNodes = (clickedNode: Node, jumpNode: Node) => {
    setNodes((currentNodes) => {
      if (!selectedNode) return currentNodes;

      const updatedNodes = currentNodes.map((node) => {
        if (node.idx === clickedNode.idx) {
          return { ...node, empty: false };
        } else if (node.idx === jumpNode.idx || node.idx === selectedNode.idx) {
          return { ...node, empty: true };
        } else {
          return node;
        }
      });

      return updatedNodes;
    });
  };

  const getJumpNode = (clickedNode: Node) => {
    if (!selectedNode) return null;

    const { row, column } = selectedNode;

    if (column + 2 === clickedNode.column && row === clickedNode.row) {
      // right
      return nodes.find(
        (node) => node.column === column + 1 && node.row === row
      );
    } else if (column - 2 === clickedNode.column && row === clickedNode.row) {
      // left
      return nodes.find(
        (node) => node.column === column - 1 && node.row === row
      );
    } else if (row + 2 === clickedNode.row && column === clickedNode.column) {
      // down
      return nodes.find(
        (node) => node.row === row + 1 && node.column === column
      );
    } else if (row - 2 === clickedNode.row && column === clickedNode.column) {
      // up
      return nodes.find(
        (node) => node.row === row - 1 && node.column === column
      );
    } else {
      return null;
    }
  };

  const onClickNode = (idx: number, nodeEmpty: boolean) => {
    if (nodeEmpty) {
      const clickedNode = nodes[idx];
      const jumpNode = getJumpNode(clickedNode);
      if (jumpNode && !nodes.find((node) => node.idx === jumpNode.idx)?.empty) {
        updateNodes(clickedNode, jumpNode);
        setSelectedNode(clickedNode);
        if (!checkForPossibleMoves()) {
          console.log("game over");
        }
      }
    } else {
      setSelectedNode(nodes[idx]);
    }
  };

  useEffect(() => {
    if (!checkForPossibleMoves()) {
      const occupiedNodes = nodes.filter((node) => !node.empty);
      if (
        occupiedNodes.length === 1 &&
        occupiedNodes[0].column === 4 &&
        occupiedNodes[0].row === 4
      ) {
        console.log("you win");
      } else {
        console.log("you lose");
      }
    }
  }, [nodes]);

  const checkForPossibleMoves = () => {
    const occupiedNodes = nodes.filter((node) => !node.empty);

    for (const occupiedNode of occupiedNodes) {
      const possibleMoves = [
        {
          adjacent: { row: occupiedNode.row - 1, column: occupiedNode.column },
          jumpTo: { row: occupiedNode.row - 2, column: occupiedNode.column },
        },
        {
          adjacent: { row: occupiedNode.row + 1, column: occupiedNode.column },
          jumpTo: { row: occupiedNode.row + 2, column: occupiedNode.column },
        },
        {
          adjacent: { row: occupiedNode.row, column: occupiedNode.column - 1 },
          jumpTo: { row: occupiedNode.row, column: occupiedNode.column - 2 },
        },
        {
          adjacent: { row: occupiedNode.row, column: occupiedNode.column + 1 },
          jumpTo: { row: occupiedNode.row, column: occupiedNode.column + 2 },
        },
      ];

      for (const possibleMove of possibleMoves) {
        const isAdjacentOccupied = nodes.some(
          (node) =>
            node.row === possibleMove.adjacent.row &&
            node.column === possibleMove.adjacent.column &&
            !node.empty
        );

        const isJumpToAvailable = nodes.some(
          (node) =>
            node.row === possibleMove.jumpTo.row &&
            node.column === possibleMove.jumpTo.column &&
            node.empty
        );

        if (isAdjacentOccupied && isJumpToAvailable) {
          console.log("Found adjacent node with a jump available");
          console.log(
            "possible move c " +
              occupiedNode.column +
              " r " +
              occupiedNode.row +
              " -> c " +
              possibleMove.jumpTo.column +
              " r " +
              possibleMove.jumpTo.row
          );
          return true;
        }
      }
    }

    console.log("No moves left");
    return false;
  };

  return (
    <>
      {nodes.map((node, idx) => {
        return (
          <NodeContainer
            key={idx}
            style={{
              gridColumn: node.column,
              gridRow: node.row,
            }}
            onClick={() => onClickNode(idx, node.empty)}
          >
            <PegNode selected={idx === selectedNode?.idx} empty={node.empty} />
          </NodeContainer>
        );
      })}
    </>
  );
}

const NodeContainer = styled("div")({
  justifySelf: "center",
  alignSelf: "center",
});
