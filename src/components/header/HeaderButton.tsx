import React from "react";
import styled from "styled-components";
import Title from "../typography/Title";
import { navigate } from "gatsby";

interface HeaderButtonProps {
  message: string;
  path: string;
}

export default function HeaderButton({ message, path }: HeaderButtonProps) {
  return (
    <Container
      selected={window.location.href.includes(path)}
      onClick={() => navigate(path)}
    >
      <Title message={message} />
    </Container>
  );
}

interface ContainerProps {
  selected: boolean;
}

const Container = styled("div")<{ selected: boolean }>`
  ${(props) => `
    background-color: ${
      props.selected ? "var(--secondary-color)" : "transparent"
    };
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 4px;
    cursor: pointer;
    color: ${
      props.selected ? "var(--primary-color)" : "var(--secondary-color)"
    };
  `}
`;

// const Container = styled("div")(({ selected }: ContainerProps) => ({
//   backgroundColor: selected ? "white" : "transparent",
//   borderRadius: "10px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "40px",
// }));

// const Container = styled("div", {
//   shouldForwardProp: (props) => props !== "selected",
// })(({ selected }: ContainerProps) => ({
//   backgroundColor: selected ? "white" : "transparent",
//   borderRadius: "10px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "40px",
// }));
