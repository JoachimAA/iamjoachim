import styled from "styled-components";

interface NodeProps {
  selected: boolean;
  empty: boolean;
}

export default function PegNode({ selected, empty }: NodeProps) {
  return <NodeContainer $selected={selected} $empty={empty} />;
}

const NodeContainer = styled.div<{ $selected: boolean; $empty: boolean }>`
  outline: ${({ $selected }) => ($selected ? "2px solid black" : "none")};
  border: 2px solid #e5e4e2;
  border-radius: 100px;
  height: calc(100% - 35%);
  width: calc(100% - 35%);
  background-color: ${({ $empty }) =>
    $empty ? "#C0C0C0" : "var(--primary-color)"};
`;
