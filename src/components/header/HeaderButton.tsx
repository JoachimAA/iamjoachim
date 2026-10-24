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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 4px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: calc(100% - 8px);
    height: 2px;
    background-color: currentColor;
    transform: translateX(-50%) scaleX(${(props) => (props.selected ? 1 : 0)});
    transform-origin: center;
    transition: transform 200ms ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;
