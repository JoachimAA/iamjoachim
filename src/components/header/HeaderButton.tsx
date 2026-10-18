import styled from "styled-components";
import H3 from "../typography/H3";
import { useNavigate } from "react-router";

interface HeaderButtonProps {
  message: string;
  path: string;
}

export default function HeaderButton({ message, path }: HeaderButtonProps) {
  const navigate = useNavigate();
  return (
    <Container
      selected={window.location.pathname === path}
      onClick={() => navigate(path)}
    >
      <H3 message={message} />
    </Container>
  );
}

const Container = styled("div")<{ selected: boolean }>`
  ${(props) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 4px;
    cursor: pointer;
    text-decoration: ${props.selected ? "underline" : "none"};

    &:hover {
      text-decoration: underline;
    }
  `}
`;
