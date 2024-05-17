import React from "react";
import styled from "styled-components";

interface NodeProps {
  selected: boolean;
  empty: boolean;
}

export default function PegNode({ selected, empty }: NodeProps) {
  return <NodeContainer selected={selected} empty={empty} />;
}

const NodeContainer = styled("div")<{ selected: boolean; empty: boolean }>`
  ${(props) => `
  outline: ${props.selected ? "2px solid black" : "none"};
  border: 2px solid #E5E4E2;
  border-radius: 100px;
  height: calc(100% - 35%);
  width: calc(100% - 35%);
  background-color: ${props.empty ? "#C0C0C0" : "var(--primary-color)"};
  `}
`;
